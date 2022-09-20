const Sequelize = require('sequelize');
const database = require('../db');

const vei_x_mot = database.define('vei_x_mot', {
    id  :     {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    vei_id   :   Sequelize.STRING,
    mot_id  :   Sequelize.INTEGER,
    dt_ult_alteracao  :   Sequelize.INTEGER,
    VGM_FLD : Sequelize.ENUM([0, 1])
},
{
    freezeTableName: true,
    timestamps: false
}
)

module.exports = vei_x_mot;