var dataFromApi = {};
var submittedByVal = 0;
$(document).ready(function() {

    var one = ["thingOne", "thingTwo", "thingThree"];
    var two = ["morethingOne", "morethingTwo", "morethingThree"];
    var three = ["anotherthingOne", "anotherthingTwo", "anotherthingThree"]
    var arrayThing = [one,two,three]
    var skillsArray = [];
    for(var selection in arrayThing) {
        console.log(selection);
        console.log("****HERE****");
      for(var s in selection) {
        if(typeof s !== 'undefined' && s) {
          skillsArray.push( {
            type: arrayThing[selection],
            description: selection[s]
          })
          console.log(skillsArray);
        }
      }
    }
  
    

    $.get("/api/skills_data").then(function(data) {
        console.log(data);

        dataFromApi = data;
        console.log(dataFromApi);
        populate('slct1','slct2');
    });

    $.get("/api/user_data").then(function(data) {
        console.log(data);
        submittedByVal = data.id;
    });




    // When the form is submitted, we validate there's an email and password entered
$("#ticket").on("submit", function(event) {
    event.preventDefault();

    var skillsCategory = $("#slct1").val().trim();
    var emergencyCheck = $("#emergency").prop('checked');
    var workCategoryVal = $("#natureWork").val().trim();
    var scheduleCategory = $("#timeWork").val().trim();
    var skillIdVal = document.querySelector('input[name = "group1"]:checked').getAttribute('data-id');


    console.log("Emergency Checkbox - " + emergencyCheck);

    if(emergencyCheck) {
        emergencyCheck = 1;
    } else {
        emergencyCheck = 0;
    }

    console.log("variables - ");
    console.log("Skills - " + skillsCategory);
    console.log("Emergency - " + emergencyCheck);
    console.log("Work Category - " + workCategoryVal);
    console.log("Schedule - " + scheduleCategory);
    console.log("Skill Subcategory - " + skillIdVal);

    var newTicket = {
    // submitted_by: submittedByVal,
    // FOR TESTING - comment the line above and uncomment the line below, allows ticket submission without logging in
    submitted_by: 1,
    skill_id: skillIdVal,
    emergency: emergencyCheck,
    work_category: workCategoryVal,
    schedule: scheduleCategory
    };
    console.log(newTicket);
  
    //   Client side validation here
  
      // If we have an email and password we run the loginUser function and clear the form
    createTicket(newTicket);
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    // function createTicket(ticket) {
    //   $.post("/api/report", ticket).then(function(data) {
    //     window.location.replace(data);
        
    //     // If there's an error, log the error
    //   }).catch(function(err) {
    //     console.log(err);
    //   });
    // };

    function createTicket(ticket) {
        $.post("/api/report", ticket, function(data) {
           console.log(data);
          window.location.href = "/report/step2/"+ data.skill_id;
        // window.location.href = "/report";
        });
      };
  
});
});