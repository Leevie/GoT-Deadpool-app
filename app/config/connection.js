// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

//=========== SEQUELIZED! ===========

var Sequelize = require("sequelize");

var sequelize = new Sequelize("gotDP_db", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

//===================================


// Exporting our connection
module.exports = sequelize;
