var db = require("../models");
var path = require("path");
//
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
      });
  
  

  app.get("/signup", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.render("signup", {

        msg: "Welcome!",
        clients: dbExamples
      });
    });
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
//
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be 
  //redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });






  /*

  // Load example page and pass in an example by id
  app.get("/clients/:id", function(req, res) {
    db.client.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("clients", {
        client: dbExample
      });
    });
  });

  app.get("/clients", function(req, res) {
    db.client.findAll({ }).then(function(dbExample) {
      res.render("clients", {
        client: dbExample
      });
    });


  });

  */
  

  // Render 404 page for any unmatched routes
 // app.get("*", function(req, res) {
 //   res.render("404");
 // });


};
