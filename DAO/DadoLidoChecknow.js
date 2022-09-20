const Sequelize = require('sequelize');
const database = require('./../db');

const DadoLidoChecknow = database.define('dado_lido_checknow', {
    ID  :     {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    VEI_ID  :   Sequelize.INTEGER,
    DDL_DH  :   Sequelize.DATE,
    DDL_LAT :   Sequelize.DOUBLE,
    DDL_LNG :   Sequelize.DOUBLE,
    DDL_DIR :   Sequelize.INTEGER,
    DDL_VEL :   Sequelize.TINYINT,
    DDL_BYT1:   Sequelize.TINYINT,
    DDL_BYT2:   Sequelize.TINYINT,
    DDL_ODM :   Sequelize.INTEGER,
    DDL_HRM :   Sequelize.INTEGER,
    DDL_TEN :   Sequelize.TINYINT,
    DDL_TMP :   Sequelize.FLOAT,
    DDL_CTM :   Sequelize.INTEGER,
    DDL_CSM :   Sequelize.SMALLINT,
    DDL_DHS :   Sequelize.DATE,
    DDL_MOD :   Sequelize.BIGINT,
    MOT_ID  :   Sequelize.SMALLINT,
    DDL_TMP2:   Sequelize.FLOAT,
    DDL_TMP3:   Sequelize.FLOAT
},
{
    freezeTableName: true,
    timestamps: false
}
)

module.exports = DadoLidoChecknow;