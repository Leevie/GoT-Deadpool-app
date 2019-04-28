// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var orm = require("../config/orm.js");

var Character = require("../models/character");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  // app.get("/api/:characters?", function(req, res) {

  //   // If the user provides a specific character in the URL...
  //   if (req.params.characters) {

  //     // Then display the JSON for ONLY that character.
  //     // (Note how we're using the ORM here to run our searches)
  //     orm.searchCharacter(req.params.characters, function(data) {
  //       res.json(data);
  //     });
  //   }

  //   // Otherwise...
  //   else {
  //     // Otherwise display the data for all of the characters.
  //     // (Note how we're using the ORM here to run our searches)
  //     orm.allCharacters(function(data) {
  //       res.json(data);
  //     });
  //   }

  // });

  app.get("/api/:characters?", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    if (req.params.characters) {
      Character.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(result){
        return res.json(result);
      });
    } else{
    Character.findAll({}).then(function(result) {
      // results are available to us inside the .then
      res.json(result);
    });
  }
  });


  // If a user sends data to add a new character...
  // app.post("/api/new", function(req, res) {

  //   // Take the request...
  //   var character = req.body;

  //   // Then send it to the ORM to "save" into the DB.
  //   orm.addCharacter(character, function(data) {
  //     console.log(data);
  //   });

  // });

  app.post("/api/new", function(req, res) {

    console.log("Character Data:  ");
    console.log(req.body);
    // console.log(req.body.jonSnow);
    // console.log(req.body.daniT);

    var routeName =  req.body.name.replace(/\s+/g, "").toLowerCase();

    Character.create({
      routeName: routeName,  // User's Name, lowercased for routing
      name: req.body.name, // User's Name as they entered it
      jonSnow: req.body.jonSnow,
      daniT: req.body.daniT,
      arya: req.body.arya,
      sansa: req.body.sansa,
      bran: req.body.bran,
      tyrion: req.body.tyrion,
      varys: req.body.varys,
      jorah: req.body.jorah,
      jaime: req.body.jaime,
      cersei: req.body.cersei,
      samwell: req.body.samwell,
      tormund: req.body.tormund,
      brienne: req.body.brienne,
      greyworm: req.body.greyworm,
      missandei: req.body.missandei,
      podrick: req.body.podrick,
      theon: req.body.theon,
      nightking: req.body.nightking
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });


};
