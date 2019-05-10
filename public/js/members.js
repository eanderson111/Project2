var id;
var $name = $(".Fname");

$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
      id = data.id
      console.log(id + " line 9")
   // $(".name").text(data.first_name);

  });

  var getExamples = function() {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  }

  
  getExamples().then(function(data) {
    console.log(data[1].first_name)
    console.log(id + " inside get")
    
    var $a = $("<p>")
        .text(data[1].first_name) 
      //  .text(data[1].last_name)
      //  .text(data[1].address)


    $name.append($a);

  });

  
  
});
