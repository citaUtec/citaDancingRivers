function myFuncion(code) {
    var cd = code;
    switchLanguage(cd);


    /*set_locale_to(countryCode);*/
}

$(document).ready(function () {






    /*
        let original_data_dancing_rivers = {

            "data_menu_options": [

                {
                    "menu_option_title": "About",
                    "menu_option_color": "#f2f2f2",
                    "menu_option_title_id": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
                    "menu_option_image_ref": "./img/dancingRivers/iconfinder_about_2639759.png",
                    "menu_option_id": "rivers_menu_option_id",
                    "menu_button_option_id": "rivers_menu_button_option_id",
                    "menu_option_title_id_1": "Brief description of the purpose of the .",
                    "menu_option_title_id_2": "Description about MOORE project.",
                    "menu_option_title_id_3": "Collaborations (with MOORE and the ones who will come in the future).",
                    "menu_option_title_id_4": "The research team.",
                    "menu_option_title_id_5": "",
                    "available": true
                },
                {
                    "menu_option_title": "Research",
                    "menu_option_color": "#deedf4",
                    "menu_option_title_id": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
                    "menu_option_image_ref": "./img/dancingRivers/iconfinder_Rounded-10_2024633.png",
                    "menu_option_id": "rivers_menu_option_id",
                    "menu_button_option_id": "rivers_menu_button_option_id",
                    "menu_option_title_id_1": "",
                    "menu_option_title_id_2": "",
                    "menu_option_title_id_3": "",
                    "menu_option_title_id_4": "",
                    "menu_option_title_id_5": "",
                    "available": true
                },

                {
                    "menu_option_title": "Methodology",
                    "menu_option_color": "#fbf2e8",
                    "menu_option_title_id": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
                    "menu_option_image_ref": "./img/dancingRivers/method.png",
                    "menu_option_id": "rivers_menu_option_id",
                    "menu_button_option_id": "rivers_menu_button_option_id",
                    "menu_option_title_id_1": "Remote sensing",
                    "menu_option_title_id_2": "Field measurements ",
                    "menu_option_title_id_3": "Numerical modelling",
                    "menu_option_title_id_4": "",
                    "menu_option_title_id_5": "",
                    "available": true
                },
                {
                    "menu_option_title": "Data and Tools",
                    "menu_option_color": "#f2f2f2",
                    "menu_option_title_id": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
                    "menu_option_image_ref": "./img/dancingRivers/tools.png",
                    "menu_option_id": "rivers_menu_option_id",
                    "menu_button_option_id": "rivers_menu_button_option_id",
                    "menu_option_title_id_1": "Data (interactive map with information of metrics, download option, brief analysis)",
                    "menu_option_title_id_2": "Technologies",
                    "menu_option_title_id_3": "Toolboxes and software",
                    "menu_option_title_id_4": "",
                    "menu_option_title_id_5": "",
                    "available": true
                },
                {
                    "menu_option_title": "Publications",
                    "menu_option_color": "#deedf4",
                    "menu_option_title_id": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.s.",
                    "menu_option_image_ref": "./img/dancingRivers/publication_icon.png",
                    "menu_option_id": "rivers_menu_option_id",
                    "menu_button_option_id": "rivers_menu_button_option_id",
                    "menu_option_title_id_1": "Handbooks",
                    "menu_option_title_id_2": "Papers",
                    "menu_option_title_id_3": "Tutorials",
                    "menu_option_title_id_4": "Workshops materials",
                    "menu_option_title_id_5": "Infographics",
                    "available": true
                },
                {
                    "menu_option_title": "Outreach and Education",
                    "menu_option_color": "#fbf2e8",
                    "menu_option_title_id": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
                    "menu_option_image_ref": "./img/dancingRivers/iconfinder_student_309036.png",
                    "menu_option_id": "rivers_menu_option_id",
                    "menu_button_option_id": "rivers_menu_button_option_id",
                    "menu_option_title_id_1": "Description of the work with communities, universities, local governments.",
                    "menu_option_title_id_2": "List of workshops",
                    "menu_option_title_id_3": "",
                    "menu_option_title_id_4": "",
                    "menu_option_title_id_5": "",
                    "available": true
                }

            ],

        };

        var data_menu_options = original_data_dancing_rivers["data_menu_options"];


        for(var i=0; i< data_menu_options.length; i++){


            var original_data_content_menu_option_template = document.getElementsByTagName("template")[1];

            var original_data_content_menu_option_template_content = document.importNode(original_data_content_menu_option_template.content,true);
            original_data_content_menu_option_template_content.getElementById("card-container").style.backgroundColor = data_menu_options[i].menu_option_color;
            original_data_content_menu_option_template_content.getElementById("card-title").innerHTML = data_menu_options[i].menu_option_title;
            original_data_content_menu_option_template_content.getElementById("card-description").innerHTML = data_menu_options[i].menu_option_title_id;
            original_data_content_menu_option_template_content.getElementById("card-icon").src = data_menu_options[i].menu_option_image_ref;
            original_data_content_menu_option_template_content.getElementById("card-li-1").innerHTML = data_menu_options[i].menu_option_title_id_1;
            original_data_content_menu_option_template_content.getElementById("card-li-2").innerHTML = data_menu_options[i].menu_option_title_id_2;
            original_data_content_menu_option_template_content.getElementById("card-li-3").innerHTML = data_menu_options[i].menu_option_title_id_3;
            original_data_content_menu_option_template_content.getElementById("card-li-4").innerHTML = data_menu_options[i].menu_option_title_id_4;
            original_data_content_menu_option_template_content.getElementById("card-li-5").innerHTML = data_menu_options[i].menu_option_title_id_5;


            <!-- FLOAT LEFT-->

            /!*
            original_data_content_list_template_content.getElementById("cards-section").appendChild(original_data_content_menu_option_template_content);
            *!/
            document.getElementById("cards-section").appendChild(original_data_content_menu_option_template_content);
            /!*document.getElementById("cards-section").style.cssFloat = "left";*!/


        }
    */




});

