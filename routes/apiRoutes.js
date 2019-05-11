var db = require("../models");
var passport = require("../config/passport");



module.exports = function(app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/profile");
  });




  // Get all examples
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {

      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {

    db.User.create(req.body).then(function(dbExample) {

      res.json(dbExample);
    });
  });

  // Create a new example
  app.post("/api/report", function(req, res) {

    // search for attributes
    // db.Skill.findOne({ where: {description: req.body.skill_id} }).then(project => {
    //   req.body.skill_id = project.id;
    //   db.Ticket.create(req.body).then(function(dbTicket) {
    //     res.json(dbTicket);
    //   });
    // });  

          db.Ticket.create(req.body).then(function(dbTicket) {
        res.json(dbTicket);
      });
  });


  // Get an example by id
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbExample) {

      res.json(dbExample);
    });
  });


//
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
//
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/skills_data", function(req, res) {

    db.Skill.findAll({}).then(function(dbSkill) {
      res.json(dbSkill);
    });
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      
  });
  
};

