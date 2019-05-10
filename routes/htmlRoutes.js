var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.client.findAll({}).then(function(dbExamples) {
      res.render("falseindex", {
        msg: "Welcome!",
        clients: dbExamples
      });
    });
  });

  app.get("/signup", function(req, res) {
    db.client.findAll({}).then(function(dbExamples) {
      res.render("signup", {
        msg: "Welcome!",
        clients: dbExamples
      });
    });
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
  app.get("*", function(req, res) {
    res.render("404");
  });
};
