const Viagem = require("../model/Viagem");


    Viagem.create({
        type                                : 1,
        VEI_ID                              : VEI_ID,
        EQP_SRN                             : EQP_SRN,
        MOT_ID                              : MOT_ID,
        time_pc_initial                     : transmissao.resume.begin_at,
        time_pc_final                       : transmissao.resume.end_at,
        
    }).then(function(viagem){
        console.log("Viagem criada com sucesso",viagem.VEI_ID);
    }).catch(function (err) {
        console.log("Erro ao criar Viagem pesada", err);
    }); 

module.exports.findByVeiId = function (VEI_ID){
    return veiculo = Viagem.findOne({
        where: 
            {
                VEI_ID: VEI_ID
            },
        order: [
            ['time_pc_initial','DESC']
        ]
    
      })
  }

module.exports.salvar = salvar
