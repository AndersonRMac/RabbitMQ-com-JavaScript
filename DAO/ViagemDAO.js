const Sequelize = require('sequelize');
const database = require('../db');

const Viagem = database.define('viagens', {
    id  :     {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    VEI_ID                          :   Sequelize.BIGINT,
    type                            :   Sequelize.INTEGER,
    EQP_SRN                         :   Sequelize.BIGINT,
    MOT_ID                          :   Sequelize.BIGINT,
    time_pc_initial                 :   Sequelize.DATE,
    time_pc_final                   :   Sequelize.DATE,
    
},
{
    freezeTableName: true,
    timestamps: false
}
)

module.exports = Viagem;