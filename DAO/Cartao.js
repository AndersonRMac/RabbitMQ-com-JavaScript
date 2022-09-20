const Sequelize = require('sequelize');
const database = require('../db');
const Motorista = require('./Motorista')

const Cartao = database.define('cartoes', {
    id_cartoes  :     {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    serial_cartao   :   Sequelize.STRING,
    codigo_interno  :   Sequelize.STRING,
    tipo_cartao_id  :   Sequelize.INTEGER,
    cliente_id      :   Sequelize.INTEGER,
    DATA_EXCLUSAO   :   Sequelize.DATE,

},
{
    freezeTableName: true,
    timestamps: false
}
)
Cartao.hasOne(Motorista, {foreignKey: 'id_cartao', targetKey: 'id_cartoes', allowNull: true });

module.exports = Cartao;