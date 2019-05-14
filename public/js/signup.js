var user = {}


user.categories =[]
user.subcategories =[]

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
    var categoryChosen = this.id;

    $('#myModal').modal('show').on('shown.bs.modal', function() {
      $('#checkboxes').html("")

      console.log(categoryChosen);
      // client.categories.push(categoryChosen);
      // console.log(subCategories[categoryChosen]);

    $.each(subCategories[categoryChosen], function(i)
    {
        var li = $('<li/>')
            .addClass('rad')
            .attr('role', 'menuitem')
            .appendTo($('#checkboxes'));
      
       var aaa = $('<a>')
            .addClass('ui-all')
            .appendTo(li);
      
      var input = $('<input/>')
            .addClass('ui-all')
            .attr('type', 'checkbox')
            .attr('value', subCategories[categoryChosen][i])
            .attr('id' , categoryChosen)
            .attr('name' , 'subcategory[]')
            .appendTo(aaa);
             
      var aaaa = $('<span>')
            .text(subCategories[categoryChosen][i])
            .appendTo(aaa);
    })
  })
})
});

 
var allSelections = {
  plumbing: [],
  electrical: [],
  appliances: [],
  household: [],
  landcaping: [],
  painting: [],
  housecleaning: [],
  heating: [],
  windows: [],
}

// // THIS GIVES ME AN ARRAY OF SUBCATEGORIES
  $('#modalSubmit').click(function(){
    var data = { 'subcategory[]' : []};
    $('#checkboxes input[name="subcategory[]"]:checked').each(function() {
      console.log(this.id)
      allSelections[this.id].push(this.value);
      user.categories=allSelections;
    })
    console.log("this is category & subcategory data: ", allSelections)
    console.log("this is the client data: ", user)
  });



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

 //getAddress(street)
 
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
    skills: allSelections,
    // skills: $clientSkills,//$clientSkills.val().trim(),
    lat: lat,
    lng: lng,
    email: $clientEmail.val().trim(),
    password: $clientPass.val().trim()
  };

  //street = client.address + "," + client.city + ","+ client.state
  console.log(allSelections)
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

