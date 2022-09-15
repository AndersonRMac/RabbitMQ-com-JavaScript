const { Op } = require("sequelize");
const sequelize = require("../db");
const Cmd_env = require("../model/cmd_env");

module.exports.findByVeiId = function (vei_id){
    let data = new Date();
    data.setDate(data.getDate() - 30);

    return comando = Cmd_env.findAll({
      where: 
        {
          VEI_ID: vei_id,
          CME_DHE: {
            [Op.is]: null
          },
          CME_TQTD: {
            [Op.gt] : sequelize.col('CME_TEXE')
          },
          CME_DHC: {
            [Op.gt] : data
          }
        }
      })
}