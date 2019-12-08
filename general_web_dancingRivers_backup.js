

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}



function initMap() {
    // The location of Uluru
    //-75.355, -10.722
    //-75.399, -10.938
    //lat: -25.344, lng: 131.036
    var uluru = {lat: -9.348230, lng: -74.869015};
    var peruBounds = {north: 2.8, south: -19.5, west: -85.0, east: -65.0};

    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5.3,
        center: uluru,
        disableDefaultUI: true,
        scaleControl: false,
        gestureHandling: 'none',
        zoomControl: false,
        /*gestureHandling: 'greedy',*/
        //gestureHandling: 'greedy',
        restriction: {
            latLngBounds: peruBounds,
            strictBounds: false,
        },
        styles: [
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#ffffff'}]
            }


        ]

    });
    // The marker, positioned at Uluru
    //var marker = new google.maps.Marker({position: uluru, map: map});
    //-3.750698, -73.244914
    //iquitos
    var marker = new google.maps.Marker({position: {lat: -3.750698, lng: -73.244914}, map: map});
    //´pucallpa  -8.383204, -74.598414
    var marker2 = new google.maps.Marker({position: {lat: -8.383204, lng: -74.598414}, map: map});
    //tingo maria -9.298393, -76.000235
    var marker3 = new google.maps.Marker({position: {lat: -9.298393, lng: -76.000235}, map: map});
    //lima -12.046649, -77.042433
    var marker4 = new google.maps.Marker({position: {lat: -12.046649, lng: -77.042433}, map: map});

}

$(document).ready(function() {


    $("#image-containerzcvsvvddssd").click(function(){
        //$("#div1").fadeIn();
        $("#Gaaaa").fadeIn("3000");
        //$("#div3").fadeIn(3000);
    });

    /*document.getElementById("image-containerzcvsvvddssd").addEventListener("click", function () {
        document.getElementById("image-descriptionzfvzsv").fadeIn("3000");
    });*/

    /*document.getElementById("workshop-image-1").addEventListener("click", function () {
        on();
    });
    document.getElementById("workshop-image-2").addEventListener("click", function () {
        on();
    });
    document.getElementById("workshop-image-3").addEventListener("click", function () {
        on();
    });
    document.getElementById("workshop-image-4").addEventListener("click", function () {
        on();
    });


    document.getElementById("close-overlay").addEventListener("click", function () {
        off();
    });

    document.getElementById("overlay").addEventListener("click", function () {
        off();
    });
    */


    /*$("#item1").click(function(){
        $("#image-carousel").carousel(0);
    });*/

    /*window.scrollTo( 0, 1000 );*/

});
