$(document).ready(function() {
    $('#submit').on('click', function() {
        console.log("button click")
            $('#myModal').modal('show').on('shown.bs.modal', function() {
                console.log("modal shown")
        })
});

    $('#dispatch').on('click', function() {
            console.log("button click")
                $('#myModal2').modal('show').on('shown.bs.modal', function() {
                    console.log("modal shown")
            })
});
});
