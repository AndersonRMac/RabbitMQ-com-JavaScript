const Sequelize = require('sequelize');
const sequelize = new Sequelize(`mysql://${process.env.USER_DB}
                                        :${process.env.PASSWORD_DB}@${process.env.IP_DB}
                                        :${process.env.PORT_DB}/${process.env.BANCO_DB}`, {

    // disable logging; default: console.log
    logging: false
  
  });

module.exports = sequelize;