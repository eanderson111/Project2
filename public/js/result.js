$( ".js-help" ).each(function( index ) {
    console.log( index + ": " + $( this ).text() )
    $(this).on("click", function(){
        $('#myModal').modal('show').on('shown.bs.modal', function() {
            console.log("modal shown")
    })
        console.log(this)

    })
  });

    $('#dispatch').on('click', function() {
            console.log("button click")
                $('#myModal2').modal('show').on('shown.bs.modal', function() {
                    console.log("modal shown")
            })
});

