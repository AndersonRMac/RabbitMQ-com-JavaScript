const Cliente = require("../model/Cliente");

module.exports.findBySerial = function (cli_id){
    return veiculo = Cliente.findAll({
      where: 
        {
          CLI_ID: cli_id
        }
      })
}