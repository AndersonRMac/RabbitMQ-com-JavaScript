const Sequelize = require('sequelize');
const database = require('../db');

const Cliente = database.define('cliente', {
    CLI_ID  :     {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    CLI_DSC             :   Sequelize.INTEGER,
    CERCAS_INTEGRADAS   :   Sequelize.TINYINT,
},
{
    freezeTableName: true,
    timestamps: false
}
)

module.exports = Cliente;