const Sequelize = require('sequelize');
const database = require('./../db');
const Cliente = require('./Cliente');

const Veiculo = database.define('veiculo', {
    VEI_ID  :     {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    EQP_SRN: Sequelize.BIGINT,
    TPV_ID: Sequelize.STRING,
    CLI_ID: Sequelize.INTEGER,
    CLI_ID1: Sequelize.INTEGER,
    CLI_ID2: Sequelize.INTEGER,
    CLI_ID3: Sequelize.INTEGER,
    VEI_COX: Sequelize.INTEGER,
    VEI_DSC: Sequelize.STRING,
    VEI_PLC: Sequelize.STRING,
    VEI_MRC: Sequelize.STRING,
    VEI_MDL: Sequelize.STRING,
    VEI_COR: Sequelize.STRING,
    VEI_CHS: Sequelize.STRING,
    VEI_ANO: Sequelize.STRING,
    ICO_ID: Sequelize.STRING,
    VEI_FLD: Sequelize.TINYINT,
    VEI_DHS: Sequelize.DATE,
    VEI_DHC: Sequelize.DATE,
    STA_ID: Sequelize.INTEGER,
    OBS_VEI: Sequelize.BLOB,
    DT_INSTAL: Sequelize.DATE,
    VEI_ANO_FAB: Sequelize.STRING,
    VEI_REN: Sequelize.STRING,
    IGN_OFF: Sequelize.DATE,
    VEI_VMAX: Sequelize.SMALLINT,
    COR_ICONE: Sequelize.STRING,
    TIPO_ICONE: Sequelize.STRING,
    ESPELHAMENTO_TRIXLOG: Sequelize.INTEGER,
    DT_DESATIVACAO: Sequelize.DATE,
    SENSOR_ODOMETRO: Sequelize.INTEGER,
    SENSOR_TEMP: Sequelize.INTEGER,
    VEL_VIA: Sequelize.INTEGER,
    HORAS_USO_DIA: Sequelize.INTEGER,
    ID_TIPO_COMBUSTIVEL: Sequelize.INTEGER,
    TIPO_CONSUMO: Sequelize.STRING,
    CONSUMO: Sequelize.INTEGER,
    IDENTIFICADOR_MOTORISTA: Sequelize.INTEGER,
    CHECA_CERCA: Sequelize.INTEGER,
    ITER_ID: Sequelize.BIGINT,
    DATA_EXCLUSAO: Sequelize.DATE,
    
},
{
    freezeTableName: true,
    timestamps: false
}
)
Veiculo.belongsTo(Cliente, {foreignKey: 'CLI_ID'})
module.exports = Veiculo;