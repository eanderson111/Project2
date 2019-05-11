var id;
var idSEL = 0
var $submitBtn = $("#submit");
var $name = $("#name");


$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
      id = (data.id-1)
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
    console.log(data[id].first_name)
    console.log(id + " inside get")
    console.log(data.length)
    var name = data[id].first_name + " " + data[id].last_name
    console.log(name)
    
    var $a = $("#name")
        .text(name) 
      
      $name.append($a);
   
  });

  $("#tableC tr").click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');    
    var value=$(this).find('td:first').html();
//    console.log(value);
//    console.log(typeof value)
    idSEL = parseInt(value);
//    console.log(typeof idSEL)
    return value  
 });  


 $("#tableN tr").click(function(){
  $(this).addClass('selected').siblings().removeClass('selected');    
  var value=$(this).find('td:first').html();
//    console.log(value);
//    console.log(typeof value)
  idSEL = parseInt(value);
//    console.log(typeof idSEL)
  return value  
});  







});


var handleFormSubmit = function(event) {
    event.preventDefault();
    alert("your report has been submitted")

  }

  $submitBtn.on("click", handleFormSubmit);
 
 