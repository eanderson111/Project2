var id;
var $name = $("#name");
var $address = $("#address");

$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
      Oid = (data.id-1)
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
    console.log(data[Oid].first_name)
    console.log(id + " inside get")
    console.log(data.length)
    var name = data[Oid].first_name + " " + data[Oid].last_name
    console.log(name)
    
    var $a = $("#name")
        .text(name) 
      //  .text(data[id].last_name)
      //  .text(data[1].address)


    $name.append($a);

    var $b = $("#address")
    .text(data[Oid].address) 
    $address.append($b);


  });

  
  
});
