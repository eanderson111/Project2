

 $(document).ready(function() {

  var subCategories = {

    plumbing: ["Drain Clearing",
          "Faucets, Fixtures & Pipes",
          "Garbage Disposal",
          "Septic Systems, Sewers & Water Mains",
          "Sprinkler Systems",
          "Water Heaters",
          "Boilers & Radiators",
          "Pumps",
          "Water Softening & Purification"],

    electrical: [
        "Fixtures",
        "Fuse",
        "Outlets, Panels, Switches & Wiring",
        "Cables, Networks & Telephones",
        "Electronics, Computers & Home Media Systems",
        "Appliances",
        "Heating & Thermostats",
        "Home Security & Alarms"],
  
    appliances: ["Washing machine",
        "Refrigerator",
        "Dishwasher",
        "Dryer",
        "Range, stove or oven",
        "Garbage disposal"],

    household: [
        "Carpet & Draperies",
        "Windows",
        "Exterior Home",
        "Interior Home",
        "Ducts & Vents - Clean",
        "Chimney & Fireplace - Clean",
        "Waste Material & Junk Removal"],

  landcaping: ["Lawn Maintenance",
        "Bushes, Shrubs & Trees pruning",
        "Fences",
        "Outdoor Patios, Steps & Walkways fixes",
        "Mowers/mowing",
        "Planting"],

    painting: ["Exterior Painting or Staining",
        "Interior Painting or Staining",
        "Paint Removal and Cleaning",
        "Wallpapering"],
    housecleaning: ["Carpet & Draperies",
        "Windows",
        "Exterior Home",
        "Interior Home",
        "Ducts & Vents",
        "Chimney & Fireplace"],
    heating: [
        "Heating Systems",
        "Water Heaters",
        "Ducts & Vents",
        "Fireplaces, Inserts, Stoves & Barbecues",
        "Central Air Conditioning - Repair or Service",
        "Window A/C Unit - Service or Relocate"],
    windows: [
        "Stuck Windows",
        "Cracked Glass",
        "Leaks & Moisture",
        "Rotted Window Sill",
        "Heavy Drafts",
        "Locks & Hinges",]
}
        

  $('input[type="checkbox"]').click(function() {
    // $.each($("input[name='plumbing']:checked"), function() {
    //   console.log(plumbingArray)
    // });

//  for (i=0; i<skills.length; i++){
// 	console.log(skills);
// }

    var categoryChosen = this.id;
   


    $('#myModal').modal('show').on('shown.bs.modal', function() {
     
      $('#checkboxes').html("")

      console.log(categoryChosen);
      console.log(subCategories[categoryChosen]);


    $.each(subCategories[categoryChosen], function(i)
    {
        var li = $('<li/>')
            .addClass('ui-menu-item')
            .attr('role', 'menuitem')
            .appendTo($('#checkboxes'));
      
       var aaa = $('<a>')
            .addClass('ui-all')
            .appendTo(li);
      
      var input = $('<input/>')
            .addClass('ui-all')
            .attr('type', 'checkbox')
            .attr('value', subCategories[categoryChosen][i])
            .attr('id' , categoryChosen + "[]")
            .attr('name' , categoryChosen)
            .appendTo(aaa);
             
      var aaaa = $('<span>')
            .text(subCategories[categoryChosen][i])
            .appendTo(aaa);
    })
  })
})
});

// var bodyInput = $("plumbing")

// $('#modalSubmit').click(function(){
//   /* when the submit button in the modal is clicked, submit the form */
//   console.log("it's working")
//   var categorySubmit = {
//     categoryInput: $("[value=plumbing]:checked").val().trim(),
//     // subcategoryInput: $("[id^=plumbing]:checked")
//   };
//   console.log(categorySubmit)
// });

$(function(){
  $('#modalSubmit').click(function(){
    var selectSubcats = [];
    $(':checkbox:checked').each(function(i){
      selectSubcats[i] = $(this).val();
    });
    console.log(selectSubcats)
    subcat = selectSubcats
  });
});

var subcat = []

console.log(subcat)

// Get references to page elements
var $clientFName = $("#inputFirstName");
var $clientLName = $("#inputLastName");
var $clientAddress = $("#inputAddress");
var $clientCity = $("#inputCity");
var $clientState = $("#inputState");
var $clientPostal = $("#inputZip");
//var $clientSkills = $("#client-skills");
var $clientEmail = $("#signupEmail");
var $clientPass = $("#signupPassword");
var $submitBtn = $("#signUp");
var $clientList = $("#client-list");
var street = ""
var lat = 0
var lng = 0
var geo = []
var $clientSkills = 0

// The API object contains methods for each kind of request we'll make
var API = {
  saveClient: function(client) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(client)
    });
  },
  
  
};



// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  street = $clientAddress.val() + "," + $clientCity.val() + ","+ $clientState.val()
  console.log(street)

 getAddress(street)
 
 //.then(function(data){
 //       makeClient(lat,lng)
 //     });

  
  var client = {
    first_name: $clientFName.val().trim(),
    last_name: $clientLName.val().trim(),
    address: $clientAddress.val().trim(),
    city: $clientCity.val().trim(),
    state: $clientState.val().trim(),
    zip: $clientPostal.val().trim(),
    skills: $clientSkills,//$clientSkills.val().trim(),
    lat: lat,
    lng: lng,
    email: $clientEmail.val().trim(),
    password: $clientPass.val().trim()
  };

  //street = client.address + "," + client.city + ","+ client.state
  console.log(street)
  console.log(typeof street)
 //getAddress(street)
  console.log(lat)
  console.log(lng)
  console.log(selectSubcats)

  if (!(client.first_name && client.last_name && client.address && client.city && client.state && client.zip && client.email && client.password)) {
    alert("You must enter ALL the information!");
    return;
  }

 // });

 
  
  API.saveClient(client).then(function(data) {
    //window.location.replace(data);
    alert("You are now signed up")
    loginUser(client.email, client.password)
   
  });

  $clientFName.val("");
  $clientLName.val("");
  $clientAddress.val("");
  $clientCity.val("");
  $clientState.val("");
  $clientPostal.val("");
  //$clientSkills.val("")
  $clientEmail.val("")
  $clientPass.val("")

 
 
};


// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);



/*need to onSubmit take $clientAddress, $clientCity, and $clientState and put it into the freeform for here MAPS then
 add the lat/long from this to each client/contractor */

var getAddress = function(street) {

 $.ajax({
  url: 'https://geocoder.api.here.com/6.2/geocode.json',
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'jsoncallback',
  data: {
    searchtext: street,
    app_id: 'gTzFBcdTfpQdW07yxaRz',
    app_code: 'tPrTqfHoFM8mAgjmpdhAvg',
    gen: '9'
  },
  success: function (data) {
    //alert(JSON.stringify(data));
  //  console.log(JSON.stringify(data))
  //  console.log(data.Response.View[0].Result[0].Location)
    console.log(data.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude)
    console.log(data.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude)
//    console.log(data.Response.View[0].Result[0].Location.DisplayPosition.Latitude)
//    console.log(data.Response.View[0].Result[0].Location.DisplayPosition.Longitude)

    lat = (data.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude)
    lng = (data.Response.View[0].Result[0].Location.NavigationPosition[0].Longitude)

    geo.lat = lat
    geo.lng = lng
    
    return(geo)

  }
});

}

var makeClient = function(lat,lng){

  var client = {
    first_name: $clientFName.val().trim(),
    last_name: $clientLName.val().trim(),
    address: $clientAddress.val().trim(),
    city: $clientCity.val().trim(),
    state: $clientState.val().trim(),
    zip: $clientPostal.val().trim(),
    skills: $clientSkills,//$clientSkills.val().trim(),
    lat: lat,
    lng: lng,
    email: $clientEmail.val().trim(),
    password: $clientPass.val().trim()
  };

  street = client.address + "," + client.city + ","+ client.state
  console.log(street)
  console.log(typeof street)
 getAddress(street)
  console.log(lat)
  console.log(lng)

  if (!(client.name && client.address && client.city && client.state && client.postal_code)) {
    alert("You must enter ALL the information!");
    return;
  }

}

function loginUser(email, password) {
  $.post("/api/login", {
    email: email,
    password: password
  }).then(function(data) {
    window.location.replace(data);
    
    // If there's an error, log the error
  }).catch(function(err) {
    console.log(err);
  });
}

/*With this data for each user we can then based on selections add pins onto the map based on search criteria */