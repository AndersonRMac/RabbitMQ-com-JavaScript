const Veiculo = require("../model/Veiculo");
const Cliente = require("../model/Cliente");
const { Op } = require("sequelize");
const sequelize = require("../db");

module.exports.findBySerial = function (serial){
    return veiculo = Veiculo.findAll({
      include: [{
        model: Cliente
      }],  
      where: 
        {
          EQP_SRN: serial
        }
      })
}
module.exports.findByIter = function (){
  return veiculo = Veiculo.findAll({
    where: 
      {
        ITER_ID: {
          [Op.not]: null
        },
        EQP_SRN: {
          [Op.not]: null
        }
      }
    })
}