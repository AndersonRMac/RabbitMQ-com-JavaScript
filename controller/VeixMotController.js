const vei_x_mot = require("../model/vei_x_mot");

module.exports.findByVeiId = function (veiculo_id){
  return vei = vei_x_mot.findAll({
    where: 
      {
        vei_id: veiculo_id
      }
    })
}