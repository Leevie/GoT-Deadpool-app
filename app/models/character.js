// Setting up the table

var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var Character = sequelize.define("characters", {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    jonSnow: Sequelize.STRING,
    daniT: Sequelize.STRING,
    arya: Sequelize.STRING,
    sansa: Sequelize.STRING,
    bran: Sequelize.STRING,
    tyrion: Sequelize.STRING,
    varys: Sequelize.STRING,
    jorah: Sequelize.STRING,
    jaime: Sequelize.STRING,
    cersei: Sequelize.STRING,
    samwell: Sequelize.STRING,
    tormund: Sequelize.STRING,
    brienne: Sequelize.STRING,
    greyworm: Sequelize.STRING,
    missandei: Sequelize.STRING,
    podrick: Sequelize.STRING,
    theon: Sequelize.STRING,
    nightking: Sequelize.STRING,
    melisandre: Sequelize.STRING
});

Character.sync();

module.exports = Character;

