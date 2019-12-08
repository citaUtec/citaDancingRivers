var map;

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}


function addSinglePolygonToMap(JSON_path, river_data_layer, strokeColor, strokeOpacity, fillColor, fillOpacity) {

    $.getJSON(JSON_path, function (json) {

        river_data_layer.addGeoJson(json);
        river_data_layer.setStyle(function(feature) {
            return {
                strokeColor: strokeColor,
                strokeOpacity: strokeOpacity,
                fillColor: fillColor,
                fillOpacity: fillOpacity,
                strokeWeight: 1.0
            }
        });

    });

}


function addRegionJSONToMap(JSON_path, river_data_layer, strokeColor, strokeOpacity, fillColor, fillOpacity) {

    $.getJSON(JSON_path, function (json) {

        // console.log(river_data_layer);



        river_data_layer.addGeoJson(json);
        /*if(river_data_layer.getProperty('NAME_0') === "Loreto"){
            /!*river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#00BFDF", fillOpacity: 1.0, strokeWeight: 1});*!/
            river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#F0F000", fillOpacity: 1.0, strokeWeight: 1});
        }*/

        river_data_layer.setStyle(

            function(feature) {

                /*if(feature.getProperty('NAME_1') === "Loreto"){
                    /!*river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#00BFDF", fillOpacity: 1.0, strokeWeight: 1});*!/
                    // river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#F0F000", fillOpacity: 1.0, strokeWeight: 1});
                    return {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#03BEDF", fillOpacity: 1.0, strokeWeight: 1}
                }*/

                if(feature.getProperty('workshop_enable') === 1){
                    return {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#8CE1F0", fillOpacity: 1.0, strokeWeight: 1}
                }
                else{
                    return {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#CCCCCC", fillOpacity: 1.0, strokeWeight: 1}
                }}

        );


        river_data_layer.forEach(function (feature) {

            if(feature.getProperty('NAME_1') === "Loreto"){
                // return {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#FF00FF", fillOpacity: 1.0, strokeWeight: 1}
                // return {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#FF00FF", fillOpacity: 1.0, strokeWeight: 1}
                river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#03BEDF", fillOpacity: 1.0, strokeWeight: 1});
                // river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#FF00FF", fillOpacity: 1.0, strokeWeight: 1});
            }

            /*if(feature.getProperty("workshop_enable") === 1){
                /!*river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#00BFDF", fillOpacity: 1.0, strokeWeight: 1});*!/
                river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#8CE1F0", fillOpacity: 1.0, strokeWeight: 1});
            }else{
                river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#CCCCCC", fillOpacity: 1.0, strokeWeight: 1});

            }*/
            /*if(feature.getProperty("NAME_0") === "Loreto"){
                /!*river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#00BFDF", fillOpacity: 1.0, strokeWeight: 1});*!/
                river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#F0F000", fillOpacity: 1.0, strokeWeight: 1});
            }*/

        });


        /*if(river_data_layer.getProperty('NAME_1') === "Loreto"){
            return {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#FF00FF", fillOpacity: 1.0, strokeWeight: 1}
        }*/



        river_data_layer.addListener('click', function (event) {
            // console.log(event.feature.getProperty("NAME_1"));
            var region = event.feature.getProperty("NAME_1");


            if(event.feature.getProperty("workshop_enable") === 1){

                river_data_layer.forEach(function (feature) {
                    river_data_layer.revertStyle();
                });

                document.getElementById("info-region").src = "https://citadancingrivers.s3-us-west-1.amazonaws.com/img/" + region + "-statistics" + ".png";
                river_data_layer.overrideStyle(event.feature, {fillColor: '#03BEDF'});
            }

        })

    });

}

// event.feature.style.fillC = "#03BEDF";
//river_data_layer.feature
// event.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#03BEDF", fillOpacity: 1.0, strokeWeight: 1});
// river_data_layer.overrideStyle(event, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#03BEDF", fillOpacity: 1.0, strokeWeight: 1});



function addMarkersGeoJSON(JSON_path, river_data_layer, markerIconImagePath, clickCallback, mouseoverCallback, mouseoutCallback) {

    $.getJSON(JSON_path, function (json) {

        river_data_layer.addGeoJson(json);
        river_data_layer.setStyle(function(feature) {
            return {
                icon: markerIconImagePath,
            }
        });

        river_data_layer.addListener('click', function(event) {
            if(clickCallback !== null) clickCallback(event);
        });

        river_data_layer.addListener("mouseover", function (event) {
            if(mouseoverCallback !== null) mouseoverCallback(event);
        });

        river_data_layer.addListener("mouseout", function (event) {
            if(mouseoutCallback !== null) mouseoutCallback(event);
        });

    });

}



/*function markerClickCallback(event){

    //map.setZoom(6);
    //map.panTo(new google.maps.LatLng(event.feature.getProperty("latitud"), event.feature.getProperty("longitud")));

    /!*document.getElementById("stat_workshop1").innerText =*!/

}*/

function initMap() {



    // The location of Uluru
    //-75.355, -10.722
    //-75.399, -10.938
    //lat: -25.344, lng: 131.036
    var uluru = {lat: -9.348230, lng: -74.869015};
    // -0.019
    /*var peruBounds = {north: 2.8, south: -19.5, west: -85.0, east: -65.0};*/
    /*var peruBounds = {north: -0.02, south: -18.3955, west: -81.455, east: -68.361};*/

    // var peruBounds = {north: -2.0, south: -18.3955, west: -81.455, east: -68.361};
    var peruBounds = {north: -0.08, south: -18.3955, west: -81.455, east: -68.361};
    /*var markerJSON = [

        {
            "id": 1,
            "coords": {lat: -3.750698, lng: -73.244914}
        },
        {
            "id": 2,
            "coords": {lat: -8.383204, lng: -74.598414}
        },
        {
            "id": 3,
            "coords": {lat: -9.298393, lng: -76.000235}
        },
        {
            "id": 4,
            "coords": {lat: -12.046649, lng: -77.042433}
        },

    ];*/

    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5.3,
        center: uluru,
        disableDefaultUI: true,
        scaleControl: false,
        gestureHandling: 'none',
        zoomControl: false,
        /*gestureHandling: 'greedy',*/
        //gestureHandling: 'greedy',
        /*layoutGridLine: false,*/
        restriction: {
            latLngBounds: peruBounds,
            strictBounds: false,
        },
        /*styles: [
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#ffffff'}]
            }

        ]*/
        styles: [
            {
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#0000ff"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#0000ff"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        ]
    });
    // The marker, positioned at Uluru
    //var marker = new google.maps.Marker({position: uluru, map: map});
    //-3.750698, -73.244914
    //iquitos
    /*var marker1 = new google.maps.Marker({position: {lat: -3.750698, lng: -73.244914}, map: map});
    //´pucallpa  -8.383204, -74.598414
    var marker2 = new google.maps.Marker({position: {lat: -8.383204, lng: -74.598414}, map: map});
    //tingo maria -9.298393, -76.000235
    var marker3 = new google.maps.Marker({position: {lat: -9.298393, lng: -76.000235}, map: map});
    //lima -12.046649, -77.042433
    var marker4 = new google.maps.Marker({position: {lat: -12.046649, lng: -77.042433}, map: map});*/
    //cerro de pasco -10.674371, -76.259832



    /*marker1.addListener('click', function() {
        fadeInStatistics("#Gaaaa");
   });
    marker2.addListener('click', function() {
        fadeInStatistics("#Gaaaa");
    });
    marker3.addListener('click', function() {
        fadeInStatistics("#Gaaaa");
    });
    marker4.addListener('click', function() {
        fadeInStatistics("#Gaaaa");
    });*/

    var bounds_layer = new google.maps.Data();
    var regions_layer = new google.maps.Data();
    var markers_layer = new google.maps.Data();


    /*if(regions_layer.getProperty('NAME_0') === "Loreto"){
        /!*river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#00BFDF", fillOpacity: 1.0, strokeWeight: 1});*!/
        regions_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#F0F000", fillOpacity: 1.0, strokeWeight: 1});
    }*/


    // bounds_layer(1).fillColor = '#03BEDF';
     /*Markers*/
/*
    addMarkersGeoJSON("././data/workshops/workshops_markers.geojson", markers_layer, "././img/marker-icons/rojo.png", markerClickCallback, null, null);
*/
/*
    addSinglePolygonToMap("././data/workshops/PER_BOUND.geojson", bounds_layer, "#FFFFFF", 1.0, "#FFFFFF", 1.0);
*/
    // addSinglePolygonToMap("././data/workshops/Mascara.geojson", bounds_layer, "#FFFFFF", 1.0, "#FFFFFF", 1.0);
/*
    addSinglePolygonToMap("././data/workshops/Mascara.geojson", bounds_layer, "#FFFFFF", 1.0, "#FFFFFF", 1.0);

    addRegionJSONToMap("././data/workshops/PER_regiones_flag.geojson", regions_layer, "#FFFFFF", 1.0, "#00BFDF", 1.0);
*/


    addSinglePolygonToMap("././data/workshops/Mascara.geojson", bounds_layer, "#FFFFFF", 1.0, "#FFFFFF", 1.0);
    addRegionJSONToMap("././data/workshops/PER_regiones_flag.geojson", regions_layer, "#FFFFFF", 1.0, "#00BFDF", 1.0);

    // "NAME_1": "Loreto"
    /*if(event.feature.getProperty("NAME_1") === "Loreto"){

        river_data_layer.forEach(function (feature) {
            river_data_layer.revertStyle();
        });

        document.getElementById("info-region").src = "https://citadancingrivers.s3-us-west-1.amazonaws.com/img/" + region + "-statistics" + ".png";
        river_data_layer.overrideStyle(event.feature, {fillColor: '#03BEDF'});
    }*/


    /* DSCDAS */
    /*if(regions_layer.getProperty("NAME_1")=== "Loreto"){
        // regions_layer.fi
        addRegionJSONToMap("././data/workshops/PER_regiones_flag.geojson", regions_layer, "#FFFFFF", 1.0, "#FFBFDF", 1.0);
        // addRegionJSONToMap("././data/workshops/PER_regiones_flag.geojson", regions_layer, "#FFFFFF", 1.0, "#00BFDF", 1.0);

    }*/

    /*river_data_layer.forEach(function (feature) {

        if(feature.getProperty("workshop_enable") === 1){
            river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#00BFDF", fillOpacity: 1.0, strokeWeight: 1});
        }else{
            river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#AAAAAA", fillOpacity: 1.0, strokeWeight: 1});
        }

    }); */

    /*regions_layer.getProperty("ID_1")*/

    /*if(feature.getProperty("workshop_enable") === 1){
        river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#00BFDF", fillOpacity: 1.0, strokeWeight: 1});
    }*/

    /*if(feature.getProperty("ID_1") === 17){
        river_data_layer.overrideStyle(feature, {strokeColor: "#FFFFFF", strokeOpacity: 1.0, fillColor: "#00BFDF", fillOpacity: 1.0, strokeWeight: 1});
    }*/
    /*regions_layer.forEach(function (feature) {

        if(feature.getProperty("ID_1") === 17) {
            this.click(function(){
                $("#info-loreto").fadeIn("3000");
            });
        }

    });*/





    /*regions_layer.addEventListener("click", function () {

        console.log("ASDA");
        /!*if(feature.getProperty("ID_1") === 17) {
            console.log("ASDA");
        }*!/
    });*/


    bounds_layer.setMap(map);
    regions_layer.setMap(map);
    markers_layer.setMap(map);



    /*marker1.addListener('click', function() {
        /!*!/!*map.setZoom(8);*!/
        map.setCenter(marker1.getPosition());
    });*/

    /*$("#image-container_").click(function(){
        $("#info-loreto").fadeIn("3000");
        /!*
                $("#Gaaaa").fadeIn("3000");
        *!/
        //$("#div1").fadeIn();
        //$("#div3").fadeIn(3000);
    });*/





    /*$("#image-container_").click(function(){
        $("#info-loreto").fadeIn("3000");
    });*/

    /*marker1.addListener('click', gaaaa("#Gaaaa") );*/
    /*marker1.addListener('click', function() {
        /!*map.setZoom(8);
        map.setCenter(marker1.getPosition());*!/
    });*/

    /*map.data.loadGeoJson(
        'https://storage.googleapis.com/mapsdevsite/json/google.json');*/


}

/*
function fadeInStatistics(statsDiv) {
    $(statsDiv).fadeIn("3000");
}

$(document).ready(function() {


    /!*$("#image-containerzcvsvvddssd").click(function(){
/!*
        $("#Gaaaa").fadeIn("3000");
*!/
        //$("#div1").fadeIn();
        //$("#div3").fadeIn(3000);
    });
*!/
    /!*document.getElementById("image-containerzcvsvvddssd").addEventListener("click", function () {
        document.getElementById("image-descriptionzfvzsv").fadeIn("3000");
    });*!/

    /!*document.getElementById("workshop-image-1").addEventListener("click", function () {
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
    *!/


    /!*$("#item1").click(function(){
        $("#image-carousel").carousel(0);
    });*!/

    /!*window.scrollTo( 0, 1000 );*!/

});
*/
