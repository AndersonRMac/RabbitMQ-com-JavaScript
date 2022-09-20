const Sequelize = require('sequelize');
const database = require('../db');

const Motorista = database.define('motoristas', {
    id_motoristas  :     {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    cliente_id      :   Sequelize.INTEGER,
    nome            :   Sequelize.INTEGER,
    id_cartao       :   Sequelize.INTEGER,
},
{
    freezeTableName: true,
    timestamps: false
}
)

module.exports = Motorista;