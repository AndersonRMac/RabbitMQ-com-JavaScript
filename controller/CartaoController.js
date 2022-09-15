const Cartao = require("../model/Cartao");
const Motorista = require("../model/Motorista");

module.exports.findBySerial = async function (serial){
  return veiculo = Cartao.findOne({
    include: [{
      model: Motorista,
      required:false
    }],  
    where:
      {
        serial_cartao: serial
      }
    })
}