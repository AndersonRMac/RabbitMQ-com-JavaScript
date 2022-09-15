const UltimoDadoLido = require("../model/UltimoDadoLido");
const VeiculoController = require("../controller/VeiculoController");
const ViagemController = require("../controller/ViagemController");
const VeixMotController = require("../controller/VeixMotController");
const DadoLidoChecknowController = require("../controller/DadoLidoChecknowController");
const CartaoController = require("../controller/CartaoController");
const DadoLido = require("../model/DadoLido");
const Cartao = require("../model/Cartao");
const vei_x_mot = require("../model/vei_x_mot");
const Infracoes = require("../model/Infracoes");
const {format} = require("date-fns"); 


const vetorInfracoes = ['04','05','06','07','08','09','10','0A','0B','0C','0D','0E','0F']
async function salvar(transmissao){
    VeiculoController.findBySerial(transmissao.uin).then((veiculo) => {
        UltimoDadoLido.findAll(
            {
                where : {VEI_ID : veiculo[0].VEI_ID}
        }).then(async (ultimoDadoLido) => {
            ultimoDadoLido[0].GPRS_DHS = transmissao.time_pc
            ultimoDadoLido[0].UDL_DHS  = transmissao.time_pc
            ultimoDadoLido[0].UDL_DH   = transmissao.gps_time
            ultimoDadoLido[0].UDL_MOD  = transmissao.uin 
            if(transmissao.lat)
                ultimoDadoLido[0].UDL_LAT  = transmissao.lat
            if(transmissao.lng)
                ultimoDadoLido[0].UDL_LNG  = transmissao.lng
            ultimoDadoLido[0].UDL_BYT1     = (transmissao.ignition == 1) ? -127 : -128
            ultimoDadoLido[0].UDL_BYT2     = -32
            if(transmissao.rpm)
                ultimoDadoLido[0].UDL_RPM  = transmissao.rpm
            if(transmissao.mileage)
                ultimoDadoLido[0].UDL_ODM  = Math.round(transmissao.mileage - 2147483648)
            if(transmissao.hourmeter)
                ultimoDadoLido[0].UDL_HRM =  Math.round( transmissao.hourmeter + 32768 )
            if(transmissao.temperature)
                ultimoDadoLido[0].UDL_TMP  = transmissao.temperature
            ultimoDadoLido[0].UDL_VEL  = Math.round((transmissao.speed / 1.8520043) * 10)
            ultimoDadoLido[0].UDL_TEN  = Math.round((transmissao.voltage / 0.465) -128 )
            ultimoDadoLido[0].UDL_DIR  = ( Math.round((transmissao.bearing / 45)) >= 8) ? 0 : Math.round((transmissao.bearing / 45))
            
            if(transmissao.quadcan && transmissao.quadcan.type)
            {
                if(transmissao.quadcan.type == 1 || transmissao.quadcan.type == 2 || transmissao.quadcan.type == 3){
                    ViagemController.salvar(transmissao,ultimoDadoLido[0].VEI_ID)
                }
                else if(vetorInfracoes.includes(transmissao.quadcan.type)){

                    var veiMot = await VeixMotController.findByVeiId(veiculo[0].VEI_ID);
                    var motoristaId = null
                    if(veiMot[0]){
                        if(veiMot[0].VGM_FLD == 1 || veiMot[0].VGM_FLD == '1'){
                            motoristaId = veiMot[0].mot_id
                        }
                    }
                    var infracao = Infracoes.build({
                        VEI_ID          : veiculo[0].VEI_ID,
                        EQP_SRN         : transmissao.uin,
                        COD_INFRACAO    : transmissao.quadcan.type,
                        DDL_DH          : transmissao.gps_time,
                        DDL_DHS         : transmissao.time_pc,
                        LAT             : transmissao.lat,
                        LNG             : transmissao.lng,
                        VEL             : Math.round((transmissao.speed / 1.8520043) * 10),
                        IGN             : (transmissao.ignition == 1) ? -127 : -128,
                        MOT_ID          :  motoristaId
                    })
                    infracao.save().then(function(infracao){
                        console.log(`${transmissao.gps_time} - Serial -> ${transmissao.uin}, Infração criada com sucesso`);
                    }).catch(function (err) {
                        console.log(`${transmissao.gps_time} - Serial -> ${transmissao.uin}, Erro ao criar infração`, err);
                    });
                }
                else if(transmissao.quadcan.type == 12){
                    ultimoDadoLido[0].serial_cartao = transmissao.quadcan.driver_id
                    var cartao = await CartaoController.findBySerial(transmissao.quadcan.driver_id)
                    if(cartao[0]){
                        if(cartao[0].motorista){
    
                            ultimoDadoLido[0].MOT_ID = cartao[0].motorista.id_motoristas;
                            var veiMot = await VeixMotController.findByVeiId(veiculo[0].VEI_ID);
                            if(veiMot[0]){
                                veiMot[0].mot_id            = cartao[0].motorista.id_motoristas
                                veiMot[0].dt_ult_alteracao  = transmissao.time_pc
                                veiMot[0].VGM_FLD           = '1'
    
                                veiMot[0].save().then(function(veiMot){
                                    console.log(`${transmissao.gps_time} - Serial -> ${transmissao.uin}, Vei mot atualizado`);
                                }).catch(function (err) {
                                    console.log(`${transmissao.gps_time} - Serial -> ${transmissao.uin}, Erro ao atualizar vei_mot`, err);
                                });
                            }else{
                                var newVeiMot = vei_x_mot.build({
                                    vei_id          : veiculo[0].VEI_ID,
                                    mot_id          : cartao[0].motorista.id_motoristas,
                                    VGM_FLD         : '1',
                                    dt_ult_alteracao: transmissao.time_pc,
                                })
                                newVeiMot.save().then(function(newVeiMot){
                                    console.log(`${transmissao.gps_time} - Serial -> ${transmissao.uin}, Vei mot criado com sucesso`);
                                }).catch(function (err) {
                                    console.log(`${transmissao.gps_time} - Serial -> ${transmissao.uin}, Erro ao criar vei_mot`, err);
                                });
                            }
                        }
    
                    }else{
                        var newCartao = Cartao.build({
                            serial_cartao   : transmissao.quadcan.driver_id,
                            codigo_interno  : transmissao.quadcan.driver_id,
                            tipo_cartao_id  : 8,
                            cliente_id      : veiculo[0].CLI_ID
                        })
                        newCartao.save().then(function(newCartao){
                            console.log(`${transmissao.gps_time} - Serial -> ${transmissao.quadcan.driver_id}, Novo cartao criado no sistema`);
                        }).catch(function (err) {
                            console.log(`${transmissao.gps_time} - Serial -> ${transmissao.quadcan.driver_id}, Erro ao tentar criar cartao`, err);
                        }); 
                    }
                    
                }
                else if(transmissao.quadcan.type == 13){
                    ultimoDadoLido[0].MOT_ID        = 0
                    ultimoDadoLido[0].serial_cartao = null
                }
            }
            if(transmissao.lat != undefined){
                if(veiculo[0].cliente){
                    if(veiculo[0].cliente.CERCAS_INTEGRADAS == 1){
                        DadoLidoChecknowController.salvar(ultimoDadoLido[0])
                    }
                }
                DadoLido.salvar(ultimoDadoLido[0])
            }
            ultimoDadoLido[0].save().then(function(ultimoDadoLido){
                console.log(`${transmissao.gps_time} - Serial -> ${transmissao.uin}, Ultimo dado lido atulizado com sucesso`);
            }).catch(function (err) {
                console.log(`${transmissao.gps_time} - Serial -> ${transmissao.uin}, Ultimo dado lido não atualizado`, err);
            }); 
        })
    }).catch(function (err) {
        console.log(`${transmissao.gps_time} - Serial -> ${transmissao.uin}, Veiculo nao cadastrado no sistema`);
    });

}
function add3Hours(data){
    const time = new Date(data)
    time.setHours(time.getHours() + 3)
    return time
}
module.exports.salvar = salvar
