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

    var skillsArrayObject = defineSkillsArray(req.body.skills);

    db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip:  req.body.zip,
      lat:  0,
      lng:  0,
      email: req.body.email,
      password: req.body.password,
      createdAt: '2016-12-31 23:59:59',
      updatedAt: '2016-12-31 23:59:59'
    }).then(function(newUser){
      for (let skill of skillsArrayObject) {
        db.Skill.findOne({where: {description: skill.description}}).then(function(dbSkill) {
          db.UserSkill.create({
            userId: newUser.id,
            skillId: dbSkill.id
          });
        })
      }

      res.json(newUser);
     // console.log(newUser)

    });

  });

  function defineSkillsArray(allSelections) {

    skillsArray = [];

    for(var category in allSelections) {
        for(let subcategory of allSelections[category]){
          skillsArray.push( {
            type: category,
            description: subcategory,
            createdAt: '2016-12-31 23:59:59',
            updatedAt: '2016-12-31 23:59:59'
          });

        }
    }
    return skillsArray
}



  // Create a new example
  app.post("/api/report", function(req, res) {


    db.Ticket.create(req.body).then(function(dbTicket) {
      // probably need something here to handle proper/improper ticket creation
      // console.log("**********************");
      // console.log(dbTicket);  
      // var skill_id = dbTicket.dataValues.skill_id;
      res.json(dbTicket);

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
      
      console.log(dbUserSkill);
      res.render("reportStep2", {
        user: dbUserSkill
      });
      // console.log("exectuted this line");
    });

  });

  // Get an example by id
  app.get("/api/users/:id", function(req, res) {
    console.log("#################");
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbExample) {

      res.json(dbExample);
    });
  });

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












