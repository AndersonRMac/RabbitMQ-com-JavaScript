const Sequelize = require('sequelize');
const database = require('./../db');

const UltimoDadoLido = database.define('ult_dado_lido', {
    VEI_ID  :     {
        type        : Sequelize.INTEGER,
        primaryKey  : true
    },
    UDL_DH          :   Sequelize.DATE,
    UDL_LAT         :   Sequelize.DOUBLE,
    UDL_LNG         :   Sequelize.DOUBLE,
    UDL_DIR         :   Sequelize.INTEGER,
    UDL_VEL         :   Sequelize.TINYINT,
    UDL_BYT1        :   Sequelize.TINYINT,
    UDL_BYT2        :   Sequelize.TINYINT,
    UDL_ODM         :   Sequelize.INTEGER,
    UDL_HRM         :   Sequelize.INTEGER,
    UDL_TEN         :   Sequelize.TINYINT,
    UDL_TMP         :   Sequelize.FLOAT,
    UDL_CTM         :   Sequelize.INTEGER,
    UDL_CSM         :   Sequelize.SMALLINT,
    UDL_DHS         :   Sequelize.DATE,
    UDL_MOD         :   Sequelize.BIGINT,
    MOT_ID          :   Sequelize.SMALLINT,
    GPRS_DHS        :   Sequelize.DATE,
    IGN_OFF         :   Sequelize.DATE,
    UDL_RPM         :   Sequelize.INTEGER,
    UDL_TMP2        :   Sequelize.FLOAT,
    UDL_TMP3        :   Sequelize.FLOAT,
    serial_cartao   :   Sequelize.STRING
},
{
    freezeTableName: true,
    timestamps: false
}
)

module.exports = UltimoDadoLido;