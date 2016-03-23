$(function () {

    // set variables
    var drivers_file = 'data/drivers.json';
    var pageHTML = "<div class='header'>"+
                        "<p class='heading'>Fantasy NASCAR Racing</p>"+
                    "</div>"+
                    "<div class='sidebar'>"+
                        "<h3 id='overall'>Overall Statistics</h3>"+
                        "<h3 id='teams'>Team Driver Info</h3>"+
                            "<ul>"+
                                "<li>Stephanie</li>"+
                                "<li>Matt</li>"+
                                "<li>Patrick</li>"+
                                "<li>Eric</li>"+
                                "<li>Jenna</li>"+
                                "<li>Joe</li>"+
                                "<li>Chris</li>"+
                                "<li>Evan</li>"+
                            "</ul>"+
                        "<h3 id='free'>Free Agent Info</h3>"+
                    "</div>"+
                    "<div class='main'>"+
                        "<h1 class = 'centered'>Welcome to Fantasy Nascar 2016!</h1>"+
                        "<h2 class = 'centered'>Select from the menu to begin</h2>"+
                    "</div>'";

    //add structure to page
    $('body').html(pageHTML);
        
    //hide driver options sections
    $('ul').hide();
    
    // show/hide driver options on click
    $('#teams').on('click', function(){
        $('ul').slideToggle();
    })
    
    // add/remove owner's team
    $('li').on('click', function(){
        var owner = $(this).text();
        loadDrivers(owner);
    })
    
    // adds removes drivers without owners
    $('#free').on('click', function(){
        var owner = 'Free';
        loadDrivers(owner);
    })
    
    // adds removes drivers without owners
    $('#overall').on('click', function(){
       displayTable();
    })
    
    // returns a count of the # of finishes at or below a cutoff
    function countTop ( positions, cutoff ) {
        var count = 0
        for (p=0; p<positions.length; p++){
          if (positions[p] <= cutoff & positions[p] > 0){
              count = count+1;
          }
        }
        return count;
    };
    
    // returns a cumulative sum
    function sum ( points ) {
        var count = 0
        for (p=0; p<points.length; p++){
         count = count + points [p];
        }
        return count;
    };
    
    // returns the count of Did Not Finish (DNF)
    function calculateDNF (status){
        var DNFcount = 0;
        var RaceCount = 0;
        for (s=0; s<status.length; s++){
          if (status[s] !== "Running" & status[s] !== "Did Not Race"){
              DNFcount = DNFcount+1;
          }
          if (status[s] !== "Did Not Race"){
              RaceCount = RaceCount+1;
          }  
        }
        return DNFcount + ' of ' + RaceCount + ' Races';
    };
    
    // builds html for a given team owner
    function loadDrivers(owner) {

        $.getJSON(drivers_file).done(function (data) {
            
            var driversHTML="<div>";
            var drivers = data.drivers;

            if (owner=='Free'){
                driversHTML += '<h1 class= "centered" id="Free"> Free Agents</h1><div>';
            } else {
                driversHTML += '<h1 class= "centered">'+owner+'\'s Team</h1>';
            }

             $.each(drivers, function (index, val) {
                 
                    if (val.fantasy === owner) {
                        var driver = val.name;
                        
                        var wins = countTop(val.position, 1);
                        var top5 = countTop(val.position, 5);
                        var top10 = countTop(val.position, 10);
                        var pointsTotal = sum(val.points);
                        var DNF = calculateDNF(val.status);
                        
                        driversHTML += '<div class="driverdiv centered"><img class= "driverImg" src="images/drivers/' +
                            val.image + '"><h2>' + driver + 
                            '</h2><p><strong>Car Number: </strong>' + val.car + '</p>'+
                            '<p><strong>Make: </strong>' + val.make + '</p>'+
                            '<p><strong>Team: </strong>' + val.team + '</p>'+
                            '<p><strong>Sponsor: </strong>' + val.sponsor + '</p>'+
                            '<p><strong>Wins: </strong>' + wins + '</p>'+
                            '<p><strong>Points: </strong>' + pointsTotal + '</p>'+
                            '<p><strong>Top 5: </strong>' + top5 + '</p>'+
                            '<p><strong>Top 10: </strong>' + top10 + '</p>'+
                            '<p><strong>DNF: </strong>' + DNF + '</p>'+
                            '</div>';
                    }
                });
            
             driversHTML += '</div>';
             $('.main').html(driversHTML);
        });

    };
    
    // formats json to array for datatables and adds table to dom
    function displayTable (){

          var tableHTML='<h1 class = "centered">All Driver Statistics</h1>'+
              '<table id="table" class ="cell-border" cellspacing="0" width="100%"></table>';
          $('.main').html(tableHTML); 
        
          $.getJSON(drivers_file).done(function (data) {
            
            var driversArray= new Array;
            var drivers = data.drivers;

             $.each(drivers, function (index, val) {
                 
                   
                        var driver = val.name;
                        var wins = countTop(val.position, 1);
                        var top5 = countTop(val.position, 5);
                        var top10 = countTop(val.position, 10);
                        var pointsTotal = sum(val.points);
                        var DNF = calculateDNF(val.status);
                        
                  thisRow = [driver, val.car, val.make, val.team, val.fantasy, wins, top5, top10, pointsTotal, DNF];     
                 
                 driversArray.push(thisRow);
                 
                });
              
                $('#table').DataTable( {
                    data: driversArray,
                    paging: false,
                    columns: [
                        { title: "Name" },
                        { title: "Car Number" },
                        { title: "Make" },
                        { title: "Team" },
                        { title: "Owner" },
                        { title: "Wins" },
                        { title: "Top 5" },
                        { title: "Top 10" },
                        { title: "Points" },
                        { title: "DNF"}
                    ]
            } );
        });
        

    };
    
});
