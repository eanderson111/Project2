$(document).ready(function() {
    // Getting references to our form and inputs
    var ticketForm = $("#ticket");
    var skillsCategory = $("#slct1").val().trim();
    var emergencyCheck = $("#emergency").val().trim();
    var workCategoryVal = $("#natureWork").val().trim();
    var scheduleCategory = $("#timeWork").val().trim();
    
    // hardcoded - replace one by one with new working functionality
    var submittedByVal= 1;
    var skillIdVal = 3;
  
    // When the form is submitted, we validate there's an email and password entered
    ticketForm.on("submit", function(event) {
      event.preventDefault();

      if(emergencyCheck === "emergency") {
          emergencyCheck = 1;
      } else {
          emergencyCheck = 0;
      }

      console.log("variable - ");
      console.log("Skills - " + skillsCategory);
      console.log("Emergency - " + emergencyCheck);
      console.log("Work Category - " + workCategoryVal);
      console.log("Schedule - " + scheduleCategory);

      var newTicket = {
        submitted_by: submittedByVal,
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
        $.post("/api/report", ticket, function() {
          window.location.href = "/report/submitted";
        });
      };
  
});
});
  