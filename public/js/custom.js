(function($) {

  // Add smooth scrolling to all links in navbar
  $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {

    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }

  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

})(jQuery);

// ************************************************************************
// >>>>>>>>> SIGN UP PAGE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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

      // console.log(categoryChosen);
      // console.log(subCategories[categoryChosen]);

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
            .attr('id' , categoryChosen + "[]")
            .attr('name' , subCategories[categoryChosen][i])
            .appendTo(aaa);
             
      var aaaa = $('<span>')
            .text(subCategories[categoryChosen][i])
            .appendTo(aaa);
    })
  })
  $('#button').trigger("reset");
})
});
