const Sequelize = require('sequelize');
const database = require('../db');

const Cmd_env = database.define('cmd_env', {
    CME_ID  :     {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    VEI_ID  :   Sequelize.INTEGER,
    USR_ID  :   Sequelize.TINYINT,
    VEI_ID  :   Sequelize.INTEGER,
    USR_ID  :   Sequelize.INTEGER,
    CME_PAR :   Sequelize.STRING,
    CME_DHC :   Sequelize.STRING,
    CME_DHA :   Sequelize.STRING,
    CME_DHE :   Sequelize.STRING,
    CME_TQTD:   Sequelize.INTEGER,
    CME_TEXE:   Sequelize.INTEGER,
    CME_PRO :   Sequelize.INTEGER,
    CMD_RESP:   Sequelize.STRING,
},
{
    freezeTableName: true,
    timestamps: false
}
)

module.exports = Cmd_env;