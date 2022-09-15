const eventosRastreadores = require("../model/EventosRastreadores");
const UltimoDadoLido = require("../model/UltimoDadoLido");
const VeiculoController = require("./VeiculoController");
const {format} = require("date-fns"); 


async function salvar(transmissao){
    if(convertCodEvent(transmissao.kind) == 0){
        console.log("Evento nao cadastrado")
    }
    else{
        VeiculoController.findBySerial(transmissao.uin).then((veiculo) => {
            eventosRastreadores.create({
                VEI_ID          : veiculo[0].VEI_ID,
                EQP_SRN         : transmissao.uin,
                COD_EVENTO      : convertCodEvent(transmissao.kind),
                TEXTO_EVENTO    : '',
                DDL_DH          : transmissao.time_pc,
                DDL_DHS         : transmissao.time_pc,
                ALERTA_EMAIL    : 0,
                NOTIFICACAO_APP : 0,         
                ID_REGRA        : 0,
                ID_STATUS       : 1,    
                LAT             : transmissao.lat,   
                LNG             : transmissao.lng,  
                VEL             : (transmissao.speed) ? transmissao.speed : 0,   
                IGN             : (transmissao.ignition) ? ((transmissao.ignition == 0) ? -127 : -128) : 0
            }).then(function(evento){
                console.log(`${transmissao.time_pc} - Serial -> ${transmissao.uin}, Evento ( ${transmissao.kind} ) cadastrado com sucesso`);
            }).catch(function (err) {
                console.log(`${transmissao.time_pc} - Serial -> ${transmissao.uin}, Evento ( ${transmissao.kind} ) não cadastrado`);
            });
        }).catch(function (err) {
            console.log(`${transmissao.time_pc} - Serial -> ${transmissao.uin}, Veiculo nao cadastrado no sistema`);
        });
    }
}

function convertCodEvent(kind){
    switch(kind){
        case 'low_voltage_of_vehicle_battery':
            return 1
        case 'ignition_on':
            return 2
        case 'ignition_off':
            return 3
        case 'panic':
            return 5
        default:
            return 0
        
    }
}

function add3Hours(data){
    const time = new Date(data)
    time.setHours(time.getHours() + 3)
    return time
}
module.exports.salvar = salvar
