const DadoLidoChecknow = require("../model/DadoLidoChecknow");
const {format} = require("date-fns"); 


async function salvar(ultimoDadoLido){
    DadoLidoChecknow.create({
        
        VEI_ID  :   ultimoDadoLido.VEI_ID,
        DDL_DH  :   ultimoDadoLido.UDL_DH, 
        DDL_LAT :   ultimoDadoLido.UDL_LAT,
        DDL_LNG :   ultimoDadoLido.UDL_LNG,
        DDL_DIR :   ultimoDadoLido.UDL_DIR,
        DDL_VEL :   ultimoDadoLido.UDL_VEL,
        DDL_BYT1:   ultimoDadoLido.UDL_BYT1,
        DDL_BYT2:   ultimoDadoLido.UDL_BYT2,
        DDL_ODM :   ultimoDadoLido.UDL_ODM,
        DDL_HRM :   ultimoDadoLido.UDL_HRM,
        DDL_TEN :   ultimoDadoLido.UDL_TEN,
        DDL_TMP :   (ultimoDadoLido.UDL_TMP) ? ultimoDadoLido.UDL_TMP : -1000,
        DDL_CTM :   ultimoDadoLido.UDL_CTM,
        DDL_CSM :   ultimoDadoLido.UDL_CSM,
        DDL_DHS :   ultimoDadoLido.UDL_DHS, 
        DDL_MOD :   ultimoDadoLido.UDL_MOD,
        MOT_ID  :   ultimoDadoLido.MOT_ID,
        DDL_TMP2:   ultimoDadoLido.UDL_TMP2 ? ultimoDadoLido.UDL_TMP2 : -1000,
        DDL_TMP3:   ultimoDadoLido.UDL_TMP3 ? ultimoDadoLido.UDL_TMP3 : -1000,
        
    }).then(function(dadoLidoChecknow){
        console.log(`${format(ultimoDadoLido.UDL_DH, "yyyy-MM-dd HH:mm:ss")} - Serial -> ${dadoLidoChecknow.DDL_MOD}, Dado lido checknow cadastrado com sucesso`);
    }).catch(function (err) {
        console.log(err);
    });
}

module.exports.salvar = salvar
