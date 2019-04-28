// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

//=========== SEQUELIZED! ===========

var Sequelize = require("sequelize");
var mysql_db = mysql.createConnection(process.env.JAWSDB_URL);

var sequelize = new Sequelize(mysql_db, "g2xngxairmj5k17b", "qptguaeyllia8bq2", {
  host: "gk90usy5ik2otcvi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
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
