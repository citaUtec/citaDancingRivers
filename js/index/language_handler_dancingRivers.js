


var set_locale_to = function(locale) {

    if (locale) {$.i18n().locale = locale;}
    $('body').i18n();
    /*
        document.getElementById("dropdownMenuButtonTop").innerHTML = $.i18n('dropdown-UHD-section-item', UHDMarkerIndexTop.toString());
    */

};

/*var local_variable = 'es'*/
/*var var5 = "es";*/
/*var band = " ";*/
/*var band;*/

/*window.onload = alert(localStorage.getItem("storageName"));*/
/*console.log(storageName);*/

var lnge = 'es';

$(document).ready(function() {
    /*var ga = localStorage.getItem("storageName");*/
    lnge = localStorage.getItem("storageName");
    /*console.log("passName es:." +  ga);*/

    $.i18n().load( {
        'en': './i18n/en.json',
        // 'ru': './i18n/ru.json',
        'es': './i18n/es.json',
    }).done(function() {

        /* var var5 = "es";*/
        /*set_locale_to(var5);*/
        /*switchLanguage(var5);*/

        /*console.log("localStorage esss:" + band);
        console.log("band es:" + band);
        if(band === "yes"){
            switchLanguage("es");
        }
        if(band === "no"){
            switchLanguage("en");
        }
        */
        set_locale_to("es");
        switchLanguage(lnge);
        /*
                console.log("VALOR ES" + document.getElementById("logo-dancing-rivers").style.color);
                if(document.getElementById("logo-dancing-rivers").style.color === "red"){
                    switchLanguage("es");
                }
                if(document.getElementById("logo-dancing-rivers").style.color === "blue"){
                    switchLanguage("en");
                }
        */


        /*switchLanguage("es");*/
        /*console.log(var5);*/
        /*set_locale_to("es");*/
    });





    /*var IDIOMA = 'es';
    switchLanguage2(IDIOMA);*/

    /*switchLanguage(var5);*/

    if(lnge === 'es'){
        document.getElementById("btn_es").className = "idiom-btn-1";
        document.getElementById("btn_en").className = "idiom-btn-2";
        /*logo-rios-danzantes.png*/
        document.getElementById("logo-dancing-rivers").src = "https://citadancingrivers.s3-us-west-1.amazonaws.com/img/RD-logo-blue.png";

    }
    if(lnge === 'en'){
        document.getElementById("btn_es").className = "idiom-btn-2";
        document.getElementById("btn_en").className = "idiom-btn-1";
        /*document.getElementById("logo-dancing-rivers").src = "./img/dancingRivers/logo-dancing-rivers.png";*/
        /*DancingRivers-newLogo.png*/
        document.getElementById("logo-dancing-rivers").src = "https://citadancingrivers.s3-us-west-1.amazonaws.com/img/DR-logo-blue.png";

    }

    document.getElementById("btn_es").addEventListener("click", function () {
        document.getElementById("btn_es").className = "idiom-btn-1";
        document.getElementById("btn_en").className = "idiom-btn-2";

        /*logo-rios-danzantes.png*/
        document.getElementById("logo-dancing-rivers").src = "https://citadancingrivers.s3-us-west-1.amazonaws.com/img/RD-logo-blue.png";
        /*idiom = "Spanish";
        language = "es";

        set_locale_to(language);*/
        /* IDIOMA = 'es';*/
        /*var5 = "es";
        band = "yes";*/
        /*document.getElementById("logo-dancing-rivers").style.color = "red";*/
    });


    document.getElementById("btn_en").addEventListener("click", function () {
        document.getElementById("btn_en").className = "idiom-btn-1";
        document.getElementById("btn_es").className = "idiom-btn-2";

        /*document.getElementById("logo-dancing-rivers").src = "./img/dancingRivers/logo-dancing-rivers.png";*/
        /*DancingRivers-newLogo.png*/
        document.getElementById("logo-dancing-rivers").src = "https://citadancingrivers.s3-us-west-1.amazonaws.com/img/DR-logo-blue.png";

        /*document.getElementById("logo-dancing-rivers").style.color = "blue";*/
        /*idiom = "English";
        language = "en";

        set_locale_to(language);*/
        /*var gaaa = myFunction(3,4);
        console.log(gaaa);*/
        /* IDIOMA = 'en';*/
        /*var5 = "en";
        band = "no";*/

    });



    /*    document.getElementById("logo-dancing-rivers").addEventListener("click", function () {
            document.getElementById("logo-dancing-rivers").src = "./img/dancingRivers/dancing_rivers_logo.png";

            document.getElementById("logo-dancing-rivers").src = "./img/dancingRivers/logo-rios-danzantes.png";

            /!*document.getElementById("btn_en").className = "idiom-btn-2";*!/


        });*/


});

/*$.i18n().load( {
    'en': './i18n/en.json',
    // 'ru': './i18n/ru.json',
    'es': './i18n/es.json'
}).done(function() {

    /!* var var5 = "es";*!/

    /!*set_locale_to(var5);*!/
    /!*switchLanguage(var5);*!/


    /!*console.log("band es" + band);
    if(band === "yes"){
        switchLanguage("es");
    }
    if(band === "no"){
        switchLanguage("en");
    }*!/

    console.log("VALOR ES" + document.getElementById("logo-dancing-rivers").style.color);
    if(document.getElementById("logo-dancing-rivers").style.color === "red"){
        switchLanguage("es");
    }
    if(document.getElementById("logo-dancing-rivers").style.color === "blue"){
        switchLanguage("en");
    }


    /!*switchLanguage("es");*!/
    /!*console.log(var5);*!/
    /!*set_locale_to("es");*!/
});*/





function switchLanguage(CountryCode) {
    set_locale_to(CountryCode);
    /*console.log("var5 es " + var5);*/
    /*localStorage.setItem("storageName",CountryCode);
    console.log("storageName es " + localStorage.setItem("storageName",CountryCode));*/
}

function passLanguage(CountryCode) {
    set_locale_to(CountryCode);
    localStorage.setItem("storageName",CountryCode);

}



/*
var var1 = 'es'

function myFunction(a, b) {
    return a * b;
}
*/

/*function switchLanguage2(countryCode) {
    set_locale_to(countryCode);

    /!*var var2 = countryCode;*!/
    /!*var1*!/
    /!*console.log(var1);*!/
    /!*return var1;*!/

}*/
/*function switchLanguage(countryCode) {
    set_locale_to(countryCode);

    /!*var var2 = countryCode;*!/
    /!*var1*!/
    /!*console.log(var1);*!/
    /!*return var1;*!/

}*/
/*var var3 =  switchLanguage(countryCode);*/










/*
var set_locale_to = function(locale) {

    if (locale) {$.i18n().locale = locale;}
    $('body').i18n();
    document.getElementById("dropdownMenuButtonTop").innerHTML = $.i18n('dropdown-UHD-section-item', UHDMarkerIndexTop.toString());

};

var local_variable = 'es'

$.i18n().load( {
    'en': './i18n/en.json',
    // 'ru': './i18n/ru.json',
    'es': './i18n/es.json'
}).done(function() {
    set_locale_to("es");
});*/
