const Sequelize = require('sequelize');
const database = require('../db');

const infracoes = database.define('infracoes', {
    ID  :     {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    VEI_ID          :   Sequelize.INTEGER,
    EQP_SRN         :   Sequelize.BIGINT,
    COD_INFRACAO    :   Sequelize.STRING,
    TEXTO_INFRACAO  :   Sequelize.STRING,
    DDL_DH          :   Sequelize.DATE,
    DDL_DHS         :   Sequelize.DATE,
    LAT             :   Sequelize.FLOAT,
    LNG             :   Sequelize.FLOAT,
    VEL             :   Sequelize.INTEGER,
    IGN             :   Sequelize.SMALLINT,
    MOT_ID          :   Sequelize.INTEGER
},
{
    freezeTableName: true,
    timestamps: false
}
)

module.exports = infracoes;