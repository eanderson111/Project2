// Get references to page elements
var $clientFName = $("#inputFirstName");
var $clientLName = $("#inputLastName");
var $clientAddress = $("#inputAddress");
var $clientCity = $("#inputCity");
var $clientState = $("#inputState");
var $clientPostal = $("#inputZip");
//var $clientSkills = $("#skills-selection");
var $clientEmail = $("#signupEmail");
var $clientPass = $("#signupPassword");
var $submitBtn = $("#submit");
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

 // getAddress(street)
  //.then(function(){

  //makeClient()
  
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
 //getAddress(street)
  console.log(lat)
  console.log(lng)

  if (!(client.first_name && client.last_name && client.address && client.city && client.state && client.zip && client.email && client.password)) {
    alert("You must enter ALL the information!");
    return;
  }

 // });
 
  
  API.saveClient(client).then(function() {
    alert("You are now signed up")
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

var makeClient = function(){

  var client = {
    first_name: $clientFName.val().trim(),

    address: $clientAddress.val().trim(),
    city: $clientCity.val().trim(),
    state: $clientState.val().trim(),
    postal_code: $clientPostal.val().trim(),
    skills: $clientSkills.val().trim(),
    lat: lat,
    lng: lng
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

/*With this data for each user we can then based on selections add pins onto the map based on search criteria */