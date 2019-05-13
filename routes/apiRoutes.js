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

    // Figure out a way to save out to the database
    // db.User.create({
    //   id: 10,
    //   first_name: "Ben",
    //   last_name: "Andersen",
    //   address: "aString",
    //   city: "aCity",
    //   state: "astate",
    //   zip:  55432,
    //   lat:  87.12345,
    //   lng:  52.12345,
    //   email: "bcandersen06@yahoo.com",
    //   password: "aPassword",
    //   createdAt: '2016-12-31 23:59:59',
    //   updatedAt: '2016-12-31 23:59:59',
    //   skillAlias: [
    //     {
    //       type: "newType",
    //       description : "newDescription",
    //       createdAt: '2016-12-31 23:59:59',
    //       updatedAt: '2016-12-31 23:59:59'
    //     },
    //     {
    //       type: "newType2",
    //       description : "newDescription2",
    //       createdAt: '2016-12-31 23:59:59',
    //       updatedAt: '2016-12-31 23:59:59'
    //     }
    //   ]

    // }, {
    //   include: [{
    //     model: db.Skill,
    //     as: 'skillAlias'
    //    }]
    // });

    db.Ticket.create(req.body).then(function(dbTicket) {
      // probably need something here to handle proper/improper ticket creation
      console.log("Inside the Post");
      // res.json(dbTicket);
      // req.redirect("report/step2/" + req.body.skill_id);
      // What the hell?
      res.render("index");
      console.log("After the response");
    });

  });

  

  // Needed?
  app.get("/report/step2/:skill_id", function(req, res) {
    console.log("Inside the redirect");
    db.User.findAll({
      include: [{
          model: db.Skill,
          as: 'skillAlias',
          where: { id: req.params.skill_id }
      }]
    }).then(function(dbUserSkill) {
      console.log("Reporting from the API");
      // console.log(dbUserSkill);
      // res.json(dbUserSkill);
      res.render("reportStep2", {
        user: dbUserSkill
      });
      // console.log("exectuted this line");
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

