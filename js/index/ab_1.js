//<editor-fold desc="Document Ready Function">
$(document).ready(function() {

    $("#bodyMain").on("scroll", function () {

        /*console.log(document.getElementById("Intro").clientHeight);*/

        if($("#bodyMain").scrollTop() > document.getElementById("Intro").clientHeight){


            document.getElementById("logo-dot").style.display = "block";
            document.getElementById("logo-header").style.display = "block";

            document.getElementById("Header").classList.remove("header-style1");
            document.getElementById("Header").classList.add("header-style2");

            document.getElementById("logo-header").classList.remove("header-text-logo1");
            document.getElementById("logo-header").classList.add("header-text-logo2");

            document.getElementById("h_text1").classList.remove("header-text1");
            document.getElementById("h_text1").classList.add("header-text2");

            document.getElementById("h_text2").classList.remove("header-text1");
            document.getElementById("h_text2").classList.add("header-text2");


        }else if($("#bodyMain").scrollTop() < document.getElementById("Intro").clientHeight){

            document.getElementById("logo-dot").style.display = "none";
            document.getElementById("logo-header").style.display = "none";

            document.getElementById("Header").classList.remove("header-style2");
            document.getElementById("Header").classList.add("header-style1");

            document.getElementById("logo-header").classList.remove("header-text-logo2");
            document.getElementById("logo-header").classList.add("header-text-logo1");

            document.getElementById("h_text2").classList.remove("header-text2");
            document.getElementById("h_text2").classList.add("header-text1");

            document.getElementById("h_text1").classList.remove("header-text2");
            document.getElementById("h_text1").classList.add("header-text1");

        }
    });

    var width_screen  = $(window).width();
    var height_screen  = $(window).height();
    var k = height_screen/width_screen;


    document.getElementById("videoContainer").style.Height  = 100*k + "vw";
    document.getElementById("Intro").style.maxHeight  = 100*k + "vw";

    /*var a = document.getElementById("videoBackground").style.height;
    document.getElementById("Intro").style.height  = a;*/

    document.getElementById("Info").style.height  = 114*k + "vw";

    document.getElementById("dancingRivers").style.height  = 100*k + "vw";
    document.getElementById("storytelling").style.height  = 100*k + "vw";

    //<editor-fold desc="Add Links">
    /*addPortalLink("linkStoryTelling","map.html");*/
    addPortalLink("linkStoryTelling",
        /*"https://dancingriversdemo.firebaseapp.com");*/
        "DancingRivers_prueba.html");
    addPortalLink("linkDancingRivers","DancingRivers_Home.html");
    //</editor-fold>



});
//</editor-fold>


//<editor-fold desc="General Functions">
function addPortalLink(id_,link) {
    document.getElementById(id_).href = link;
}
//</editor-fold>

