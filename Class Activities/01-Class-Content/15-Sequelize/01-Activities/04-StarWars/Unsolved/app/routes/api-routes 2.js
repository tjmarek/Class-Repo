// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../models/character.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api", function(req, res) {
      Character.findAll({}).then(function(data) {
        res.json(data);
      });
    });

    app.get("/api/:characters", function(req, res) {

      // If the user provides a specific character in the URL...
  
      Character.findOne({ 
        where: {
          name: req.params.characters
        } 
      }).then(function(data) {
        if(data) {
          res.json(data);
        }
      });

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var CharacterItems = {
      routeName: req.body.name,
      role: req.body.role,
      name: req.body.name,
      age: req.body.age,
      forcePoints: req.body.forcePoints
    };

    Character.create(CharacterItems).then(function(data) {
      console.log(data);
      res.send();
    });


  });
};
