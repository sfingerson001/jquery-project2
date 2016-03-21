$(function () {

    var drivers_file = 'data/drivers.json';

    function loadDrivers() {

        $.getJSON(drivers_file).done(function (data) {
            
            var driversHTML="";
            var drivers = data.drivers;
            var test_page = "Stephanie";
            driversHTML += '<h1 class= "centered">Stephanie\'s Team</h1><div>';
            
             $.each(drivers, function (index, val) {
                 
                    if (val.fantasy === 'Stephanie') {
                        driversHTML += '<div class="driverdiv centered"><img class= "driverImg" src="images/drivers/' +
                            val.image + '"><h3>' + val.name + 
                            '</h3><p><strong>Make:</strong>' + val.make + '</p></div>';
                    }
                });
            
             driversHTML += '</div>';
             $('.main').html(driversHTML);
        });

    };
    
    
   loadDrivers();
    

});
