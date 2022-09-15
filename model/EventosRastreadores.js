const Sequelize = require('sequelize');
const database = require('./../db');

const eventosRastreadores = database.define('eventos_rastreadores', {
    ID  :     {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    VEI_ID          :   Sequelize.INTEGER,
    EQP_SRN         :   Sequelize.BIGINT,
    COD_EVENTO      :   Sequelize.SMALLINT,
    TEXTO_EVENTO    :   Sequelize.STRING,
    DDL_DH          :   Sequelize.DATE,
    ALERTA_EMAIL    :   Sequelize.SMALLINT,
    NOTIFICACAO_APP :   Sequelize.SMALLINT,
    DDL_DHS          :   Sequelize.DATE,
    ID_REGRA        :   Sequelize.INTEGER,
    ID_STATUS       :   Sequelize.SMALLINT,
    LAT             :   Sequelize.TINYINT,
    LNG             :   Sequelize.FLOAT,
    VEL             :   Sequelize.INTEGER,
    IGN             :   Sequelize.SMALLINT,
},
{
    freezeTableName: true,
    timestamps: false
}
)

module.exports = eventosRastreadores;