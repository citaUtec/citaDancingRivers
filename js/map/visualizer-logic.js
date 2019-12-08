
//<editor-fold desc="Map Colors">
let noChangeColor_erosionDeposition = "#143291";
let erosionColor_erosionDeposition = "#B71632";
let depositionColor_erosionDeposition = "#64AF62";
let dunes_sections_color = "#99FFFF";
let dunes_lines_color = "#604020";
let bedload_sections_color = "#99FFFF";
let migration_green = "#1E961E";
let migration_yellow = "#ECEC0E";
let migration_orange = "#FE960F";
let migration_red = "#D7191C";
let migration_older_year = "#DA3659";
let migration_recent_year = "#000000";
let migration_channel_change = "#7849F1";
let migration_cut_off = "#3D86E4";
//</editor-fold>



//<editor-fold desc="Original Data Project Variables">
let original_data_dancing_rivers = {

    "data_menu_options": [

        {
            "menu_option_title": "Rivers",
            "menu_option_title_id": "rivers_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/river_icon.png",
            "menu_option_id": "rivers_menu_option_id",
            "menu_button_option_id": "rivers_menu_button_option_id",
            "available": true
        },
        {
            "menu_option_title": "Morphometrics",
            "menu_option_title_id": "morphometrics_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/metric_icon.png",
            "menu_option_id": "metrics_menu_option_id",
            "menu_button_option_id": "metrics_menu_button_option_id",
            "available": true
        },
        {
            "menu_option_title": "Field Measurements",
            "menu_option_title_id": "field_measurements_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/measure_icon.png",
            "menu_option_id": "measurements_menu_option_id",
            "menu_button_option_id": "measurements_menu_button_option_id",
            "available": true
        },
        {
            "menu_option_title": "Amazon Forests",
            "menu_option_title_id": "amazon_forests_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/amazon_forest_blocked_icon.png",
            "menu_option_id": "amazon_forests_menu_option_id",
            "menu_button_option_id": "amazon_forests_menu_button_option_id",
            "available": false
        },
        {
            "menu_option_title": "Biodiversity",
            "menu_option_title_id": "biodiversity_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/biodiversity_blocked_icon.png",
            "menu_option_id": "biodiversity_menu_option_id",
            "menu_button_option_id": "biodiversity_menu_button_option_id",
            "available": false
        },
        {
            "menu_option_title": "Drone Flights",
            "menu_option_title_id": "drone_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/drone_icon.png",
            "menu_option_id": "drone_menu_option_id",
            "menu_button_option_id": "drone_menu_button_option_id",
            "available": true
        },

    ],

    "data_submenu_options": [

        {
            "submenu_name": "rivers_submenu",
            "options": [

                {
                    "submenu_option_title": "Amazonas",
                    "submenu_option_title_id": "amazonas_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/A_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
                    "submenu_option_image_id": "amazonas_submenu_image_id",
                    "submenu_option_id": "amazonas_submenu_option_id",
                    "submenu_option_button_id": "amazonas_submenu_option_button",
                    "submenu_option_button_check_icon_id": "amazonas_submenu_option_check",
                    "submenu_option_button_click_function": amazonas_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true]
                },
                {
                    "submenu_option_title": "Huallaga",
                    "submenu_option_title_id": "huallaga_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/H_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                    "submenu_option_image_id": "huallaga_submenu_image_id",
                    "submenu_option_id": "huallaga_submenu_option_id",
                    "submenu_option_button_id": "huallaga_submenu_option_button",
                    "submenu_option_button_check_icon_id": "huallaga_submenu_option_check",
                    "submenu_option_button_click_function": huallaga_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true]
                },
                {
                    "submenu_option_title": "Marañon",
                    "submenu_option_title_id": "marañon_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/M_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/M_enabled_icon.png",
                    "submenu_option_image_id": "marañon_submenu_image_id",
                    "submenu_option_id": "marañon_submenu_option_id",
                    "submenu_option_button_id": "marañon_submenu_option_button",
                    "submenu_option_button_check_icon_id": "marañon_submenu_option_check",
                    "submenu_option_button_click_function": marañon_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true]
                },
                {
                    "submenu_option_title": "Ucayali",
                    "submenu_option_title_id": "ucayali_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/U_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/U_enabled_icon.png",
                    "submenu_option_image_id": "ucayali_submenu_image_id",
                    "submenu_option_id": "ucayali_submenu_option_id",
                    "submenu_option_button_id": "ucayali_submenu_option_button",
                    "submenu_option_button_check_icon_id": "ucayali_submenu_option_check",
                    "submenu_option_button_click_function": ucayali_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true]
                }

            ]

        },
        {
            "submenu_name": "morphometrics_submenu",
            "options": [

                {
                    "submenu_option_title": "Average Width",
                    "submenu_option_title_id": "width_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/width_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/width_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/width_blocked_icon.png",
                    "submenu_option_image_id": "width_submenu_image_id",
                    "submenu_option_id": "width_submenu_option_id",
                    "submenu_option_button_id": "width_submenu_option_button",
                    "submenu_option_button_check_icon_id": "width_submenu_option_check",
                    "submenu_option_button_click_function": width_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [true, true, true, true, false]

                },
                {
                    "submenu_option_title": "Sinuosity",
                    "submenu_option_title_id": "sinuosity_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/sinuosity_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/sinuosity_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/sinuosity_blocked_icon.png",
                    "submenu_option_image_id": "sinuosity_submenu_image_id",
                    "submenu_option_id": "sinuosity_submenu_option_id",
                    "submenu_option_button_id": "sinuosity_submenu_option_button",
                    "submenu_option_button_check_icon_id": "sinuosity_submenu_option_check",
                    "submenu_option_button_click_function": sinuosity_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [true, true, true, true, false]
                },
                {
                    "submenu_option_title": "Arc Wavelength",
                    "submenu_option_title_id": "arc_wavelength_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/arc_wavelength_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/arc_wavelength_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/arc_wavelength_blocked_icon.png",
                    "submenu_option_image_id": "arc_wavelength_submenu_image_id",
                    "submenu_option_id": "arc_wavelength_submenu_option_id",
                    "submenu_option_button_id": "arc_wavelength_submenu_option_button",
                    "submenu_option_button_check_icon_id": "arc_wavelength_submenu_option_check",
                    "submenu_option_button_click_function": arc_wavelength_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, true, false]
                },
                {
                    "submenu_option_title": "Migration",
                    "submenu_option_title_id": "migration_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/migration_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/migration_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/migration_blocked_icon.png",
                    "submenu_option_image_id": "migration_submenu_image_id",
                    "submenu_option_id": "migration_submenu_option_id",
                    "submenu_option_button_id": "migration_submenu_option_button",
                    "submenu_option_button_check_icon_id": "migration_submenu_option_check",
                    "submenu_option_button_click_function": migration_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, false, false, true, false]
                },
                {
                    "submenu_option_title": "Erosion - Deposition",
                    "submenu_option_title_id": "erosion_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/erosion_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/erosion_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/erosion_blocked_icon.png",
                    "submenu_option_image_id": "erosion_submenu_image_id",
                    "submenu_option_id": "erosion_submenu_option_id",
                    "submenu_option_button_id": "erosion_submenu_option_button",
                    "submenu_option_button_check_icon_id": "erosion_submenu_option_check",
                    "submenu_option_button_click_function": erosion_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [true, false, true, false, false]
                }

            ]

        },
        {
            "submenu_name": "measurements_submenu",
            "options": [

                {
                    "submenu_option_title": "Water Levels",
                    "submenu_option_title_id": "water_level_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/water_level_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/water_level_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/water_level_blocked_icon.png",
                    "submenu_option_image_id": "water_level_submenu_image_id",
                    "submenu_option_id": "water_level_submenu_option_id",
                    "submenu_option_button_id": "water_level_submenu_option_button",
                    "submenu_option_button_check_icon_id": "water_level_submenu_option_check",
                    "submenu_option_button_click_function": water_level_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, false, false]
                },
                {
                    "submenu_option_title": "Flow Rates",
                    "submenu_option_title_id": "flow_rate_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/flow_rates_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/flow_rates_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/flow_rates_blocked_icon.png",
                    "submenu_option_image_id": "flow_rate_submenu_image_id",
                    "submenu_option_id": "flow_rate_submenu_option_id",
                    "submenu_option_button_id": "flow_rate_submenu_option_button",
                    "submenu_option_button_check_icon_id": "flow_rate_submenu_option_check",
                    "submenu_option_button_click_function": flow_rate_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, false, false, false, false]
                },
                {
                    "submenu_option_title": "Flow Velocity",
                    "submenu_option_title_id": "hydrodynamic_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/hydrodynamic_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/hydrodynamic_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/hydrodynamic_blocked_icon.png",
                    "submenu_option_image_id": "hydrodynamic_submenu_image_id",
                    "submenu_option_id": "hydrodynamic_submenu_option_id",
                    "submenu_option_button_id": "hydrodynamic_submenu_option_button",
                    "submenu_option_button_check_icon_id": "hydrodynamic_submenu_option_check",
                    "submenu_option_button_click_function": hydrodynamic_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, false, false]
                },
                {
                    "submenu_option_title": "Dunes",
                    "submenu_option_title_id": "dunes_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/dunes_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/dunes_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/dunes_blocked_icon.png",
                    "submenu_option_image_id": "dunes_submenu_image_id",
                    "submenu_option_id": "dunes_submenu_option_id",
                    "submenu_option_button_id": "dunes_submenu_option_button",
                    "submenu_option_button_check_icon_id": "dunes_submenu_option_check",
                    "submenu_option_button_click_function": dunes_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, false, false]
                },
                {
                    "submenu_option_title": "Bedload",
                    "submenu_option_title_id": "bedload_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/bedload_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/bedload_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/bedload_blocked_icon.png",
                    "submenu_option_image_id": "bedload_submenu_image_id",
                    "submenu_option_id": "bedload_submenu_option_id",
                    "submenu_option_button_id": "bedload_submenu_option_button",
                    "submenu_option_button_check_icon_id": "bedload_submenu_option_check",
                    "submenu_option_button_click_function": bedload_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, false, false]
                },
                {
                    "submenu_option_title": "Sediments",
                    "submenu_option_title_id": "sediments_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/sediment_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/sediment_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/sediment_blocked_icon.png",
                    "submenu_option_image_id": "sediments_submenu_image_id",
                    "submenu_option_id": "sediment_submenu_option_id",
                    "submenu_option_button_id": "sediment_submenu_option_button",
                    "submenu_option_button_check_icon_id": "sediment_submenu_option_check",
                    "submenu_option_button_click_function": sediment_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, false, false]
                },
                {
                    "submenu_option_title": "LSPIV",
                    "submenu_option_title_id": "lspiv_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/lspiv_blocked_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/lspiv_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/lspiv_blocked_icon.png",
                    "submenu_option_image_id": "lspiv_submenu_image_id",
                    "submenu_option_id": "lspiv_submenu_option_id",
                    "submenu_option_button_id": "lspiov_submenu_option_button",
                    "submenu_option_button_check_icon_id": "lspiv_submenu_option_check",
                    "submenu_option_button_click_function": lspiv_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, false, false, false, false]
                },

            ]

        },
        {
            "submenu_name": "amazon_forests_submenu",
            "options": [],
            "available": false

        },
        {
            "submenu_name": "biodiversity_submenu",
            "options": [],
            "available": false

        },
        {
            "submenu_name": "drone_flights_submenu",
            "options": [

                {
                    "submenu_option_title": "On Map",
                    "submenu_option_title_id": "drone_map_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/marker_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/marker_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/marker_blocked_icon.png",
                    "submenu_option_image_id": "drone_map_submenu_image_id",
                    "submenu_option_id": "drone_map_submenu_option_id",
                    "submenu_option_button_id": "drone_map_submenu_option_button",
                    "submenu_option_button_check_icon_id": "drone_map_submenu_option_check",
                    "submenu_option_button_click_function": drone_map_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true]
                },
                {
                    "submenu_option_title": "List",
                    "submenu_option_title_id": "drone_list_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/grid_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/grid_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/grid_blocked_icon.png",
                    "submenu_option_image_id": "drone_list_submenu_image_id",
                    "submenu_option_id": "drone_list_submenu_option_id",
                    "submenu_option_button_id": "drone_list_submenu_option_button",
                    "submenu_option_button_check_icon_id": "drone_list_submenu_option_check",
                    "submenu_option_button_click_function": drone_list_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true]
                }

            ]

        },

    ]

};

let background_data_dancing_rivers = {

    "data_menu_options": [

        {
            "menu_option_title": "Communities",
            "menu_option_title_id": "communities_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/communities-icon.png",
            "menu_option_id": "communities_menu_option_id",
            "menu_button_option_id": "communities_menu_button_option_id",
            "menu_button_icon_id": "communities_menu_button_icon_id",
            "available": true
        },
        {
            "menu_option_title": "DEM",
            "menu_option_title_id": "dem_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/elevation_icon.png",
            "menu_option_id": "dem_menu_option_id",
            "menu_button_option_id": "dem_menu_button_option_id",
            "menu_button_icon_id": "dem_menu_button_icon_id",
            "available": true
        },
        {
            "menu_option_title": "Malos Pasos",
            "menu_option_title_id": "malos_pasos_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/malos_pasos_icon.png",
            "menu_option_id": "malos_pasos_menu_option_id",
            "menu_button_option_id": "malos_pasos_menu_button_option_id",
            "menu_button_icon_id": "malos_pasos_menu_button_icon_id",
            "available": true
        },
        {
            "menu_option_title": "Geology",
            "menu_option_title_id": "geology_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/geology_blocked_icon.png",
            "menu_option_id": "geology_menu_option_id",
            "menu_button_option_id": "geology_menu_button_option_id",
            "menu_button_icon_id": "geology_menu_button_icon_id",
            "available": false
        },
        {
            "menu_option_title": "Infraestructure",
            "menu_option_title_id": "infraestructure_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/infraestructure_blocked_icon.png",
            "menu_option_id": "infraestructure_menu_option_id",
            "menu_button_option_id": "infraestructure_menu_button_option_id",
            "menu_button_icon_id": "infraestructure_menu_button_icon_id",
            "available": false
        },
        {
            "menu_option_title": "Land Use",
            "menu_option_title_id": "land_use_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/land_use_blocked_icon.png",
            "menu_option_id": "land_use_menu_option_id",
            "menu_button_option_id": "land_use_menu_button_option_id",
            "menu_button_icon_id": "land_use_menu_button_icon_id",
            "available": false
        },
        {
            "menu_option_title": "Protected Natural Areas",
            "menu_option_title_id": "protected_area_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/protected_area_blocked_icon.png",
            "menu_option_id": "protected_area_menu_option_id",
            "menu_button_option_id": "protected_area_menu_button_option_id",
            "menu_button_icon_id": "protected_area_menu_button_icon_id",
            "available": false
        },
        {
            "menu_option_title": "Transport",
            "menu_option_title_id": "transport_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/transport_blocked_icon.png",
            "menu_option_id": "transport_menu_option_id",
            "menu_button_option_id": "transport_menu_button_option_id",
            "menu_button_icon_id": "transport_menu_button_icon_id",
            "available": false
        },
        {
            "menu_option_title": "Vegetation",
            "menu_option_title_id": "vegetation_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/vegetation_blocked_icon.png",
            "menu_option_id": "vegetation_menu_option_id",
            "menu_button_option_id": "vegetation_menu_button_option_id",
            "menu_button_icon_id": "vegetation_menu_button_icon_id",
            "available": false
        },
        {
            "menu_option_title": "Clear Map",
            "menu_option_title_id": "clear_map_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/clear_map_icon.png",
            "menu_option_id": "clear_map_menu_option_id",
            "menu_button_option_id": "clear_map_menu_button_option_id",
            "menu_button_icon_id": "clear_map_menu_button_icon_id",
            "available": true
        },
        {
            "menu_option_title": "Language",
            "menu_option_title_id": "language_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/language_icon.png",
            "menu_option_id": "language_menu_option_id",
            "menu_button_option_id": "language_menu_button_option_id",
            "menu_button_icon_id": "language_menu_button_icon_id",
            "available": true
        },

    ],

    "data_submenu_options": [

        {
            "submenu_name": "communities_submenu",
            "options": [],
            "available": true

        },
        {
            "submenu_name": "dem_submenu",
            "options": [],
            "available": true

        },
        {
            "submenu_name": "malos_pasos_submenu",
            "options": [],
            "available": true

        },
        {
            "submenu_name": "geology_submenu",
            "options": [],
            "available": false

        },
        {
            "submenu_name": "infraestructure_submenu",
            "options": [],
            "available": false

        },
        {
            "submenu_name": "land_use_submenu",
            "options": [],
            "available": false

        },
        {
            "submenu_name": "protected_area_submenu",
            "options": [],
            "available": false

        },
        {
            "submenu_name": "transport_submenu",
            "options": [],
            "available": false

        },
        {
            "submenu_name": "vegetation_submenu",
            "options": [],
            "available": false

        },
        {
            "submenu_name": "clear_map_submenu",
            "options": [],
            "available": true

        },
        {
            "submenu_name": "language_submenu",
            "options": [

                {
                    "submenu_option_title": "Spanish",
                    "submenu_option_title_id": "spanish_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/spanish_language_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/spanish_language_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/spanish_language_blocked_icon.png",
                    "submenu_option_image_id": "spanish_submenu_image_id",
                    "submenu_option_id": "spanish_submenu_option_id",
                    "submenu_option_button_id": "spanish_submenu_option_button",
                    "submenu_option_button_check_icon_id": "spanish_submenu_option_check",
                    "submenu_option_button_click_function": spanishLanguageClickFunction,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true]
                },
                {
                    "submenu_option_title": "English",
                    "submenu_option_title_id": "english_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/english_language_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/english_language_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/english_language_blocked_icon.png",
                    "submenu_option_image_id": "english_submenu_image_id",
                    "submenu_option_id": "english_submenu_option_id",
                    "submenu_option_button_id": "english_submenu_option_button",
                    "submenu_option_button_check_icon_id": "english_submenu_option_check",
                    "submenu_option_button_click_function": engliishLanguageClickFunction,
                    "submenu_option_enabled_state": true,
                    "available": true,
                    "river_availability": [true, true, true, true, true]
                },
            ],
            "available": true

        },

    ]

};

var rivers_morphometrics_JSON;
var rivers_erosion_deposition_JSON;

var drone_flights_JSON = [

    {
        "title": "Río Huallaga - Chontayacu",
        "location": "Uchiza",
        "latitude": -8.405576,
        "longitude": -76.37996,
        "code": "DJI_0145.MOV",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"

    },
    {
        "title": "Río Huallaga",
        "location": "Tingo María",
        "latitude": -9.286076,
        "longitude": -75.9998,
        "code": "DJI_0107.MOV",
        "thumbnail_image": "img/bottom-cards-images/card_1.JPG"
    }

];

var communitiesSubmenuOption = -1;
var community_etnias = [

    {
        "submenu_option_name": "Aguaruna",
        "submenu_option_json_name": "Aguaruna (Awajun)",
        "submenu_option_image_ref": "",
        "submenu_option_id": "etnia-aguaruna",
        "submenu_option_button_id": "aguaruna_submenu_option_button",
        "submenu_option_button_check_icon_id": "aguaruna_submenu_option_check",
        "submenu_option_button_click_function": aguaruna_submenu_option_clicked,

    },
    {
        "submenu_option_name": "Asháninka"
    },
    {
        "submenu_option_name": "Machiguenga"
    },
    {
        "submenu_option_name": "Amuesha"
    },
    {
        "submenu_option_name": "Cashinahua"
    },
    {
        "submenu_option_name": "Sharanahua"
    },
    {
        "submenu_option_name": "Mastanahua"
    },
    {
        "submenu_option_name": "Culina"
    },
    {
        "submenu_option_name": "Ashéninka"
    },
    {
        "submenu_option_name": "Shipibo-Conibo"
    },
    {
        "submenu_option_name": "Yagua"
    },
    {
        "submenu_option_name": "Piro"
    },
    {
        "submenu_option_name": "Quechua"
    },
    {
        "submenu_option_name": "Huambisa"
    },
    {
        "submenu_option_name": "Cacataibo"
    },
    {
        "submenu_option_name": "Nomatsiguenga"
    },
    {
        "submenu_option_name": "Amahuaca"
    },
    {
        "submenu_option_name": "Ticuna"
    },
    {
        "submenu_option_name": "Urarina"
    },
    {
        "submenu_option_name": "Achuar"
    },
    {
        "submenu_option_name": "Mayoruna"
    },
    {
        "submenu_option_name": "Huitoto"
    },
    {
        "submenu_option_name": "Iquito"
    },
    {
        "submenu_option_name": "Capanahua"
    },
    {
        "submenu_option_name": "Harakmbut"
    },
    {
        "submenu_option_name": "Ese Eja"
    },
    {
        "submenu_option_name": "Pukirieri"
    },
    {
        "submenu_option_name": "Arazaire"
    },
    {
        "submenu_option_name": "Candoshi"
    },
    {
        "submenu_option_name": "Yaminahua"
    },
    {
        "submenu_option_name": "Orejón"
    },
    {
        "submenu_option_name": "Secoya"
    },
    {
        "submenu_option_name": "Bora"
    },
    {
        "submenu_option_name": "Ocaina"
    },
    {
        "submenu_option_name": "Secoya"
    },




];

var droneFlightsMarkersArray = [];
var droneFlightsMarkersPositionsArray = [];

var data_menu_options = original_data_dancing_rivers["data_menu_options"];
var data_submenu_options = original_data_dancing_rivers["data_submenu_options"];
var background_data_menu_options = background_data_dancing_rivers["data_menu_options"];
var background_data_submenu_options = background_data_dancing_rivers["data_submenu_options"];
//</editor-fold>



//<editor-fold desc="Map Variables">
var sideBarLeftToggle = false;
var sideBarRightToggle = false;
var dem_layer_status = false;

var map;
var centroids = [];
var polygons = [];
var peruBounds = {north: 2.8, south: -19.5, west: -85.0, east: -65.0};
var initial_zoom = 6;
var initial_center = {lat: -9.348230, lng: -74.869015};


var rivers_center_coordinates = [

    {lat: -3.798189026111893, lng: -71.81820930597723}, //Amazonas
    {lat: -5.585791759355741, lng: -75.89849260498927}, //Huallaga
    {lat: -4.745834731451211, lng: -75.95129328144554}, //Marañon
    {lat: -7.0769861698921055, lng: -74.41859653177255} //Ucayali

];

var rivers_center_zoom_level = [
    9, //Amazonas
    9, //Huallaga
    8, //Marañon
    8  //Ucayali
];

var previous_drone_marker_coordinates = {lat: -180, lng: -180};
var previous_water_level_marker_coordinates = {lat: -180, lng: -180};

//0:1989, 1:1993, 2:1997, 3:2001, 4:2005, 5:2009, 6:2013, 7:2017 -> Huallaga, Ucayali
//0:1987, 1:1993, 2:1999, 3:2005, 4:2011, 5:20017 -> Amazonas, Marañon
var activeRiverIndex = -1;


//UHD Huallaga variables
var UHDHuallagaMarkers = [];
var UHDHuallagaMarkersPositions = [];
var UHDMarkerIndexTop = -1;
var UHDMarkerIndexBottom = -1;


//Morphometrics
var amazonas_avg_width_data_layer_1987;
var amazonas_avg_width_data_layer_1993;
var amazonas_avg_width_data_layer_1999;
var amazonas_avg_width_data_layer_2005;
var amazonas_avg_width_data_layer_2011;
var amazonas_avg_width_data_layer_2017;
var amazonas_sinuosity_data_layer_1987;
var amazonas_sinuosity_data_layer_1993;
var amazonas_sinuosity_data_layer_1999;
var amazonas_sinuosity_data_layer_2005;
var amazonas_sinuosity_data_layer_2011;
var amazonas_sinuosity_data_layer_2017;
var amazonas_wavelength_data_layer_1987;
var amazonas_wavelength_data_layer_1993;
var amazonas_wavelength_data_layer_1999;
var amazonas_wavelength_data_layer_2005;
var amazonas_wavelength_data_layer_2011;
var amazonas_wavelength_data_layer_2017;

var huallaga_avg_width_data_layer_1989;
var huallaga_avg_width_data_layer_1993;
var huallaga_avg_width_data_layer_1997;
var huallaga_avg_width_data_layer_2001;
var huallaga_avg_width_data_layer_2005;
var huallaga_avg_width_data_layer_2009;
var huallaga_avg_width_data_layer_2013;
var huallaga_avg_width_data_layer_2017;
var huallaga_sinuosity_data_layer_1989;
var huallaga_sinuosity_data_layer_1993;
var huallaga_sinuosity_data_layer_1997;
var huallaga_sinuosity_data_layer_2001;
var huallaga_sinuosity_data_layer_2005;
var huallaga_sinuosity_data_layer_2009;
var huallaga_sinuosity_data_layer_2013;
var huallaga_sinuosity_data_layer_2017;
var huallaga_wavelength_data_layer_1989;
var huallaga_wavelength_data_layer_1993;
var huallaga_wavelength_data_layer_1997;
var huallaga_wavelength_data_layer_2001;
var huallaga_wavelength_data_layer_2005;
var huallaga_wavelength_data_layer_2009;
var huallaga_wavelength_data_layer_2013;
var huallaga_wavelength_data_layer_2017;

var marañon_avg_width_data_layer_1987;
var marañon_avg_width_data_layer_1993;
var marañon_avg_width_data_layer_1999;
var marañon_avg_width_data_layer_2005;
var marañon_avg_width_data_layer_2011;
var marañon_avg_width_data_layer_2017;
var marañon_sinuosity_data_layer_1987;
var marañon_sinuosity_data_layer_1993;
var marañon_sinuosity_data_layer_1999;
var marañon_sinuosity_data_layer_2005;
var marañon_sinuosity_data_layer_2011;
var marañon_sinuosity_data_layer_2017;
var marañon_wavelength_data_layer_1987;
var marañon_wavelength_data_layer_1993;
var marañon_wavelength_data_layer_1999;
var marañon_wavelength_data_layer_2005;
var marañon_wavelength_data_layer_2011;
var marañon_wavelength_data_layer_2017;

var ucayali_avg_width_data_layer_1989;
var ucayali_avg_width_data_layer_1993;
var ucayali_avg_width_data_layer_1997;
var ucayali_avg_width_data_layer_2001;
var ucayali_avg_width_data_layer_2005;
var ucayali_avg_width_data_layer_2009;
var ucayali_avg_width_data_layer_2013;
var ucayali_avg_width_data_layer_2017;
var ucayali_sinuosity_data_layer_1989;
var ucayali_sinuosity_data_layer_1993;
var ucayali_sinuosity_data_layer_1997;
var ucayali_sinuosity_data_layer_2001;
var ucayali_sinuosity_data_layer_2005;
var ucayali_sinuosity_data_layer_2009;
var ucayali_sinuosity_data_layer_2013;
var ucayali_sinuosity_data_layer_2017;
var ucayali_wavelength_data_layer_1989;
var ucayali_wavelength_data_layer_1993;
var ucayali_wavelength_data_layer_1997;
var ucayali_wavelength_data_layer_2001;
var ucayali_wavelength_data_layer_2005;
var ucayali_wavelength_data_layer_2009;
var ucayali_wavelength_data_layer_2013;
var ucayali_wavelength_data_layer_2017;

//Erosion - Deposition
var marañon_erosion_deposition_NC_data_layer_1993;
var marañon_erosion_deposition_D_data_layer_1993;
var marañon_erosion_deposition_E_data_layer_1993;
var marañon_erosion_deposition_NC_data_layer_1999;
var marañon_erosion_deposition_D_data_layer_1999;
var marañon_erosion_deposition_E_data_layer_1999;
var marañon_erosion_deposition_NC_data_layer_2005;
var marañon_erosion_deposition_D_data_layer_2005;
var marañon_erosion_deposition_E_data_layer_2005;
var marañon_erosion_deposition_NC_data_layer_2011;
var marañon_erosion_deposition_D_data_layer_2011;
var marañon_erosion_deposition_E_data_layer_2011;
var marañon_erosion_deposition_NC_data_layer_2017;
var marañon_erosion_deposition_D_data_layer_2017;
var marañon_erosion_deposition_E_data_layer_2017;

var amazonas_erosion_deposition_NC_data_layer_1993;
var amazonas_erosion_deposition_D_data_layer_1993;
var amazonas_erosion_deposition_E_data_layer_1993;
var amazonas_erosion_deposition_NC_data_layer_1999;
var amazonas_erosion_deposition_D_data_layer_1999;
var amazonas_erosion_deposition_E_data_layer_1999;
var amazonas_erosion_deposition_NC_data_layer_2005;
var amazonas_erosion_deposition_D_data_layer_2005;
var amazonas_erosion_deposition_E_data_layer_2005;
var amazonas_erosion_deposition_NC_data_layer_2011;
var amazonas_erosion_deposition_D_data_layer_2011;
var amazonas_erosion_deposition_E_data_layer_2011;
var amazonas_erosion_deposition_NC_data_layer_2017;
var amazonas_erosion_deposition_D_data_layer_2017;
var amazonas_erosion_deposition_E_data_layer_2017;

//Migration
var ucayali_migration_1987_1989_data_layer;


//Field Measurements

//Water levels
var water_level_data_layer;
var water_level_markers = [];

//Dunes
var dunes_sections_huallaga_campaign_1_data_layer;
var dunes_lines_huallaga_campaign_1_data_layer;
var dunes_section_selected_index = -1;

//Bedload
var bedload_sections_huallaga_campaign_1_data_layer;

//Sediments
var sediments_stations_huallaga_campaign_1_data_layer;
var sediments_markers = [];
var sediment_button_type_selected = "";
var sediment_feature_UHS_property_selected = "";

//LSPIV
var lspiv_data_layer;
var lspiv_markers = [];


var south_america_limits_data_layer;
var amazonas_river_data_layer;
var amazonas_river_outline_data_layer;
var huallaga_river_data_layer;
var huallaga_river_outline_data_layer;
var marañon_river_data_layer;
var marañon_river_outline_data_layer;
var ucayali_river_data_layer;
var ucayali_river_outline_data_layer;


//Background data
var communities_data_layer;
var dem_overlay_map;
var malos_pasos_lines_data_layer;
var malos_pasos_points_data_layer;
var rivers_valley_data_layer;


var last_disabled_river_removed = -1;


//Background data Flags
var communities_enabled = false;
var dem_enabled = false;
var fires_enabled = false;


var amazonas1987Coords = [];
var amazonas1987CoordsProperties = [];
var amazonas1987Polygon;
var amazonas1993Coords = [];
var amazonas1993CoordsProperties = [];
var amazonas1993Polygon;
var amazonas1999Coords = [];
var amazonas1999CoordsProperties = [];
var amazonas1999Polygon;
var amazonas2005Coords = [];
var amazonas2005CoordsProperties = [];
var amazonas2005Polygon;
var amazonas2011Coords = [];
var amazonas2011CoordsProperties = [];
var amazonas2011Polygon;
var amazonas2017Coords = [];
var amazonas2017CoordsProperties = [];
var amazonas2017Polygon;


var amazonJSONs = [

    {
        "filepath": "data/rivers/Amazon/amazon1987.json",
        "dataArray": amazonas1987Coords,
        "propertiesArray": amazonas1987CoordsProperties,
        "polygonElement": amazonas1987Polygon
    },
    {
        "filepath": "data/rivers/Amazon/amazon1993.json",
        "dataArray": amazonas1993Coords,
        "propertiesArray": amazonas1993CoordsProperties,
        "polygonElement": amazonas1993Polygon
    },
    {
        "filepath": "data/rivers/Amazon/amazon1999.json",
        "dataArray": amazonas1999Coords,
        "propertiesArray": amazonas1999CoordsProperties,
        "polygonElement": amazonas1999Polygon
    },
    {
        "filepath": "data/rivers/Amazon/amazon2005.json",
        "dataArray": amazonas2005Coords,
        "propertiesArray": amazonas2005CoordsProperties,
        "polygonElement": amazonas2005Polygon
    },
    {
        "filepath": "data/rivers/Amazon/amazon2011.json",
        "dataArray": amazonas2011Coords,
        "propertiesArray": amazonas2011CoordsProperties,
        "polygonElement": amazonas2011Polygon
    },
    {
        "filepath": "data/rivers/Amazon/amazon2017.json",
        "dataArray": amazonas2017Coords,
        "propertiesArray": amazonas2017CoordsProperties,
        "polygonElement": amazonas2017Polygon
    },

];


var huallaga1989Coords = [];
var huallaga1989CoordsProperties = [];
var huallaga1993Coords = [];
var huallaga1993CoordsProperties = [];
var huallaga1997Coords = [];
var huallaga1997CoordsProperties = [];
var huallaga2001Coords = [];
var huallaga2001CoordsProperties = [];
var huallaga2005Coords = [];
var huallaga2005CoordsProperties = [];
var huallaga2009Coords = [];
var huallaga2009CoordsProperties = [];
var huallaga2013Coords = [];
var huallaga2013CoordsProperties = [];
var huallaga2017Coords = [];
var huallaga2017CoordsProperties = [];

var huallagaJSONs = [

    {
        "filepath": "data/rivers/Huallaga/Huallaga1989.json",
        "dataArray": huallaga1989Coords,
        "propertiesArray": huallaga1989CoordsProperties
    },
    {
        "filepath": "data/rivers/Huallaga/Huallaga1993.json",
        "dataArray": huallaga1993Coords,
        "propertiesArray": huallaga1993CoordsProperties
    },
    {
        "filepath": "data/rivers/Huallaga/Huallaga1997.json",
        "dataArray": huallaga1997Coords,
        "propertiesArray": huallaga1997CoordsProperties
    },
    {
        "filepath": "data/rivers/Huallaga/Huallaga2001.json",
        "dataArray": huallaga2001Coords,
        "propertiesArray": huallaga2001CoordsProperties
    },
    {
        "filepath": "data/rivers/Huallaga/Huallaga2005.json",
        "dataArray": huallaga2005Coords,
        "propertiesArray": huallaga2005CoordsProperties
    },
    {
        "filepath": "data/rivers/Huallaga/Huallaga2009.json",
        "dataArray": huallaga2009Coords,
        "propertiesArray": huallaga2009CoordsProperties
    },
    {
        "filepath": "data/rivers/Huallaga/Huallaga2013.json",
        "dataArray": huallaga2013Coords,
        "propertiesArray": huallaga2013CoordsProperties
    },
    {
        "filepath": "data/rivers/Huallaga/Huallaga2017.json",
        "dataArray": huallaga2017Coords,
        "propertiesArray": huallaga2017CoordsProperties
    }

];


var maranon1987Coords = [];
var maranon1987CoordsProperties = [];
var maranon1993Coords = [];
var maranon1993CoordsProperties = [];
var maranon1999Coords = [];
var maranon1999CoordsProperties = [];
var maranon2005Coords = [];
var maranon2005CoordsProperties = [];
var maranon2011Coords = [];
var maranon2011CoordsProperties = [];
var maranon2017Coords = [];
var maranon2017CoordsProperties = [];

var maranonJSONs = [

    {
        "filepath": "data/rivers/Marañon/maranon1987.json",
        "dataArray": maranon1987Coords,
        "propertiesArray": maranon1987CoordsProperties
    },
    {
        "filepath": "data/rivers/Marañon/maranon1993.json",
        "dataArray": maranon1993Coords,
        "propertiesArray": maranon1993CoordsProperties
    },
    {
        "filepath": "data/rivers/Marañon/maranon1999.json",
        "dataArray": maranon1999Coords,
        "propertiesArray": maranon1999CoordsProperties
    },
    {
        "filepath": "data/rivers/Marañon/maranon2005.json",
        "dataArray": maranon2005Coords,
        "propertiesArray": maranon2005CoordsProperties
    },
    {
        "filepath": "data/rivers/Marañon/maranon2011.json",
        "dataArray": maranon2011Coords,
        "propertiesArray": maranon2011CoordsProperties
    },
    {
        "filepath": "data/rivers/Marañon/maranon2017.json",
        "dataArray": maranon2017Coords,
        "propertiesArray": maranon2017CoordsProperties
    },

];


var ucayali1989Coords = [];
var ucayali1989CoordsProperties = [];
var ucayali1993Coords = [];
var ucayali1993CoordsProperties = [];
var ucayali1997Coords = [];
var ucayali1997CoordsProperties = [];
var ucayali2001Coords = [];
var ucayali2001CoordsProperties = [];
var ucayali2005Coords = [];
var ucayali2005CoordsProperties = [];
var ucayali2009Coords = [];
var ucayali2009CoordsProperties = [];
var ucayali2013Coords = [];
var ucayali2013CoordsProperties = [];
var ucayali2017Coords = [];
var ucayali2017CoordsProperties = [];

var ucayaliJSONs = [

    {
        "filepath": "data/rivers/Ucayali/ucayali1989.json",
        "dataArray": ucayali1989Coords,
        "propertiesArray": ucayali1989CoordsProperties
    },
    {
        "filepath": "data/rivers/Ucayali/ucayali1993.json",
        "dataArray": ucayali1993Coords,
        "propertiesArray": ucayali1993CoordsProperties
    },
    {
        "filepath": "data/rivers/Ucayali/ucayali1997.json",
        "dataArray": ucayali1997Coords,
        "propertiesArray": ucayali1997CoordsProperties
    },
    {
        "filepath": "data/rivers/Ucayali/ucayali2001.json",
        "dataArray": ucayali2001Coords,
        "propertiesArray": ucayali2001CoordsProperties
    },
    {
        "filepath": "data/rivers/Ucayali/ucayali2005.json",
        "dataArray": ucayali2005Coords,
        "propertiesArray": ucayali2005CoordsProperties
    },
    {
        "filepath": "data/rivers/Ucayali/ucayali2009.json",
        "dataArray": ucayali2009Coords,
        "propertiesArray": ucayali2009CoordsProperties
    },
    {
        "filepath": "data/rivers/Ucayali/ucayali2013.json",
        "dataArray": ucayali2013Coords,
        "propertiesArray": ucayali2013CoordsProperties
    },
    {
        "filepath": "data/rivers/Ucayali/ucayali2017.json",
        "dataArray": ucayali2017Coords,
        "propertiesArray": ucayali2017CoordsProperties
    }

];
//</editor-fold>



//<editor-fold desc="Original & Background Data Project Functions">

//Original Data

//Original Left panel set
function set_original_data_menu(menu_options_JSON, submenu_options_JSON){

    var original_data_content_list_template = document.getElementsByTagName("template")[4];
    var original_data_content_menu_option_template = document.getElementsByTagName("template")[5];
    var original_data_content_submenu_template = document.getElementsByTagName("template")[6];
    var original_data_content_list_template_content = document.importNode(original_data_content_list_template.content,true);

    for(var i = 0; i < menu_options_JSON.length; i++){

        var original_data_content_menu_option_template_content = document.importNode(original_data_content_menu_option_template.content,true);
        original_data_content_menu_option_template_content.getElementById("data-original-menu-button").id = menu_options_JSON[i].menu_button_option_id;
        original_data_content_menu_option_template_content.getElementById("original-data-submenu-container").id = menu_options_JSON[i].menu_option_id;
        original_data_content_menu_option_template_content.getElementById("data-original-menu-title").innerHTML = menu_options_JSON[i].menu_option_title;
        original_data_content_menu_option_template_content.getElementById("data-original-menu-title").style.color = menu_options_JSON[i].available ? "#FFFFFF" : "#323232";
        original_data_content_menu_option_template_content.getElementById("data-original-menu-title").style.color = menu_options_JSON[i].submenu_option_enabled_state ? "#00BFDF" : original_data_content_menu_option_template_content.getElementById("data-original-menu-title").style.color;
        original_data_content_menu_option_template_content.getElementById("data-original-menu-title").setAttribute("data-i18n", menu_options_JSON[i].menu_option_title_id);
        original_data_content_menu_option_template_content.getElementById("data-original-menu-title").id = menu_options_JSON[i].menu_option_title_id;
        original_data_content_menu_option_template_content.getElementById("data-original-menu-icon").src = menu_options_JSON[i].menu_option_image_ref;
        original_data_content_list_template_content.getElementById("data-original-content-list").appendChild(original_data_content_menu_option_template_content);

        for(var j = 0; j < submenu_options_JSON[i].options.length; j++){

            var original_data_content_submenu_template_content = document.importNode(original_data_content_submenu_template.content,true);
            original_data_content_submenu_template_content.getElementById("original-data-submenu-option").id = submenu_options_JSON[i].options[j].submenu_option_id;
            original_data_content_submenu_template_content.getElementById("data-original-submenu-title").innerHTML = submenu_options_JSON[i].options[j].submenu_option_title;
            original_data_content_submenu_template_content.getElementById("data-original-submenu-title").style.color = submenu_options_JSON[i].options[j].available ? "#FFFFFF" : "#323232";
            original_data_content_submenu_template_content.getElementById("data-original-submenu-title").setAttribute("data-i18n", submenu_options_JSON[i].options[j].submenu_option_title_id);
            original_data_content_submenu_template_content.getElementById("data-original-submenu-title").id = submenu_options_JSON[i].options[j].submenu_option_title_id;
            original_data_content_submenu_template_content.getElementById("data-original-submenu-icon").src = submenu_options_JSON[i].options[j].submenu_option_image_ref;
            original_data_content_submenu_template_content.getElementById("data-original-submenu-icon").id = submenu_options_JSON[i].options[j].submenu_option_image_id;
            original_data_content_submenu_template_content.getElementById("original-data-submenu-option-button").id = submenu_options_JSON[i].options[j].submenu_option_button_id;
            if(submenu_options_JSON[i].options[j].available) original_data_content_submenu_template_content.getElementById(submenu_options_JSON[i].options[j].submenu_option_button_id).addEventListener("click", submenu_options_JSON[i].options[j].submenu_option_button_click_function);
            original_data_content_submenu_template_content.getElementById("submenu-check-icon").id = submenu_options_JSON[i].options[j].submenu_option_button_check_icon_id;
            original_data_content_list_template_content.getElementById(menu_options_JSON[i].menu_option_id).appendChild(original_data_content_submenu_template_content);


        }

    }

    document.getElementById("data-original-container").appendChild(original_data_content_list_template_content);

}


//Background Data

//Background Right panel set
function set_background_data_menu(menu_options_JSON, submenu_options_JSON) {

    var background_data_content_list_template = document.getElementsByTagName("template")[11];
    var background_data_content_menu_option_template = document.getElementsByTagName("template")[12];
    var background_data_content_submenu_template = document.getElementsByTagName("template")[13];
    var background_data_content_list_template_content = document.importNode(background_data_content_list_template.content,true);

    for(var i = 0; i < menu_options_JSON.length; i++){

        var background_data_content_menu_option_template_content = document.importNode(background_data_content_menu_option_template.content,true);
        background_data_content_menu_option_template_content.getElementById("data-background-menu-button").id = menu_options_JSON[i].menu_button_option_id;
        background_data_content_menu_option_template_content.getElementById("background-data-submenu-container").id = menu_options_JSON[i].menu_option_id;
        background_data_content_menu_option_template_content.getElementById("data-background-menu-title").innerHTML = menu_options_JSON[i].menu_option_title;
        background_data_content_menu_option_template_content.getElementById("data-background-menu-title").style.color = menu_options_JSON[i].available ? "#FFFFFF" : "#323232";
        background_data_content_menu_option_template_content.getElementById("data-background-menu-title").setAttribute("data-i18n", menu_options_JSON[i].menu_option_title_id);
        background_data_content_menu_option_template_content.getElementById("data-background-menu-title").id = menu_options_JSON[i].menu_option_title_id;
        background_data_content_menu_option_template_content.getElementById("data-background-menu-icon").src = menu_options_JSON[i].menu_option_image_ref;
        background_data_content_menu_option_template_content.getElementById("data-background-menu-icon").id = menu_options_JSON[i].menu_button_icon_id;
        background_data_content_list_template_content.getElementById("data-background-content-list").appendChild(background_data_content_menu_option_template_content);

        for(var j = 0; j < submenu_options_JSON[i].options.length; j++){

            var background_data_content_submenu_template_content = document.importNode(background_data_content_submenu_template.content,true);
            background_data_content_submenu_template_content.getElementById("background-data-submenu-option").id = submenu_options_JSON[i].options[j].submenu_option_id;
            background_data_content_submenu_template_content.getElementById("data-background-submenu-title").innerHTML = submenu_options_JSON[i].options[j].submenu_option_title;
            background_data_content_submenu_template_content.getElementById("data-background-submenu-title").style.color = submenu_options_JSON[i].options[j].available ? "#FFFFFF" : "#323232";
            background_data_content_submenu_template_content.getElementById("data-background-submenu-title").style.color = submenu_options_JSON[i].options[j].submenu_option_enabled_state ? "#00BFDF" : background_data_content_submenu_template_content.getElementById("data-background-submenu-title").style.color;
            background_data_content_submenu_template_content.getElementById("data-background-submenu-title").setAttribute("data-i18n", submenu_options_JSON[i].options[j].submenu_option_title_id);
            background_data_content_submenu_template_content.getElementById("data-background-submenu-title").id = submenu_options_JSON[i].options[j].submenu_option_title_id;
            background_data_content_submenu_template_content.getElementById("data-background-submenu-icon").src = submenu_options_JSON[i].options[j].submenu_option_enabled_state ? submenu_options_JSON[i].options[j].submenu_option_image_enabled_ref : submenu_options_JSON[i].options[j].submenu_option_image_ref;
            background_data_content_submenu_template_content.getElementById("data-background-submenu-icon").id = submenu_options_JSON[i].options[j].submenu_option_image_id;
            background_data_content_submenu_template_content.getElementById("background-data-submenu-option-button").id = submenu_options_JSON[i].options[j].submenu_option_button_id;
            if(submenu_options_JSON[i].options[j].available) background_data_content_submenu_template_content.getElementById(submenu_options_JSON[i].options[j].submenu_option_button_id).addEventListener("click", submenu_options_JSON[i].options[j].submenu_option_button_click_function);
            background_data_content_submenu_template_content.getElementById("submenu-check-icon").id = submenu_options_JSON[i].options[j].submenu_option_button_check_icon_id;
            background_data_content_list_template_content.getElementById(menu_options_JSON[i].menu_option_id).appendChild(background_data_content_submenu_template_content);

        }

    }

    document.getElementById("data-background-container").appendChild(background_data_content_list_template_content);

}

//Rivers Submenu
function amazonas_submenu_option_clicked() {

    if(!data_submenu_options[0].options[0].submenu_option_enabled_state){

        activeRiverIndex = 0;

        clearSubmenuEnabledStatus(1);
        clearSubmenuEnabledStatus(2);
        clearSubmenuEnabledStatus(5);
        toggleIconAndTextEnabled("amazonas_submenu_option_button", 0);

        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);

        clearMap();

        addSinglePolygonToMap("data/rivers/Amazon/amazon1987_outline.geojson", amazonas_river_outline_data_layer, "#00BFDF", 1.0, "#00BFDF", 1.0);
        map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));
        addLastRemovedPolygon();
        last_disabled_river_removed = 0;

    }

}
function huallaga_submenu_option_clicked() {

    if(!data_submenu_options[0].options[1].submenu_option_enabled_state){

        activeRiverIndex = 1;

        clearSubmenuEnabledStatus(1);
        clearSubmenuEnabledStatus(2);
        clearSubmenuEnabledStatus(5);
        toggleIconAndTextEnabled("huallaga_submenu_option_button", 0);

        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);

        clearMap();

        addSinglePolygonToMap("data/rivers/Huallaga/huallaga1987_outline.geojson", huallaga_river_outline_data_layer, "#00BFDF", 1.0, "#00BFDF", 1.0);
        map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));
        addLastRemovedPolygon();
        last_disabled_river_removed = 1;

    }

}
function marañon_submenu_option_clicked() {

    if(!data_submenu_options[0].options[2].submenu_option_enabled_state){

        activeRiverIndex = 2;

        clearSubmenuEnabledStatus(1);
        clearSubmenuEnabledStatus(2);
        clearSubmenuEnabledStatus(5);
        toggleIconAndTextEnabled("marañon_submenu_option_button", 0);

        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);

        clearMap();

        addSinglePolygonToMap("data/rivers/Marañon/marañon1987_outline.geojson", marañon_river_outline_data_layer, "#00BFDF", 1.0, "#00BFDF", 1.0);
        map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));
        addLastRemovedPolygon();
        last_disabled_river_removed = 2;

    }

}
function ucayali_submenu_option_clicked() {

    if(!data_submenu_options[0].options[3].submenu_option_enabled_state){

        activeRiverIndex = 3;

        clearSubmenuEnabledStatus(1);
        clearSubmenuEnabledStatus(2);
        clearSubmenuEnabledStatus(5);
        toggleIconAndTextEnabled("ucayali_submenu_option_button", 0);

        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);

        clearMap();

        addSinglePolygonToMap("data/rivers/Ucayali/ucayali1987_outline.geojson", ucayali_river_outline_data_layer, "#00BFDF", 1.0, "#00BFDF", 1.0);
        map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));
        addLastRemovedPolygon();
        last_disabled_river_removed = 3;

    }

}


//Morphometrics Submenu
function width_submenu_option_clicked() {

    if(!data_submenu_options[1].options[0].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(2);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("width_submenu_option_button", 1);

        if(activeRiverIndex === 0 || activeRiverIndex === 2){
            addYearProgressBar6();
        }else if(activeRiverIndex === 1 || activeRiverIndex === 3){
            addYearProgressBar8();
        }

        clearMap();

        fadeInElements(["progress-bar-container"], 350);
        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 0);
        removeElementChildNodesWithClass("legendDIVStyle");
        addMorphometricsLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["1.2+ km", "0.8 - 1.2", "0.4 - 0.8", "0.0  - 0.4"]);

    }else{}

}
function sinuosity_submenu_option_clicked() {

    if(!data_submenu_options[1].options[1].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(2);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("sinuosity_submenu_option_button", 1);

        if(activeRiverIndex === 0 || activeRiverIndex === 2){
            addYearProgressBar6();
        }else if(activeRiverIndex === 1 || activeRiverIndex === 3){
            addYearProgressBar8();
        }

        clearMap();

        fadeInElements(["progress-bar-container"], 350);
        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 0);
        removeElementChildNodesWithClass("legendDIVStyle");
        addMorphometricsLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["2.0+", "1.70 - 2.0", "1.35 - 1.70", "1.00  - 1.35"]);

    }else{}

}
function arc_wavelength_submenu_option_clicked() {

    if(!data_submenu_options[1].options[2].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(2);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("arc_wavelength_submenu_option_button", 1);

        if(activeRiverIndex === 0 || activeRiverIndex === 2){
            addYearProgressBar6();
        }else if(activeRiverIndex === 1 || activeRiverIndex === 3){
            addYearProgressBar8();
        }

        clearMap();

        fadeInElements(["progress-bar-container"], 350);
        // addRiverToMap(activeRiverJSON(activeRiverIndex), yearIndex);
        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 0);
        removeElementChildNodesWithClass("legendDIVStyle");

        if(activeRiverIndex === 0) addMorphometricsLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["20.0+", "17.0 - 20.0", "13.5 - 17.0", "10.0  - 13.5"]);
        if(activeRiverIndex === 1) addMorphometricsLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["0.9+", "0.6 - 0.9", "0.3 - 0.6", "0.0  - 0.3"]);
        if(activeRiverIndex === 2) addMorphometricsLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["20.0+", "17.0 - 20.0", "13.5 - 17.0", "10.0  - 13.5"]);
        if(activeRiverIndex === 3) addMorphometricsLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["15.0+", "10.0 - 15.0", "0.5 - 10.0", "0.0  - 0.5"]);

    }else{}

}
function migration_submenu_option_clicked() {

    if(!data_submenu_options[1].options[3].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(2);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("migration_submenu_option_button", 1);

        clearMap();

        removeElementChildNodesWithClass("legendDIVStyle");
        addMorphometricsLegend([migration_red, migration_orange, migration_yellow, migration_green], ["0.9+ km", "0.6 - 0.9", "0.3 - 0.6", "0.0  - 0.3"]);

        ucayali_migration_1987_1989_data_layer.setMap(map);

    }else{}

}
function erosion_submenu_option_clicked() {

    if(!data_submenu_options[1].options[4].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(2);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("erosion_submenu_option_button", 1);

        if(activeRiverIndex === 0 || activeRiverIndex === 2){
            addYearProgressBar6();
        }else if(activeRiverIndex === 1 || activeRiverIndex === 3){
            addYearProgressBar8();
        }

        clearMap();

        fadeInElements(["progress-bar-container"], 350);
        removeElementChildNodesWithClass("legendDIVStyle");
        addMorphometricsLegend(["#143291", "#B71632", "#64AF62"], ["No change", "Erosion", "Deposition"]);

    }else{}

}


//Field Measurements Submenu
function water_level_submenu_option_clicked() {

    if(!data_submenu_options[2].options[0].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(1);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("water_level_submenu_option_button", 2);

        clearMap();

        addMarkersGeoJSON("data/Water-levels/Estaciones_UTEC.geojson", water_level_data_layer, "img/marker-icons/azul.png", waterLevelsMarkerClickCallback, markerMouseoverCallback, markerMouseoutCallback, water_level_markers);
        // map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        map.setZoom(10);
        map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));
        $('#dropdownMenuButtonWaterlevel + [aria-labelledby="dropdownMenuButtonWaterlevel"] button').on('click', function (e) {

            e.preventDefault();
            offsetCenter(new google.maps.LatLng(water_level_markers[parseInt(this.name)].getProperty("x"), water_level_markers[parseInt(this.name)].getProperty("y")), 12);
            document.getElementById("water-level-card-image").src = "img/Water-levels/" + water_level_markers[parseInt(this.name)].getProperty("Estaciones") + ".png";
            document.getElementById("dropdownMenuButtonWaterlevel").innerHTML = water_level_markers[parseInt(this.name)].getProperty("Estaciones");
            document.getElementById("water-level-card-location").innerHTML = water_level_markers[parseInt(this.name)].getProperty("Estaciones");

        });

    }else{}

}
function hydrodynamic_submenu_option_clicked() {

    if(!data_submenu_options[2].options[2].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(1);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("hydrodynamic_submenu_option_button", 2);

        UHDHuallagaMarkers = [];
        UHDHuallagaMarkersPositions = [];
        clearMap();

        addButtonOptionsUHDDropdown(23, "dropdown-uhd-top-buttons-container");
        addButtonOptionsUHDDropdown(23, "dropdown-uhd-bottom-buttons-container");
        addUHDMarkers("data/cross_sections/huallaga-cross-section-location.geojson", "img/marker-icons/blanco.png", UHDHuallagaMarkers, UHDHuallagaMarkersPositions, hydrodynamic_marker_click_function);

    }else{}

}
function flow_rate_submenu_option_clicked() {

}
function dunes_submenu_option_clicked() {

    if(!data_submenu_options[2].options[3].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(1);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("dunes_submenu_option_button", 2);

        clearMap();

        dunes_sections_huallaga_campaign_1_data_layer.setMap(map);
        // map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        map.setZoom(10);
        map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));

    }else{}

}
function bedload_submenu_option_clicked() {

    if(!data_submenu_options[2].options[4].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(1);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("bedload_submenu_option_button", 2);

        clearMap();

        bedload_sections_huallaga_campaign_1_data_layer.setMap(map);
        // map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        map.setZoom(10);
        map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));

    }else{}

}
function sediment_submenu_option_clicked() {

    if(!data_submenu_options[2].options[5].submenu_option_enabled_state && activeRiverIndex !== -1){

        document.getElementById("sediments-card-size-button").addEventListener("click", function () {
            document.getElementById("sediments-card-size-button").src = "img/side-bar-icon/sediment_size_button_enabled_icon.png";
            document.getElementById("sediments-card-concentration-button").src = "img/side-bar-icon/sediment_concentration_button_icon.png";
            sediment_button_type_selected = "size";
            document.getElementById("sediments-card-image").src = "img/Sediments/Huallaga/" + sediment_feature_UHS_property_selected + "_" + sediment_button_type_selected + ".png";
        });
        document.getElementById("sediments-card-concentration-button").addEventListener("click", function () {
            document.getElementById("sediments-card-size-button").src = "img/side-bar-icon/sediment_size_button_icon.png";
            document.getElementById("sediments-card-concentration-button").src = "img/side-bar-icon/sediment_concentration_button_enabled_icon.png";
            sediment_button_type_selected = "concentration";
            document.getElementById("sediments-card-image").src = "img/Sediments/Huallaga/" + sediment_feature_UHS_property_selected + "_" + sediment_button_type_selected + ".png";
        });

        clearSubmenuEnabledStatus(1);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("sediment_submenu_option_button", 2);

        clearMap();

        addMarkersGeoJSON("data/Sediments/Huallaga/UHS_Huallaga.geojson", sediments_stations_huallaga_campaign_1_data_layer, "img/marker-icons/azul.png", sedimentsMarkerClickCallback, null, null, sediments_markers);
        // map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        map.setZoom(10);
        map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));

    }else{}

}
function hydrogeomorphology_submenu_option_clicked() {

    toggleIconAndTextEnabled("hydrogeomorphology_submenu_option_button", 2);

}
function lspiv_submenu_option_clicked() {
    addMarkersGeoJSON("data/LSPIV/Estaciones_LSPIV.geojson", lspiv_data_layer, "img/side-bar-icon/lspiv_marker_icon.png", LSPIVMarkerClickCallback, null, null, lspiv_markers);
}

//Drone Submenu
function drone_map_submenu_option_clicked() {

    if(!data_submenu_options[5].options[0].submenu_option_enabled_state){
        clearMap();
        activeRiverIndex = 1;
        toggleIconAndTextEnabled("drone_map_submenu_option_button", 5);
        activeRiverIndex = -1;
        addDroneMarker();
    }

}
function drone_list_submenu_option_clicked() {

    if(!data_submenu_options[5].options[1].submenu_option_enabled_state){
        clearMap();
        var temp = activeRiverIndex;
        activeRiverIndex = 1;
        toggleIconAndTextEnabled("drone_list_submenu_option_button", 5);
        activeRiverIndex = temp;
        $("#drone-flights-card-container").fadeIn(200, function () {
            fadeInElements(["card-1-row-1", "card-2-row-1", "card-3-row-1", "card-1-row-2", "card-2-row-2", "card-3-row-2", "card-1-row-3", "card-2-row-3", "card-3-row-3", "card-1-row-4", "card-2-row-4", "card-3-row-4", "card-1-row-5", "card-2-row-5", "card-3-row-5"], 400);
        });
    }

}

//Background Data

//Etnias Submenu
function aguaruna_submenu_option_clicked() {

    communitiesSubmenuOption = 0;
    var community_JSON = community_etnias[communitiesSubmenuOption];

    $.getJSON("amazon-native-communities.geojson", function (json) {

        console.log(features[0].geometry.coordinates[0][0]);


        // for(var i = 0; i < json.features.length; i++){
        //
        //     console.log(features[0].geometry.coordinates[0][0]);
        //
        // }

    });

}

//Communities
function communitiesOptionClicked() {

    if(communities_enabled){
        communities_data_layer.setMap(null);
        document.getElementById("communities_menu_button_icon_id").src = "img/side-bar-icon/communities-icon.png";
        document.getElementById("communities_menu_option_title_id").style.color = "#FFFFFF";
    }else{
        communities_data_layer.setMap(map);
        document.getElementById("communities_menu_button_icon_id").src = "img/side-bar-icon/communities-enabled_icon.png";
        document.getElementById("communities_menu_option_title_id").style.color = "#00BFDF";
    }

    communities_enabled = !communities_enabled;

}

//DEM Menu
function demMenuOptionClicked() {

    if(dem_enabled){
        map.overlayMapTypes.removeAt(0);
        hideElements(["morphometrics-legend-container"]);
        document.getElementById("dem_menu_button_icon_id").src = "img/side-bar-icon/elevation_icon.png";
        document.getElementById("dem_menu_option_title_id").style.color = "#FFFFFF";
    }else{
        document.getElementById("dem_menu_button_icon_id").src = "img/side-bar-icon/elevation_enabled_icon.png";
        document.getElementById("dem_menu_option_title_id").style.color = "#00BFDF";
        removeElementChildNodesWithClass("legendDIVStyle");
        addMorphometricsLegend(["#050505", "#424242", "#808080", "#bdbdbd", "#fafafa"], ["6246 m.a.s.l", "2928 m.a.s.l", "478 m.a.s.l", "183 m.a.s.l", "0 m.a.s.l"]);

        var mapBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-18.358391, -81.298417), new google.maps.LatLng(0.007659, -68.673950));
        var mapMinZoom = 4;
        var mapMaxZoom = 9;
        dem_overlay_map = new google.maps.ImageMapType({
            getTileUrl: function(coord, zoom) {
                var proj = map.getProjection();
                var z2 = Math.pow(2, zoom);
                var tileXSize = 256 / z2;
                var tileYSize = 256 / z2;
                var tileBounds = new google.maps.LatLngBounds(
                    proj.fromPointToLatLng(new google.maps.Point(coord.x * tileXSize, (coord.y + 1) * tileYSize)),
                    proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * tileXSize, coord.y * tileYSize))
                );
                var x = coord.x >= 0 ? coord.x : z2 + coord.x;
                var y = coord.y;
                if (mapBounds.intersects(tileBounds) && (mapMinZoom <= zoom) && (zoom <= mapMaxZoom))
                    return "img/DEM/" + zoom + "/" + x + "/" + y + ".png";
            },
            tileSize: new google.maps.Size(256, 256),
            isPng: true,
            opacity: 1.0
        });

        map.overlayMapTypes.insertAt(0, dem_overlay_map);

    }

    dem_enabled = !dem_enabled;

}

//Fires Menu
function firesMenuOptionClicked(){

    removeDisabledRiverPolygons();

    if(fires_enabled){
        document.getElementById("malos_pasos_menu_button_icon_id").src = "img/side-bar-icon/malos_pasos_icon.png";
        document.getElementById("malos_pasos_menu_option_title_id").style.color = "#FFFFFF";
        malos_pasos_points_data_layer.setMap(null);
        malos_pasos_lines_data_layer.setMap(null);

    }else{
        document.getElementById("malos_pasos_menu_button_icon_id").src = "img/side-bar-icon/malos_pasos_enabled_icon.png";
        document.getElementById("malos_pasos_menu_option_title_id").style.color = "#00BFDF";
        malos_pasos_points_data_layer.setMap(map);
        malos_pasos_lines_data_layer.setMap(map);
    }

    fires_enabled = !fires_enabled;

    // rivers_valley_data_layer.setMap(map);

}

//Clear Map Menu
function clearMapSubmenuOptionClicked() {

    clearMap();
    clearBackgroundData();
    reloadMenuOptionsAvailabilityForRiver(0, 4);
    reloadMenuOptionsAvailabilityForRiver(1, 4);
    reloadMenuOptionsAvailabilityForRiver(2, 4);
    reloadMenuOptionsAvailabilityForRiver(5, 4);

}

//Drone list videos
function renderDroneVideoList(){

    document.getElementById("drone-flights-card-container-close-button").addEventListener("click", function () {
        fadeOutElements(["drone-flights-card-container"], 350);
        data_submenu_options[5].options[1].submenu_option_enabled_state = false;
        reloadMenuOptionsAvailabilityForRiver(5, 1);
    });

    var drone_video_card_template = document.getElementsByTagName("template")[10];

    for (var i = 0; i < drone_flights_JSON.length; i++){

        var drone_video_card_template_content = document.importNode(drone_video_card_template.content,true);

        (function (i) {

            drone_video_card_template_content.getElementById("drone-card-container").addEventListener("click", function () {
                document.getElementById("drone-video-source").src = "videos/drone_flights/" + drone_flights_JSON[i].code;
                document.getElementById("droneVideoOverlay").style.visibility = "visible";
                fadeInElements(["droneVideoOverlay"], 350);
            });

        })(i);

        drone_video_card_template_content.getElementById("hero-image-drone-card").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + drone_flights_JSON[i].thumbnail_image + ")";
        drone_video_card_template_content.getElementById("drone-card-video-title").innerHTML = drone_flights_JSON[i].title;
        drone_video_card_template_content.getElementById("drone-card-video-description").innerHTML = drone_flights_JSON[i].location;
        document.getElementById("drone-flights-card-container").appendChild(drone_video_card_template_content);
    }

}

//Spanish Language Submenu
function spanishLanguageClickFunction(){
    // clearBackgroundDataSubmenuEnabledStatus(10);
    var temp = activeRiverIndex;
    activeRiverIndex = 1;
    toggleBackgroundDataIconAndTextEnabled("spanish_submenu_option_button", 10);
    activeRiverIndex = temp;
    switchLanguage("es");
    fadeInElements(["general-loader"], 350);
}

//Spanish Language Submenu
function engliishLanguageClickFunction(){
    // clearBackgroundDataSubmenuEnabledStatus(10);
    var temp = activeRiverIndex;
    activeRiverIndex = 1;
    toggleBackgroundDataIconAndTextEnabled("english_submenu_option_button", 10);
    activeRiverIndex = temp;
    switchLanguage("en");
}

//</editor-fold>



//<editor-fold desc="Document Ready Function">
$(document).ready(function () {

    set_original_data_menu(data_menu_options, data_submenu_options);
    set_background_data_menu(background_data_menu_options, background_data_submenu_options);
    reloadMenuOptionsAvailabilityForRiver(1, 5);
    reloadMenuOptionsAvailabilityForRiver(2, 5);
    addCITALogo();
    addLeftPanelToggleListener();
    addRightPanelToggleListener();
    setDroneFlightCards();
    renderDroneVideoList();

    hideElements(["lspiv-marker-click-container"]);

    document.getElementById("communities_menu_button_option_id").addEventListener("click", communitiesOptionClicked);
    document.getElementById("dem_menu_button_option_id").addEventListener("click", demMenuOptionClicked);
    document.getElementById("malos_pasos_menu_button_option_id").addEventListener("click", firesMenuOptionClicked);
    document.getElementById("clear_map_menu_button_option_id").addEventListener("click", clearMapSubmenuOptionClicked);
    document.getElementById("card-1-marker-row-1").addEventListener("click", function () {
        fadeInElements(["droneVideoOverlay"], 350);
    });
    document.getElementById("imageZoomOverlay").addEventListener("click", function () {
        fadeOutElements(["imageZoomOverlay"], 350);
    })

});
//</editor-fold>



//<editor-fold desc="Map Init Function">
function initMap() {

    map = new google.maps.Map(document.getElementById('map'),
        {
            zoom: initial_zoom,
            center: initial_center,
            // styles: [
            //     {
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "color": "#ebe3cd"
            //             }
            //         ]
            //     },
            //     {
            //         "elementType": "labels.text.fill",
            //         "stylers": [
            //             {
            //                 "color": "#523735"
            //             }
            //         ]
            //     },
            //     {
            //         "elementType": "labels.text.stroke",
            //         "stylers": [
            //             {
            //                 "color": "#f5f1e6"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "administrative",
            //         "elementType": "geometry.stroke",
            //         "stylers": [
            //             {
            //                 "color": "#c9b2a6"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "administrative.land_parcel",
            //         "elementType": "geometry.stroke",
            //         "stylers": [
            //             {
            //                 "color": "#dcd2be"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "administrative.land_parcel",
            //         "elementType": "labels.text.fill",
            //         "stylers": [
            //             {
            //                 "color": "#ae9e90"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "landscape.natural",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "color": "#dfd2ae"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "poi",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "color": "#dfd2ae"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "poi",
            //         "elementType": "labels.text.fill",
            //         "stylers": [
            //             {
            //                 "color": "#93817c"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "poi.park",
            //         "elementType": "geometry.fill",
            //         "stylers": [
            //             {
            //                 "color": "#a5b076"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "poi.park",
            //         "elementType": "labels.text.fill",
            //         "stylers": [
            //             {
            //                 "color": "#447530"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "color": "#f5f1e6"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.arterial",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "color": "#fdfcf8"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.highway",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "color": "#f8c967"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.highway",
            //         "elementType": "geometry.stroke",
            //         "stylers": [
            //             {
            //                 "color": "#e9bc62"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.highway.controlled_access",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "color": "#e98d58"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.highway.controlled_access",
            //         "elementType": "geometry.stroke",
            //         "stylers": [
            //             {
            //                 "color": "#db8555"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "road.local",
            //         "elementType": "labels.text.fill",
            //         "stylers": [
            //             {
            //                 "color": "#806b63"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "transit.line",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "color": "#dfd2ae"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "transit.line",
            //         "elementType": "labels.text.fill",
            //         "stylers": [
            //             {
            //                 "color": "#8f7d77"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "transit.line",
            //         "elementType": "labels.text.stroke",
            //         "stylers": [
            //             {
            //                 "color": "#ebe3cd"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "transit.station",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {
            //                 "color": "#dfd2ae"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "water",
            //         "elementType": "geometry.fill",
            //         "stylers": [
            //             {
            //                 "color": "#b9d3c2"
            //             }
            //         ]
            //     },
            //     {
            //         "featureType": "water",
            //         "elementType": "labels.text.fill",
            //         "stylers": [
            //             {
            //                 "color": "#92998d"
            //             }
            //         ]
            //     }
            // ],
            disableDefaultUI: true,
            scaleControl: true,
            restriction: {
                latLngBounds: peruBounds,
                strictBounds: false,
            },
        });

    map.addListener("drag", function () {

        fadeOutElements(["drone-flights-marker-click-container", "lspiv-marker-click-container"], 350);
        previous_drone_marker_coordinates.lat = -180;
        previous_drone_marker_coordinates.lng = -180;

    });

    google.maps.event.addListener(map, "click", function (event) {

        if(previous_water_level_marker_coordinates.lat !== -180 && previous_water_level_marker_coordinates.lng !== -180){

            if(event.latLng.lat() !== previous_water_level_marker_coordinates.lat && event.latLng.lng() !== previous_water_level_marker_coordinates.lng){
                fadeOutElements(["water-level-card-container"], 350);
                previous_water_level_marker_coordinates.lat = -180;
                previous_water_level_marker_coordinates.lng = -180;
            }

        }

        fadeOutElements(["dunes-card-container", "bedload-card-container", "sediments-card-container", "drone-flights-marker-click-container"], 350);

    });

    hideElements(["senamhiCardsContainer", "crossSectionsCardsContainer", "UHGCardsContainer", "UHSCardsContainer", "metricsContainer", "imageZoomOverlay", "droneVideoButton", "droneVideoOverlay", "main-wrapper"]);
    hideElements(["morphometrics-legend-container", "progress-bar-container", "UHD-top-card-container", "UHD-bottom-card-container", "help-tooltip", "UHD-top-card-cross-icon", "UHD-bottom-card-cross-icon"]);
    hideElements(["drone-flights-marker-click-container", "water-level-card-container", "dunes-card-container", "bedload-card-container", "sediments-card-container"]);
    hideElements(["map-bottom-left-container"]);
    hideElements(["general-loader"]);

    south_america_limits_data_layer = new google.maps.Data();
    amazonas_river_data_layer = new google.maps.Data();
    amazonas_river_outline_data_layer = new google.maps.Data();
    huallaga_river_data_layer = new google.maps.Data();
    huallaga_river_outline_data_layer = new google.maps.Data();
    marañon_river_data_layer = new google.maps.Data();
    marañon_river_outline_data_layer = new google.maps.Data();
    ucayali_river_data_layer = new google.maps.Data();
    ucayali_river_outline_data_layer = new google.maps.Data();
    communities_data_layer = new google.maps.Data();
    lspiv_data_layer = new google.maps.Data();
    water_level_data_layer = new google.maps.Data();
    dunes_sections_huallaga_campaign_1_data_layer = new google.maps.Data();
    dunes_lines_huallaga_campaign_1_data_layer = new google.maps.Data();
    bedload_sections_huallaga_campaign_1_data_layer = new google.maps.Data();
    sediments_stations_huallaga_campaign_1_data_layer = new google.maps.Data();
    malos_pasos_lines_data_layer = new google.maps.Data();
    malos_pasos_points_data_layer = new google.maps.Data();

    rivers_morphometrics_JSON = [

        {
            "river": "Amazonas",
            "river_width_layer": [amazonas_avg_width_data_layer_1987, amazonas_avg_width_data_layer_1993, amazonas_avg_width_data_layer_1999, amazonas_avg_width_data_layer_2005, amazonas_avg_width_data_layer_2011, amazonas_avg_width_data_layer_2017],
            "river_sinuosity_layer": [amazonas_sinuosity_data_layer_1987, amazonas_sinuosity_data_layer_1993, amazonas_sinuosity_data_layer_1999, amazonas_sinuosity_data_layer_2005, amazonas_sinuosity_data_layer_2011, amazonas_sinuosity_data_layer_2017],
            "river_wavelength_layer": [amazonas_wavelength_data_layer_1987, amazonas_wavelength_data_layer_1993, amazonas_wavelength_data_layer_1999, amazonas_wavelength_data_layer_2005, amazonas_wavelength_data_layer_2011, amazonas_wavelength_data_layer_2017],
            "river_path": ["data/rivers/Amazon/amazon1987.json", "data/rivers/Amazon/amazon1993.json", "data/rivers/Amazon/amazon1999.json", "data/rivers/Amazon/amazon2005.json", "data/rivers/Amazon/amazon2011.json", "data/rivers/Amazon/amazon2017.json"]
        },
        {
            "river": "Huallaga",
            "river_width_layer": [huallaga_avg_width_data_layer_1989, huallaga_avg_width_data_layer_1993, huallaga_avg_width_data_layer_1997, huallaga_avg_width_data_layer_2001,huallaga_avg_width_data_layer_2005, huallaga_avg_width_data_layer_2009, huallaga_avg_width_data_layer_2013, huallaga_avg_width_data_layer_2017],
            "river_sinuosity_layer": [huallaga_sinuosity_data_layer_1989, huallaga_sinuosity_data_layer_1993, huallaga_sinuosity_data_layer_1997, huallaga_sinuosity_data_layer_2001, huallaga_sinuosity_data_layer_2005, huallaga_sinuosity_data_layer_2009, huallaga_sinuosity_data_layer_2013, huallaga_sinuosity_data_layer_2017],
            "river_wavelength_layer": [huallaga_wavelength_data_layer_1989, huallaga_wavelength_data_layer_1993, huallaga_wavelength_data_layer_1997, huallaga_wavelength_data_layer_2001, huallaga_wavelength_data_layer_2005, huallaga_wavelength_data_layer_2009, huallaga_wavelength_data_layer_2013, huallaga_wavelength_data_layer_2017],
            "river_path": ["data/rivers/Huallaga/huallaga1989.json", "data/rivers/Huallaga/huallaga1993.json", "data/rivers/Huallaga/huallaga1997.json", "data/rivers/Huallaga/huallaga2001.json", "data/rivers/Huallaga/huallaga2005.json", "data/rivers/Huallaga/huallaga2009.json", "data/rivers/Huallaga/huallaga2013.json", "data/rivers/Huallaga/huallaga2017.json"]
        },
        {
            "river": "Marañon",
            "river_width_layer": [marañon_avg_width_data_layer_1987, marañon_avg_width_data_layer_1993, marañon_avg_width_data_layer_1999, marañon_avg_width_data_layer_2005, marañon_avg_width_data_layer_2011, marañon_avg_width_data_layer_2017],
            "river_sinuosity_layer": [marañon_sinuosity_data_layer_1987, marañon_sinuosity_data_layer_1993, marañon_sinuosity_data_layer_1999, marañon_sinuosity_data_layer_2005, marañon_sinuosity_data_layer_2011, marañon_sinuosity_data_layer_2017],
            "river_wavelength_layer": [marañon_wavelength_data_layer_1987, marañon_wavelength_data_layer_1993, marañon_wavelength_data_layer_1999, marañon_wavelength_data_layer_2005, marañon_wavelength_data_layer_2011, marañon_wavelength_data_layer_2017],
            "river_path": ["data/rivers/Marañon/maranon1987.json", "data/rivers/Marañon/maranon1993.json", "data/rivers/Marañon/maranon1999.json", "data/rivers/Marañon/maranon2005.json", "data/rivers/Marañon/maranon2011.json", "data/rivers/Marañon/maranon2017.json"]
        },
        {
            "river": "Ucayali",
            "river_width_layer": [ucayali_avg_width_data_layer_1989, ucayali_avg_width_data_layer_1993, ucayali_avg_width_data_layer_1997, ucayali_avg_width_data_layer_2001, ucayali_avg_width_data_layer_2005, ucayali_avg_width_data_layer_2009, ucayali_avg_width_data_layer_2013, ucayali_avg_width_data_layer_2017],
            "river_sinuosity_layer": [ucayali_sinuosity_data_layer_1989, ucayali_sinuosity_data_layer_1993, ucayali_sinuosity_data_layer_1997, ucayali_sinuosity_data_layer_2001, ucayali_sinuosity_data_layer_2005, ucayali_sinuosity_data_layer_2009, ucayali_sinuosity_data_layer_2013, ucayali_sinuosity_data_layer_2017],
            "river_wavelength_layer": [ucayali_wavelength_data_layer_1989, ucayali_wavelength_data_layer_1993, ucayali_wavelength_data_layer_1997, ucayali_wavelength_data_layer_2001, ucayali_wavelength_data_layer_2005, ucayali_wavelength_data_layer_2009, ucayali_wavelength_data_layer_2013, ucayali_wavelength_data_layer_2017],
            "river_path": ["data/rivers/Ucayali/ucayali1989.json", "data/rivers/Ucayali/ucayali1993.json", "data/rivers/Ucayali/ucayali1997.json", "data/rivers/Ucayali/ucayali2001.json", "data/rivers/Ucayali/ucayali2005.json", "data/rivers/Ucayali/ucayali2009.json", "data/rivers/Ucayali/ucayali2013.json", "data/rivers/Ucayali/ucayali2017.json"]
        }

    ];
    rivers_erosion_deposition_JSON = [

        {
            "river": "Amazonas",
            "river_data_NC_layer": [amazonas_erosion_deposition_NC_data_layer_1993, amazonas_erosion_deposition_NC_data_layer_1999, amazonas_erosion_deposition_NC_data_layer_2005, amazonas_erosion_deposition_NC_data_layer_2011, amazonas_erosion_deposition_NC_data_layer_2017],
            "river_data_E_layer": [amazonas_erosion_deposition_E_data_layer_1993, amazonas_erosion_deposition_E_data_layer_1999, amazonas_erosion_deposition_E_data_layer_2005, amazonas_erosion_deposition_E_data_layer_2011, amazonas_erosion_deposition_E_data_layer_2017],
            "river_data_D_layer": [amazonas_erosion_deposition_D_data_layer_1993, amazonas_erosion_deposition_D_data_layer_1999, amazonas_erosion_deposition_D_data_layer_2005, amazonas_erosion_deposition_D_data_layer_2011, amazonas_erosion_deposition_D_data_layer_2017],
            "no_change_JSON_path": ["data/rivers/Amazon/Erosion-deposition/1993/noch_amazonas1993.geojson", "data/rivers/Amazon/Erosion-deposition/1999/noch_amazonas1999.geojson", "data/rivers/Amazon/Erosion-deposition/2005/noch_amazonas2005.geojson", "data/rivers/Amazon/Erosion-deposition/2011/noch_amazonas2011.geojson", "data/rivers/Amazon/Erosion-deposition/2017/noch_amazonas2017.geojson"],
            "erosion_JSON_path": ["data/rivers/Amazon/Erosion-deposition/1993/ero_amazonas1993.geojson", "data/rivers/Amazon/Erosion-deposition/1999/ero_amazonas1999.geojson", "data/rivers/Amazon/Erosion-deposition/2005/ero_amazonas2005.geojson", "data/rivers/Amazon/Erosion-deposition/2011/ero_amazonas2011.geojson", "data/rivers/Amazon/Erosion-deposition/2017/ero_amazonas2017.geojson"],
            "deposition_JSON_path": ["data/rivers/Amazon/Erosion-deposition/1993/depo_amazonas1993.geojson", "data/rivers/Amazon/Erosion-deposition/1999/depo_amazonas1999.geojson", "data/rivers/Amazon/Erosion-deposition/2005/depo_amazonas2005.geojson", "data/rivers/Amazon/Erosion-deposition/2011/depo_amazonas2011.geojson", "data/rivers/Amazon/Erosion-deposition/2017/depo_amazonas2017.geojson"],

        },
        {
            "river": "Huallaga",
            "erosion_JSON_path": [],
            "no_change_JSON_path": [],
            "deposition_JSON_path": [],

        },
        {
            "river": "Marañon",
            "river_data_NC_layer": [marañon_erosion_deposition_NC_data_layer_1993, marañon_erosion_deposition_NC_data_layer_1999, marañon_erosion_deposition_NC_data_layer_2005, marañon_erosion_deposition_NC_data_layer_2011, marañon_erosion_deposition_NC_data_layer_2017],
            "river_data_E_layer": [marañon_erosion_deposition_E_data_layer_1993, marañon_erosion_deposition_E_data_layer_1999, marañon_erosion_deposition_E_data_layer_2005, marañon_erosion_deposition_E_data_layer_2011, marañon_erosion_deposition_E_data_layer_2017],
            "river_data_D_layer": [marañon_erosion_deposition_D_data_layer_1993, marañon_erosion_deposition_D_data_layer_1999, marañon_erosion_deposition_D_data_layer_2005, marañon_erosion_deposition_D_data_layer_2011, marañon_erosion_deposition_D_data_layer_2017],
            "no_change_JSON_path": ["data/rivers/Marañon/Erosion-deposition/1993/noch_marañon1993.geojson", "data/rivers/Marañon/Erosion-deposition/1999/noch_marañon1999.geojson", "data/rivers/Marañon/Erosion-deposition/2005/noch_marañon2005.geojson", "data/rivers/Marañon/Erosion-deposition/2011/noch_marañon2011.geojson", "data/rivers/Marañon/Erosion-deposition/2017/noch_marañon2017.geojson"],
            "erosion_JSON_path": ["data/rivers/Marañon/Erosion-deposition/1993/ero_marañon1993.geojson", "data/rivers/Marañon/Erosion-deposition/1999/ero_marañon1999.geojson", "data/rivers/Marañon/Erosion-deposition/2005/ero_marañon2005.geojson", "data/rivers/Marañon/Erosion-deposition/2011/ero_marañon2011.geojson", "data/rivers/Marañon/Erosion-deposition/2017/ero_marañon2017.geojson"],
            "deposition_JSON_path": ["data/rivers/Marañon/Erosion-deposition/1993/depo_marañon1993.geojson", "data/rivers/Marañon/Erosion-deposition/1999/depo_marañon1999.geojson", "data/rivers/Marañon/Erosion-deposition/2005/depo_marañon2005.geojson", "data/rivers/Marañon/Erosion-deposition/2011/depo_marañon2011.geojson", "data/rivers/Marañon/Erosion-deposition/2017/depo_marañon2017.geojson"],

        },
        {
            "river": "Ucayali",
            "no_change_JSON_path": [],
            "erosion_JSON_path": [],
            "deposition_JSON_path": [],

        }

    ];

    ucayali_migration_1987_1989_data_layer = new google.maps.Data();
    rivers_valley_data_layer = new google.maps.Data();

    //Morphometrics data layers initialization
    for (var j = 0; j < rivers_morphometrics_JSON.length; j++){

        initializeDataLayers(rivers_morphometrics_JSON[j].river_width_layer);
        initializeDataLayers(rivers_morphometrics_JSON[j].river_sinuosity_layer);
        initializeDataLayers(rivers_morphometrics_JSON[j].river_wavelength_layer);

        for (var k = 0; k < rivers_morphometrics_JSON[j].river_path.length; k++){

            addInteractiveSinglePolygonToMap(rivers_morphometrics_JSON[j].river_path[k], rivers_morphometrics_JSON[j].river_width_layer[k], "av_width", null, morphometricsMouseoverCallback, morphometricsMouseoutCallback, null);
            addInteractiveSinglePolygonToMap(rivers_morphometrics_JSON[j].river_path[k], rivers_morphometrics_JSON[j].river_sinuosity_layer[k], "sinuosity", null, morphometricsMouseoverCallback, morphometricsMouseoutCallback, null);
            addInteractiveSinglePolygonToMap(rivers_morphometrics_JSON[j].river_path[k], rivers_morphometrics_JSON[j].river_wavelength_layer[k], "arcwavelen", null, morphometricsMouseoverCallback, morphometricsMouseoutCallback, null);

        }

    }

    //Migration
    addInteractiveSinglePolygonToMap("data/rivers/Ucayali/Migration/ucayali_migration_1987_1989.geojson", ucayali_migration_1987_1989_data_layer, "migration", null, null, null, null);

    //Dunes
    addInteractiveSinglePolygonToMap("data/UHG-dunes/UHG_Sections_Huallaga_Moore_I_Feb_Mar_2018.geojson", dunes_sections_huallaga_campaign_1_data_layer, "dunes_sections", dunesSectionsClickCallback, null, null, null);
    addInteractiveSinglePolygonToMap("data/UHG-dunes/UHG_Lines_Huallaga_Moore_I_Feb_Mar_2018.geojson", dunes_lines_huallaga_campaign_1_data_layer, "dunes_lines", null, null, null, null);

    //Bedload
    addInteractiveSinglePolygonToMap("data/UHG-dunes/UHG_Sections_Huallaga_Moore_I_Feb_Mar_2018.geojson", bedload_sections_huallaga_campaign_1_data_layer, "bedload", bedloadSectionsClickCallback, null, null, null);

    //Erosion - Deposition data layers initialization
    initializeDataLayers(rivers_erosion_deposition_JSON[0].river_data_NC_layer);
    initializeDataLayers(rivers_erosion_deposition_JSON[0].river_data_E_layer);
    initializeDataLayers(rivers_erosion_deposition_JSON[0].river_data_D_layer);
    initializeDataLayers(rivers_erosion_deposition_JSON[2].river_data_NC_layer);
    initializeDataLayers(rivers_erosion_deposition_JSON[2].river_data_E_layer);
    initializeDataLayers(rivers_erosion_deposition_JSON[2].river_data_D_layer);

    for (var i = 0; i < rivers_erosion_deposition_JSON[2].river_data_D_layer.length; i++){

        loadJSONData(rivers_erosion_deposition_JSON[0].no_change_JSON_path[i], rivers_erosion_deposition_JSON[0].river_data_NC_layer[i], "#000000", 0.0, 0.0, noChangeColor_erosionDeposition, 1.0, null);
        loadJSONData(rivers_erosion_deposition_JSON[0].erosion_JSON_path[i], rivers_erosion_deposition_JSON[0].river_data_E_layer[i], "#000000", 0.0, 0.0, erosionColor_erosionDeposition, 1.0, null);
        loadJSONData(rivers_erosion_deposition_JSON[0].deposition_JSON_path[i], rivers_erosion_deposition_JSON[0].river_data_D_layer[i], "#000000", 0.0, 0.0, depositionColor_erosionDeposition, 1.0, null);
        loadJSONData(rivers_erosion_deposition_JSON[2].no_change_JSON_path[i], rivers_erosion_deposition_JSON[2].river_data_NC_layer[i], "#000000", 0.0, 0.0, noChangeColor_erosionDeposition, 1.0, null);
        loadJSONData(rivers_erosion_deposition_JSON[2].erosion_JSON_path[i], rivers_erosion_deposition_JSON[2].river_data_E_layer[i], "#000000", 0.0, 0.0, erosionColor_erosionDeposition, 1.0, null);
        loadJSONData(rivers_erosion_deposition_JSON[2].deposition_JSON_path[i], rivers_erosion_deposition_JSON[2].river_data_D_layer[i], "#000000", 0.0, 0.0, depositionColor_erosionDeposition, 1.0, null);

    }

    //South America Limits
    addInteractiveSinglePolygonToMap("data/country_limits/south_america.geojson", south_america_limits_data_layer, "limits", null, null, null, null);

    //Communities
    addInteractiveSinglePolygonToMap("data/communities/amazon-native-communities.geojson", communities_data_layer, "communities", null, null, null, null);

    //Malos pasos
    addInteractiveSinglePolygonToMap("data/malos_pasos/malos_pasos.geojson", malos_pasos_points_data_layer, "malos_pasos", null, null, null, null);
    addInteractiveSinglePolygonToMap("data/malos_pasos/malos_pasos_huallaga.geojson", malos_pasos_lines_data_layer, "malos_pasos_lineas", null, null, null, null);

    //Rivers Valley
    // addInteractiveSinglePolygonToMap("data/rivers_valley/rivers_valley.geojson", rivers_valley_data_layer, "rivers_valley", null, null, null, null);

    //Disabled polygons
    addInteractiveSinglePolygonToMap("data/disabled-rivers/Amazonas/amazonas_test.geojson", amazonas_river_data_layer, "disabled", null, null, null, null);
    addInteractiveSinglePolygonToMap("data/disabled-rivers/Huallaga/huallaga_test.geojson", huallaga_river_data_layer, "disabled", null, null, null, null);
    addInteractiveSinglePolygonToMap("data/disabled-rivers/Marañon/marañon_test.geojson", marañon_river_data_layer, "disabled", null, null, null, null);
    addInteractiveSinglePolygonToMap("data/disabled-rivers/Ucayali/ucayali_test.geojson", ucayali_river_data_layer, "disabled", null, null, null, initMapComplete);

}
//</editor-fold>



//<editor-fold desc="Map Related Functions">
function initMapComplete() {


    south_america_limits_data_layer.setMap(map);
    amazonas_river_data_layer.setMap(map);
    huallaga_river_data_layer.setMap(map);
    marañon_river_data_layer.setMap(map);
    ucayali_river_data_layer.setMap(map);

    setTimeout(function () {
        removeLoader();
    }, 1000);

}

function addDisabledRiverPolygons() {

    addSinglePolygonToMap("data/disabled-rivers/Amazonas/amazonas_test.geojson", amazonas_river_data_layer, "#000000", 0.2, "#555555", 0.8);
    addSinglePolygonToMap("data/disabled-rivers/Huallaga/huallaga_test.geojson", huallaga_river_data_layer, "#000000", 0.2, "#555555", 0.8);
    addSinglePolygonToMap("data/disabled-rivers/Marañon/marañon_test.geojson", marañon_river_data_layer, "#000000", 0.2, "#555555", 0.8);
    addSinglePolygonToMap("data/disabled-rivers/Ucayali/ucayali_test.geojson", ucayali_river_data_layer, "#000000", 0.2, "#555555", 0.8);

}

function removeDisabledRiverPolygons() {

    amazonas_river_data_layer.setMap(null);
    huallaga_river_data_layer.setMap(null);
    marañon_river_data_layer.setMap(null);
    ucayali_river_data_layer.setMap(null);

}

function removeCurrentPolygonFromMap() {

    for (var i = 0; i < polygons.length; i++){
        polygons[i].setMap(null);
    }

}

function removeMarkersFromMap(markersArray) {

    markersArray.forEach(function (marker) {
        marker.setMap(null);
    });

}

function addLastRemovedPolygon() {

    if(last_disabled_river_removed !== -1){

        if(last_disabled_river_removed === 0){
            amazonas_river_data_layer.setMap(map);
        }else if(last_disabled_river_removed === 1){
            huallaga_river_data_layer.setMap(map);
        }else if(last_disabled_river_removed === 2){
            marañon_river_data_layer.setMap(map);
        }else if((last_disabled_river_removed === 3)){
            ucayali_river_data_layer.setMap(map);
        }

    }

}

function removeRiverOutlines() {

    amazonas_river_outline_data_layer.setMap(null);
    huallaga_river_outline_data_layer.setMap(null);
    marañon_river_outline_data_layer.setMap(null);
    ucayali_river_outline_data_layer.setMap(null);

}

function addPolygonForRiver(coordsArray, propertiesArray) {

    centroids = [];

    for (var i = 0; i < coordsArray.length; i++){

        var properties = propertiesArray[i];
        var avgWidth = propertiesArray[i].av_width;
        var sinuosity = propertiesArray[i].sinuosity;
        var wavelen = propertiesArray[i].arcwavelen;
        var polygonCoords = coordsArray[i];

        var currentPolygon = new google.maps.Polygon({
            paths: coordsArray[i],
            strokeColor: '#000000',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            fillColor: polygonFillColor(propertiesArray[i]),
            fillOpacity: 1.0,
            zIndex: 1000006
        });

        polygons.push(currentPolygon);
        centroids.push(polygonCenter(currentPolygon));

        (function (currentPolygon, avgWidth, sinuosity, wavelen, properties, data_submenu_options) {

            google.maps.event.addListener(currentPolygon, 'mouseover', function (e)     {

                currentPolygon.setOptions({fillColor: "#000000", fillOpacity: 0.6});
                document.getElementById("metricsTextWidth").innerHTML = "Average Width: " + (avgWidth/1000).toFixed(3) + " km";
                document.getElementById("metricsTextWidth").style.display = data_submenu_options[1].options[0].submenu_option_enabled_state ? "block" : "none";
                document.getElementById("metricsTextSin").innerHTML = "Sinuosity: " + sinuosity.toFixed(3);
                document.getElementById("metricsTextSin").style.display = data_submenu_options[1].options[1].submenu_option_enabled_state ? "block" : "none";
                document.getElementById("metricsTextWave").innerHTML = "Arc Wavelength: " + (wavelen/1000).toFixed(3) + " km";
                document.getElementById("metricsTextWave").style.display = data_submenu_options[1].options[2].submenu_option_enabled_state ? "block" : "none";

                $("#metricsContainer").fadeIn(200, function () {});

            });

            google.maps.event.addListener(currentPolygon, 'mouseout', function (e) {

                currentPolygon.setOptions({fillColor: polygonFillColor(properties), fillOpacity: 1.0});
                $("#metricsContainer").fadeOut(100, function () {});

            });

        })(currentPolygon, avgWidth, sinuosity, wavelen, properties, data_submenu_options);

        currentPolygon.setMap(map);

    }

}

function polygonCenterTotal() {

    var sumLat = 0;
    var sumLng = 0;

    for (var t = 0; t < centroids.length; t++){

        sumLat += centroids[t].lat();
        sumLng += centroids[t].lng();

    }

    return {centerX: sumLat/centroids.length, centerY: sumLng/centroids.length}

}

function latLng2Point(latLng, map) {
    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
    var scale = Math.pow(2, map.getZoom());
    var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
    return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
}

function point2LatLng(point, map) {
    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
    var scale = Math.pow(2, map.getZoom());
    var worldPoint = new google.maps.Point(point.x / scale + bottomLeft.x, point.y / scale + topRight.y);
    return map.getProjection().fromPointToLatLng(worldPoint);
}

function colorMapWidth(d) {

    return  d >= 1.2 ? '#d7191c':
            d >= 0.8 ? '#fe960f':
            d >= 0.4 ? '#ecec0e':
                       '#1e961e';
}

function colorMapSinuosity(d) {
    return  d >= 2.00 ? '#d7191c':
            d >= 1.70 ? '#fe960f':
            d >= 1.35 ? '#ecec0e':
                        '#1e961e';
}

function colorMapWavelength(d) {

    if(activeRiverIndex === 0){

    }else if(activeRiverIndex === 1){

        return  d >= 0.90 ? '#d7191c':
                d >= 0.60 ? '#fe960f':
                d >= 0.30 ? '#ecec0e':
                            '#1e961e';

    }else if(activeRiverIndex === 2){

    }else if(activeRiverIndex === 3){

        return  d >= 15.0 ? '#d7191c':
                d >= 10.0 ? '#fe960f':
                d >= 0.50 ? '#ecec0e':
                            '#1e961e';

    }

}

function colorMapMigration(d) {

    return  d > 0.9 ? migration_red:
            d > 0.6 ? migration_orange:
            d > 0.3 ? migration_yellow:
                      migration_green;

}

function polygonFillColor(properties) {

    if(data_submenu_options[1].options[0].submenu_option_enabled_state){

        return colorMapWidth(properties.av_width/1000);

    }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){

        return colorMapSinuosity(properties.sinuosity);

    }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){

        return colorMapWavelength(properties.arcwavelen/1000);

    }

}

function addCITALogo() {

    var citaLogoTemplate = document.getElementsByTagName("template")[0];
    var citaLogoTemplateContent = document.importNode(citaLogoTemplate.content,true);
    document.getElementById("logo-template-container").appendChild(citaLogoTemplateContent);

}

function addLeftPanelToggleListener() {

    var left_panel = document.getElementById("side-bar-left");
    var title_left_panel = document.getElementById("side-bar-left-title");

    title_left_panel.style.color = "#212529";

    (function (left_panel, title_left_panel, sideBarLeftToggle) {

        document.getElementById("left-panel-toggle-button").addEventListener("click", function () {

            if(sideBarLeftToggle){
                $(left_panel).removeClass("whiteArrow");
                left_panel.style.width = "100%";
                title_left_panel.innerHTML = "Content";
                title_left_panel.style.color = "#212529";
                fadeInElements(["rivers_menu_option_title_id", "morphometrics_menu_option_title_id", "field_measurements_menu_option_title_id", "amazon_forests_menu_option_title_id", "biodiversity_menu_option_title_id", "drone_menu_option_title_id", "rivers_menu_option_id", "metrics_menu_option_id", "measurements_menu_option_id", "amazon_forests_menu_option_id", "biodiversity_menu_option_id", "drone_menu_option_id"], 500);
                document.getElementById("left-panel-toggle-button").src = "img/side-bar-icon/arrow_left_icon.png";
                document.getElementById("left-panel-toggle-button").style.cssFloat = "right";
            }else{
                $(left_panel).addClass("whiteArrow");
                left_panel.style.width = "22%";
                title_left_panel.innerHTML = "";
                title_left_panel.style.color = "#f0f0f0";
                hideElements(["rivers_menu_option_title_id", "morphometrics_menu_option_title_id", "field_measurements_menu_option_title_id", "amazon_forests_menu_option_title_id", "biodiversity_menu_option_title_id", "drone_menu_option_title_id", "rivers_menu_option_id", "metrics_menu_option_id", "measurements_menu_option_id", "amazon_forests_menu_option_id", "biodiversity_menu_option_id", "drone_menu_option_id"]);
                document.getElementById("left-panel-toggle-button").src = "img/side-bar-icon/arrow_right_icon.png";
                document.getElementById("left-panel-toggle-button").style.cssFloat = "none";
            }

            sideBarLeftToggle = !sideBarLeftToggle;

        });

    }(left_panel, title_left_panel, sideBarLeftToggle));

}

function addRightPanelToggleListener() {

    var right_panel = document.getElementById("side-bar-right");
    var title_right_panel = document.getElementById("side-bar-right-title");
    var data_background_container = document.getElementById("data-background-container");
    var metrics_container = document.getElementById("metricsContainer");
    var legendContainer = document.getElementById("morphometrics-legend-container");

    title_right_panel.style.color = "#212529";

    (function (right_panel, title_right_panel, sideBarRightToggle) {

        document.getElementById("right-panel-toggle-button").addEventListener("click", function () {

            if(sideBarRightToggle){
                $(right_panel).removeClass("whiteArrow");
                right_panel.style.width = "100%";
                right_panel.style.left = "0%";
                title_right_panel.innerHTML = "Background Data";
                title_right_panel.style.color = "#212529";
                metrics_container.style.right = "19.25vw";
                fadeInElements(["communities-menu-option-title-id", "dem-menu-option-title-id", "fires-menu-option-title-id", "geology-menu-option-title-id", "infrastructure-menu-option-title-id", "land-use-menu-option-title-id", "pna-menu-option-title-id", "transport-menu-option-title-id", "vegetation-menu-option-title-id"], 350);
                document.getElementById("right-panel-toggle-button").src = "img/side-bar-icon/arrow_right_icon.png";
                document.getElementById("right-panel-toggle-button").style.cssFloat = "right";
            }else{
                $(right_panel).addClass("whiteArrow");
                right_panel.style.width = "22%";
                right_panel.style.left = "78%";
                title_right_panel.innerHTML = "";
                title_right_panel.style.color = "#f0f0f0";
                metrics_container.style.right = "5em";
                hideElements(["communities-menu-option-title-id", "dem-menu-option-title-id", "fires-menu-option-title-id", "geology-menu-option-title-id", "infrastructure-menu-option-title-id", "land-use-menu-option-title-id", "pna-menu-option-title-id", "transport-menu-option-title-id", "vegetation-menu-option-title-id"]);
                document.getElementById("right-panel-toggle-button").src = "img/side-bar-icon/arrow_left_icon.png";
                document.getElementById("right-panel-toggle-button").style.cssFloat = "none";
            }

            sideBarRightToggle = !sideBarRightToggle;


        });

    }(right_panel, title_right_panel, sideBarRightToggle));

}

function addMorphometricsLegend(legendColorsArray, legendLabelsArray) {

    //For height and width of the color elements the space calculated was 65% of the legend container

    hideElements(["morphometrics-legend-container"]);
    var legendContainerTemplate = document.getElementsByTagName("template")[7];

    for(var i = 0; i < legendColorsArray.length; i++){

        var legendContainerTemplateContent = document.importNode(legendContainerTemplate.content,true);
        legendContainerTemplateContent.getElementById("legend-image").style.backgroundColor = legendColorsArray[i];
        legendContainerTemplateContent.getElementById("legend-image").style.width = 65/legendColorsArray.length + "%";
        legendContainerTemplateContent.getElementById("legend-span").innerHTML = legendLabelsArray[i];
        legendContainerTemplateContent.getElementById("legend-subcontainer").style.height = 65/legendColorsArray.length + "%";
        document.getElementById("legend-content").appendChild(legendContainerTemplateContent);

    }

    fadeInElements(["morphometrics-legend-container"], 500);

}

function addYearProgressBar8(){

    removeElementChildNodes(["progress-bar-container"]);
    var progressBarTemplate = document.getElementsByTagName("template")[8];
    var progressBarTemplateContent = document.importNode(progressBarTemplate.content,true);
    document.getElementById("progress-bar-container").appendChild(progressBarTemplateContent);
    document.getElementById("play-pause-year-button").addEventListener("click", playYearSlider8);
    setYearContainersListener8();

}

function addYearProgressBar6(){

    removeElementChildNodes(["progress-bar-container"]);
    var progressBarTemplate = document.getElementsByTagName("template")[9];
    var progressBarTemplateContent = document.importNode(progressBarTemplate.content,true);
    document.getElementById("progress-bar-container").appendChild(progressBarTemplateContent);
    document.getElementById("play-pause-year-button").addEventListener("click", playYearSlider6);
    setYearContainersListener6();

}

function addUHDMarkers(filePath, markerImagePath, markersArray, markersPositionArray, markerClickFunction) {

    $.getJSON(filePath, function (json) {

        for (var i = 0; i < json.features.length; i++){

            var marker = new google.maps.Marker({
                position: {lat: json.features[i].geometry.coordinates[1], lng: json.features[i].geometry.coordinates[0]},
                map: map,
                icon: markerImagePath,
            });

            markersArray.push(marker);
            markersPositionArray.push(marker.getPosition());

            (function (marker, i) {

                google.maps.event.addListener(marker, 'click', function (e) {

                    UHDMarkerIndexTop = UHDHuallagaMarkers.indexOf(marker) + 1;

                    markerClickFunction();

                    offsetCenter(marker.getPosition(), 12);
                    marker.setIcon("img/marker-icons/rojo.png");
                    geocodeLatLng(marker.getPosition(), "top");
                    console.log(UHDMarkerIndexTop);
                    document.getElementById("UHD-top-card-image").src = "img/cross_sections_images/huallaga/Section " + (i + 1) +".png";
                    // document.getElementById("dropdownMenuButtonTop").setAttribute("data-i18n", 'dropdown-UHD-section-item-' + UHDMarkerIndexTop.toString());
                    //document.getElementById("dropdownMenuButtonTop").setAttribute("data-i18n", 'dropdown-UHD-section-item');
                    document.getElementById("dropdownMenuButtonTop").innerHTML = $.i18n('dropdown-UHD-section-item', UHDMarkerIndexTop.toString());

                });

            })(marker, i);

        }

        var coordsArray = coordinatesArrayCenter(markersPositionArray);
        map.setZoom(10);
        map.panTo(new google.maps.LatLng(coordsArray.centerX, coordsArray.centerY));

    })

}

function coordinatesArrayCenter(coordinatesArray) {

    var sumLat = 0;
    var sumLng = 0;

    for (var t = 0; t < coordinatesArray.length; t++){

        sumLat += coordinatesArray[t].lat();
        sumLng += coordinatesArray[t].lng();

    }

    return {centerX: sumLat/coordinatesArray.length, centerY: sumLng/coordinatesArray.length}

}

function offsetCenter(latlng, zoom) {

    //0097CE blue
    //E7402B red

    // latlng is the apparent centre-point
    // offsetx is the distance you want that point to move to the right, in pixels
    // offsety is the distance you want that point to move upwards, in pixels
    // offset can be negative
    // offsetx and offsety are both optional

    var offsetx = -$(window).width()/4;

    var scale = Math.pow(2, zoom);

    var worldCoordinateCenter = map.getProjection().fromLatLngToPoint(latlng);
    var pixelOffset = new google.maps.Point((offsetx/scale) || 0, 0);

    var worldCoordinateNewCenter = new google.maps.Point(
        worldCoordinateCenter.x - pixelOffset.x,
        worldCoordinateCenter.y + pixelOffset.y
    );

    var newCenter = map.getProjection().fromPointToLatLng(worldCoordinateNewCenter);

    map.setZoom(zoom);
    map.panTo(newCenter);

}

function hydrodynamic_marker_click_function(){

    fadeInElements(["UHD-top-card-container", "UHD-bottom-card-container"], 350);
    document.getElementById("UHD-top-card-image").addEventListener("click", function () {
        showZoomImage(document.getElementById("UHD-top-card-image").src);
    });
    document.getElementById("UHD-bottom-card-image").addEventListener("click", function () {
        showZoomImage(document.getElementById("UHD-bottom-card-image").src);
    });
    setUHDDropdownsListeners();

    UHDHuallagaMarkers.forEach(function (marker) {

        if(UHDHuallagaMarkers.indexOf(marker) + 1 === UHDMarkerIndexBottom)  marker.setIcon("img/marker-icons/azul.png");
        if(UHDHuallagaMarkers.indexOf(marker) + 1 !== UHDMarkerIndexBottom) marker.setIcon("img/marker-icons/blanco.png");

    });

}

function geocodeLatLng(coordinate, container) {

    var geocoder = new google.maps.Geocoder;

    geocoder.geocode({'location': coordinate}, function(results, status) {

        if (status === 'OK') {

            if (results[0]) {

                if(container === "top"){
                    document.getElementById("UHD-marker-top-card-location").innerHTML = results[0].formatted_address;
                }else if(container === "bottom"){
                    document.getElementById("UHD-marker-bottom-card-location").innerHTML = results[0].formatted_address;
                }

            } else {
                window.alert('No results found');
            }

        } else {
            window.alert('Geocoder failed due to: ' + status);
        }

    });
}

function toggleDataLayerVisibility(dataLayerArray, dataLayerIndex) {

    dataLayerArray.forEach(function (layer) {

        if(dataLayerArray.indexOf(layer) !== dataLayerIndex) layer.setMap(null);
        if(dataLayerArray.indexOf(layer) === dataLayerIndex) layer.setMap(map);

    })

}

function disableDataLayerVisibility(dataLayerArray) {

    dataLayerArray.forEach(function (layer) {
        layer.setMap(null);
    })

}

function initializeDataLayers(dataLayerArray) {

    dataLayerArray.forEach(function (layer) {
        dataLayerArray[dataLayerArray.indexOf(layer)] = new google.maps.Data();
    })

}

function clearMap(){

    removeRiverOutlines();
    removeCurrentPolygonFromMap();
    removeDisabledRiverPolygons();
    removeMarkersFromMap(UHDHuallagaMarkers);
    removeMarkersFromMap(droneFlightsMarkersArray);
    fadeOutElements(["UHD-top-card-container", "UHD-bottom-card-container"], 350);
    fadeOutElements(["drone-flights-marker-click-container", "morphometrics-legend-container", "water-level-card-container", "dunes-card-container", "bedload-card-container", "sediments-card-container"], 350);
    fadeOutElements(["progress-bar-container"], 350);
    clearRiverErosionDepositionLayers();

    disableDataLayerVisibility(rivers_morphometrics_JSON[0].river_width_layer);
    disableDataLayerVisibility(rivers_morphometrics_JSON[0].river_sinuosity_layer);
    disableDataLayerVisibility(rivers_morphometrics_JSON[0].river_wavelength_layer);
    disableDataLayerVisibility(rivers_morphometrics_JSON[1].river_width_layer);
    disableDataLayerVisibility(rivers_morphometrics_JSON[1].river_sinuosity_layer);
    disableDataLayerVisibility(rivers_morphometrics_JSON[1].river_wavelength_layer);
    disableDataLayerVisibility(rivers_morphometrics_JSON[2].river_width_layer);
    disableDataLayerVisibility(rivers_morphometrics_JSON[2].river_sinuosity_layer);
    disableDataLayerVisibility(rivers_morphometrics_JSON[2].river_wavelength_layer);
    disableDataLayerVisibility(rivers_morphometrics_JSON[3].river_width_layer);
    disableDataLayerVisibility(rivers_morphometrics_JSON[3].river_sinuosity_layer);
    disableDataLayerVisibility(rivers_morphometrics_JSON[3].river_wavelength_layer);
    disableDataLayerVisibility([lspiv_data_layer, water_level_data_layer, dunes_sections_huallaga_campaign_1_data_layer, dunes_lines_huallaga_campaign_1_data_layer]);
    disableDataLayerVisibility([bedload_sections_huallaga_campaign_1_data_layer, sediments_stations_huallaga_campaign_1_data_layer]);

    ucayali_migration_1987_1989_data_layer.setMap(null);

}

function clearBackgroundData() {

    //Clear DEM layer
    map.overlayMapTypes.removeAt(0);
    hideElements(["morphometrics-legend-container"]);
    document.getElementById("dem-background-layer").src = "img/side-bar-icon/elevation_icon.png";
    document.getElementById("dem-menu-option-title-id").style.color = "#FFFFFF";
    dem_enabled = false;

    //Clear malos pasos layer
    document.getElementById("fires-background-layer").src = "img/side-bar-icon/malos_pasos_icon.png";
    document.getElementById("fires-menu-option-title-id").style.color = "#FFFFFF";
    malos_pasos_points_data_layer.setMap(null);
    malos_pasos_lines_data_layer.setMap(null);
    fires_enabled = false;

}

function morphometricsMouseoverCallback(event, river_data_layer) {

    river_data_layer.overrideStyle(event.feature, {fillColor: "#000000", fillOpacity: 0.6});
    document.getElementById("metricsTextWidth").innerHTML = $.i18n('metrics-average-width') + ": " + (event.feature.getProperty("av_width")/1000).toFixed(3) + " km";
    document.getElementById("metricsTextWidth").style.display = data_submenu_options[1].options[0].submenu_option_enabled_state ? "block" : "none";
    document.getElementById("metricsTextSin").innerHTML = $.i18n('metrics-sinuosity') + ": " + event.feature.getProperty("sinuosity").toFixed(3);
    document.getElementById("metricsTextSin").style.display = data_submenu_options[1].options[1].submenu_option_enabled_state ? "block" : "none";
    document.getElementById("metricsTextWave").innerHTML = $.i18n('metrics-arc-wavelength') + ": " + (event.feature.getProperty("arcwavelen")/1000).toFixed(3) + " km";
    document.getElementById("metricsTextWave").style.display = data_submenu_options[1].options[2].submenu_option_enabled_state ? "block" : "none";
    fadeInElements(["metricsContainer"], 350);

}

function morphometricsMouseoutCallback(event, river_data_layer) {

    river_data_layer.revertStyle();
    fadeOutElements(["metricsContainer"], 350);

}

function markerMouseoverCallback(event) {

    document.getElementById("bottom-left-coordinates-lat").innerHTML = $.i18n('coordinates-hover-container-latitude') + ": " + parseFloat(event.feature.getProperty("x").toFixed(4)) + "°";
    document.getElementById("bottom-left-coordinates-lng").innerHTML = $.i18n('coordinates-hover-container-longitude') + ": " + parseFloat(event.feature.getProperty("y").toFixed(4)) + "°";
    fadeInElements(["map-bottom-left-container"], 350);

}

function markerMouseoutCallback(event) {

    fadeOutElements(["map-bottom-left-container"], 350);

}

function dunesSectionsClickCallback(event) {

    //TODO: Should be with the points center
    offsetCenter(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()), 14);
    fadeInElements(["dunes-card-container"], 350);

    dunes_lines_huallaga_campaign_1_data_layer.forEach(function (feature) {

        if(feature.getProperty("layer").localeCompare("UHG" + event.feature.getProperty("id")) === 0 && feature.getProperty("Name").localeCompare("1") === 0){
            document.getElementById("dunes-top-card-title").innerHTML = "Day 1: " + feature.getProperty("dayOne");
            document.getElementById("dunes-bottom-card-title").innerHTML = "Day 2: " + feature.getProperty("dayTwo");
            dunes_lines_huallaga_campaign_1_data_layer.overrideStyle(feature, {strokeColor: dunes_lines_color, strokeOpacity: 1.0, strokeWeight: 3.0});
        }else{
            dunes_lines_huallaga_campaign_1_data_layer.overrideStyle(feature, {strokeColor: "#000000", strokeOpacity: 1.0, strokeWeight: 1.0});
        }

    });

    document.getElementById("dropdownMenuDunesLines").innerHTML = "Profile 1";
    dunes_section_selected_index = event.feature.getProperty("id");

    document.getElementById("dunes-top-card-image").src = "img/Dunes/Huallaga/UHG" + dunes_section_selected_index +"-1.png";
    document.getElementById("dunes-top-card-image").addEventListener("click", function () {
        showZoomImage(document.getElementById("dunes-top-card-image").src);
    });
    // document.getElementById("dunes-bottom-card-image").src = "img/Dunes/Huallaga/UHG" + dunes_section_selected_index +"-1.png";
    // document.getElementById("dunes-bottom-card-image").addEventListener("click", function () {
    //     showZoomImage(document.getElementById("dunes-bottom-card-image").src);
    // });

    setDunesDropdownListener();

    dunes_lines_huallaga_campaign_1_data_layer.setMap(map);

}

function bedloadSectionsClickCallback(event) {

    //TODO: Should be with the points center
    offsetCenter(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()), 14);
    fadeInElements(["bedload-card-container"], 350);

    // dunes_lines_huallaga_campaign_1_data_layer.forEach(function (feature) {
    //
    //     if(feature.getProperty("layer").localeCompare("UHG" + event.feature.getProperty("id")) === 0 && feature.getProperty("Name").localeCompare("1") === 0){
    //         document.getElementById("dunes-top-card-title").innerHTML = "Day 1: " + feature.getProperty("dayOne");
    //         document.getElementById("dunes-bottom-card-title").innerHTML = "Day 2: " + feature.getProperty("dayTwo");
    //         dunes_lines_huallaga_campaign_1_data_layer.overrideStyle(feature, {strokeColor: dunes_lines_color, strokeOpacity: 1.0, strokeWeight: 2.0});
    //     }else{
    //         dunes_lines_huallaga_campaign_1_data_layer.overrideStyle(feature, {strokeColor: "#000000", strokeOpacity: 0.0, strokeWeight: 0.0});
    //     }
    //
    // });

    // document.getElementById("dropdownMenuDunesLines").innerHTML = "Line 1";
    // dunes_section_selected_index = event.feature.getProperty("id");

    document.getElementById("bedload-card-image").src = "img/Bedload/Huallaga/UHG" + event.feature.getProperty("id") +"-bedload.png";
    document.getElementById("bedload-card-image").addEventListener("click", function () {
        showZoomImage(document.getElementById("bedload-card-image").src);
    });

    //setDunesDropdownListener();

}
//</editor-fold>



//<editor-fold desc="Year Slider Functions">
var isYearPlaying = false;
var id;
var width = 1;

function playYearSlider6() {

    document.getElementById("play-pause-year-button").src = isYearPlaying ? "img/side-bar-icon/play_icon.png" : "img/side-bar-icon/pause_icon.png";

    if(!isYearPlaying){
        id = setInterval(frame, 50);
    }

    function frame() {

        if (width >= 100 || !isYearPlaying) {
            clearInterval(id);
            document.getElementById("play-pause-year-button").src = "img/side-bar-icon/play_icon.png";
            isYearPlaying = false;
            if (width >= 100) width = 18;
            document.getElementById("myBar").style.width = width + '%';
        } else {
            width = width + 1;
            document.getElementById("myBar").style.width = width + '%';
        }

        document.querySelectorAll(".year-label-container").forEach(function (yearContainer) {

            yearContainer.classList.remove("year-label-container-active");
            yearContainer.querySelector(".year-label").classList.remove("year-label-active");

        });

        removeRiverOutlines();

        if(width <= 18){

            document.getElementById("year-label-1").classList.add("year-label-container-active");
            document.getElementById("year-label-1").querySelector(".year-label").classList.add("year-label-active");

            if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 0);
            }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 0);
            }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 0);
            }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                clearRiverErosionDepositionLayers();
            }

        }else if(width > 18.0 && width <= 34.0){

            document.getElementById("year-label-2").classList.add("year-label-container-active");
            document.getElementById("year-label-2").querySelector(".year-label").classList.add("year-label-active");

            if(width === 26){

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 1);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 1);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 1);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 0);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 0);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 0);
                }

            }

        }else if(width > 34.0 && width <= 50.0){

            document.getElementById("year-label-3").classList.add("year-label-container-active");
            document.getElementById("year-label-3").querySelector(".year-label").classList.add("year-label-active");

            if(width === 42) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 2);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 2);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 2);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 1);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 1);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 1);
                }

            }

        }else if(width > 50.0 && width <= 67.0){

            document.getElementById("year-label-4").classList.add("year-label-container-active");
            document.getElementById("year-label-4").querySelector(".year-label").classList.add("year-label-active");

            if(width === 59) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 3);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 3);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 3);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 2);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 2);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 2);
                }

            }

        }else if(width > 67.0 && width <= 84.0){

            document.getElementById("year-label-5").classList.add("year-label-container-active");
            document.getElementById("year-label-5").querySelector(".year-label").classList.add("year-label-active");

            if(width === 76) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 4);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 4);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 4);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 3);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 3);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 3);
                }

            }

        }else if(width > 84.0 && width <= 100.0){

            document.getElementById("year-label-6").classList.add("year-label-container-active");
            document.getElementById("year-label-6").querySelector(".year-label").classList.add("year-label-active");

            if(width === 92) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 5);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 5);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 5);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 4);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 4);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 4);
                }

            }

        }

    }

    isYearPlaying = !isYearPlaying;

}

function playYearSlider8() {

    document.getElementById("play-pause-year-button").src = isYearPlaying ? "img/side-bar-icon/play_icon.png" : "img/side-bar-icon/pause_icon.png";

    if(!isYearPlaying){
        id = setInterval(frame, 50);
    }

    function frame() {

        if (width >= 100 || !isYearPlaying) {
            clearInterval(id);
            document.getElementById("play-pause-year-button").src = "img/side-bar-icon/play_icon.png";
            isYearPlaying = false;
            if(width >= 100) width = 12;
            document.getElementById("myBar").style.width = width + '%';
        } else {
            width = width + 1;
            document.getElementById("myBar").style.width = width + '%';
        }

        document.querySelectorAll(".year-label-container").forEach(function (yearContainer) {

            yearContainer.classList.remove("year-label-container-active");
            yearContainer.querySelector(".year-label").classList.remove("year-label-active");

        });


        if(width <= 12.5){

            document.getElementById("year-label-1").classList.add("year-label-container-active");
            document.getElementById("year-label-1").querySelector(".year-label").classList.add("year-label-active");

            if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 0);
            }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 0);
            }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 0);
            }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

            }

        }else if(width > 12.5 && width <= 25.0){

            document.getElementById("year-label-2").classList.add("year-label-container-active");
            document.getElementById("year-label-2").querySelector(".year-label").classList.add("year-label-active");

            if(width === 18){

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 1);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 1);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 1);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }

        }else if(width > 25.0 && width <= 37.5){

            document.getElementById("year-label-3").classList.add("year-label-container-active");
            document.getElementById("year-label-3").querySelector(".year-label").classList.add("year-label-active");

            if(width === 31) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 2);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 2);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 2);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }

        }else if(width > 37.5 && width <= 50){

            document.getElementById("year-label-4").classList.add("year-label-container-active");
            document.getElementById("year-label-4").querySelector(".year-label").classList.add("year-label-active");

            if(width === 43) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 3);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 3);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 3);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }

        }else if(width > 50 && width <= 62.5){

            document.getElementById("year-label-5").classList.add("year-label-container-active");
            document.getElementById("year-label-5").querySelector(".year-label").classList.add("year-label-active");

            if(width === 56) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 4);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 4);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 4);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }

        }else if(width > 62.5 && width <= 75.0){

            document.getElementById("year-label-6").classList.add("year-label-container-active");
            document.getElementById("year-label-6").querySelector(".year-label").classList.add("year-label-active");

            if(width === 69) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 5);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 5);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 5);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }

        }else if(width > 75.0 && width <= 87.5){

            document.getElementById("year-label-7").classList.add("year-label-container-active");
            document.getElementById("year-label-7").querySelector(".year-label").classList.add("year-label-active");

            if(width === 81) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 6);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 6);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 6);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }

        }else if(width > 87.5 && width <= 100){

            document.getElementById("year-label-8").classList.add("year-label-container-active");
            document.getElementById("year-label-8").querySelector(".year-label").classList.add("year-label-active");

            if(width === 94) {

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 7);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 7);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 7);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }

        }

    }

    isYearPlaying = !isYearPlaying;

}

function setYearContainersListener6(){

    document.querySelectorAll(".year-label-container").forEach(function (yearContainer) {

        yearContainer.addEventListener("click", function () {

            document.getElementById("play-pause-year-button").src = "img/side-bar-icon/play_icon.png";
            clearInterval(id);
            isYearPlaying = false;

            if(yearContainer.id === "year-label-1"){

                document.getElementById("myBar").style.width = "16.67%";
                width = 18;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 0);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 0);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 0);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }


            }else if(yearContainer.id === "year-label-2"){

                document.getElementById("myBar").style.width = "33.34%";
                width = 34;

                // if(data_submenu_options[1].options[0].submenu_option_enabled_state || data_submenu_options[1].options[1].submenu_option_enabled_state || data_submenu_options[1].options[2].submenu_option_enabled_state){
                //     addRiverToMap(activeRiverJSON(activeRiverIndex), 1);
                // }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 0);
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 0);
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 0);
                // }

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 1);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 1);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 1);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 0);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 0);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 0);
                }

            }else if(yearContainer.id === "year-label-3"){

                document.getElementById("myBar").style.width = "50.01%";
                width = 50;

                // if(data_submenu_options[1].options[0].submenu_option_enabled_state || data_submenu_options[1].options[1].submenu_option_enabled_state || data_submenu_options[1].options[2].submenu_option_enabled_state){
                //     addRiverToMap(activeRiverJSON(activeRiverIndex), 2);
                // }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 2);
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 2);
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 2);
                // }

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 2);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 2);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 2);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 1);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 1);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 1);
                }

            }else if(yearContainer.id === "year-label-4"){

                document.getElementById("myBar").style.width = "66.68%";
                width = 67;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 3);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 3);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 3);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 2);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 2);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 2);
                }

                // if(data_submenu_options[1].options[0].submenu_option_enabled_state || data_submenu_options[1].options[1].submenu_option_enabled_state || data_submenu_options[1].options[2].submenu_option_enabled_state){
                //     addRiverToMap(activeRiverJSON(activeRiverIndex), 3);
                // }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 1);
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 1);
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 1);
                // }

            }else if(yearContainer.id === "year-label-5"){

                document.getElementById("myBar").style.width = "83.35%";
                width = 84;

                // if(data_submenu_options[1].options[0].submenu_option_enabled_state || data_submenu_options[1].options[1].submenu_option_enabled_state || data_submenu_options[1].options[2].submenu_option_enabled_state){
                //     addRiverToMap(activeRiverJSON(activeRiverIndex), 4);
                // }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 2);
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 2);
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 2);
                // }

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 4);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 4);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 4);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 3);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 3);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 3);
                }

            }else if(yearContainer.id === "year-label-6"){
                document.getElementById("myBar").style.width = "100%";
                width = 100;

                // if(data_submenu_options[1].options[0].submenu_option_enabled_state || data_submenu_options[1].options[1].submenu_option_enabled_state || data_submenu_options[1].options[2].submenu_option_enabled_state){
                //     addRiverToMap(activeRiverJSON(activeRiverIndex), 5);
                // }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 3);
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 3);
                //     toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 3);
                // }

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 5);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 5);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 5);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer, 4);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer, 4);
                    toggleDataLayerVisibility(rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer, 4);
                }

            }

            document.querySelectorAll(".year-label").forEach(function (label) {
                label.classList.remove("year-label-active");
            });
            document.querySelectorAll(".year-label-container").forEach(function (label) {
                label.classList.remove("year-label-container-active");
            });
            yearContainer.classList.add("year-label-container-active");
            yearContainer.querySelector(".year-label").classList.add("year-label-active");

        });

        yearContainer.addEventListener("mouseover", function () {

            yearContainer.classList.add("year-label-container-active-hover");
            yearContainer.querySelector(".year-label").classList.add("year-label-active-hover");

        });

        yearContainer.addEventListener("mouseout", function () {

            yearContainer.classList.remove("year-label-container-active-hover");
            yearContainer.querySelector(".year-label").classList.remove("year-label-active-hover");

        });

    });

}

function setYearContainersListener8(){

    document.querySelectorAll(".year-label-container").forEach(function (yearContainer) {

        yearContainer.addEventListener("click", function () {

            document.getElementById("play-pause-year-button").src = "img/side-bar-icon/play_icon.png";
            clearInterval(id);
            isYearPlaying = false;
            removeCurrentPolygonFromMap();

            if(yearContainer.id === "year-label-1"){

                document.getElementById("myBar").style.width = "12.5%";
                width = 12;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 0);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 0);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 0);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }else if(yearContainer.id === "year-label-2"){

                document.getElementById("myBar").style.width = "25%";
                width = 25;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 1);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 1);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 1);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }else if(yearContainer.id === "year-label-3"){

                document.getElementById("myBar").style.width = "37.5%";
                width = 38;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 2);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 2);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 2);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }else if(yearContainer.id === "year-label-4"){

                document.getElementById("myBar").style.width = "50%";
                width = 50;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 3);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 3);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 3);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }else if(yearContainer.id === "year-label-5"){

                document.getElementById("myBar").style.width = "62.5%";
                width = 63;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 4);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 4);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 4);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }else if(yearContainer.id === "year-label-6"){

                document.getElementById("myBar").style.width = "75%";
                width = 75;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 5);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 5);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 5);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }else if(yearContainer.id === "year-label-7"){

                document.getElementById("myBar").style.width = "87.5%";
                width = 88;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 6);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 6);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 6);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }else if(yearContainer.id === "year-label-8"){

                document.getElementById("myBar").style.width = "100%";
                width = 100;

                if(data_submenu_options[1].options[0].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 7);
                }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 7);
                }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer);
                    disableDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer);
                    toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 7);
                }else if(data_submenu_options[1].options[4].submenu_option_enabled_state){

                }

            }

            document.querySelectorAll(".year-label").forEach(function (label) {
                label.classList.remove("year-label-active");
            });

            document.querySelectorAll(".year-label-container").forEach(function (label) {
                label.classList.remove("year-label-container-active");
            });

            yearContainer.classList.add("year-label-container-active");
            yearContainer.querySelector(".year-label").classList.add("year-label-active");
        });

        yearContainer.addEventListener("mouseover", function () {

            yearContainer.classList.add("year-label-container-active-hover");
            yearContainer.querySelector(".year-label").classList.add("year-label-active-hover");

        });

        yearContainer.addEventListener("mouseout", function () {

            yearContainer.classList.remove("year-label-container-active-hover");
            yearContainer.querySelector(".year-label").classList.remove("year-label-active-hover");

        });

    });

}
//</editor-fold>



//<editor-fold desc="General Functions">
function hideElements(elementsIDArray){

    elementsIDArray.forEach(function (elementID) {
        $("#" + elementID).hide();
    })

}

function showElements(elementsIDArray){

    elementsIDArray.forEach(function (elementID) {
        $("#" + elementID).show();
    })

}

function hideSubmenuCheckIcon(elementID, flag) {

    if(flag){
        fadeOutElements([elementID], 75);
    }else{
        // hideElements([elementID]);
        // fadeInElements([elementID], 75);
    }

    return !flag;

}

function fadeInElements(elementsIDArray, animation_time) {

    elementsIDArray.forEach(function (elementID) {
        $("#" + elementID).fadeIn(animation_time, function () {});
    })

}

function fadeOutElements(elementsIDArray, animation_time) {

    elementsIDArray.forEach(function (elementID) {
        $("#" + elementID).fadeOut(animation_time, function () {});
    })

}

function removeElementChildNodes(elementsIDArray) {

    elementsIDArray.forEach(function (elementID) {
        $("#" + elementID).empty();
    })

}

function removeElementChildNodesWithClass(className) {

    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

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

        river_data_layer.setMap(map);

    });

}

function addMarkersGeoJSON(JSON_path, river_data_layer, markerIconImagePath, clickCallback, mouseoverCallback, mouseoutCallback, featuresArray) {

    $.getJSON(JSON_path, function (json) {

        river_data_layer.addGeoJson(json);
        river_data_layer.setStyle(function(feature) {
            return {
                icon: markerIconImagePath,
                title: feature.getProperty("Name")
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

        if(featuresArray.length <= 0){
            river_data_layer.forEach(function (feature) {
                featuresArray.push(feature);
            });
        }

        river_data_layer.setMap(map);

    });

}

function LSPIVMarkerClickCallback(event) {

    document.getElementById("lspiv-marker-card-title").innerHTML = event.feature.getProperty("Name");
    document.getElementById("lspiv-marker-card-image").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('Gif/lspiv_gifs/" + event.feature.getProperty("Id") + ".gif')";
    fadeInElements(["lspiv-marker-click-container"], 350);
    offsetCenter(new google.maps.LatLng(event.feature.getProperty("Latitud"), event.feature.getProperty("Longitud")), 12);

}

function waterLevelsMarkerClickCallback(event) {

    offsetCenter(new google.maps.LatLng(event.feature.getProperty("x"), event.feature.getProperty("y")), 12);
    fadeInElements(["water-level-card-container"], 350);
    document.getElementById("water-level-card-location").innerHTML = event.feature.getProperty("Estaciones");
    document.getElementById("dropdownMenuButtonWaterlevel").innerHTML = event.feature.getProperty("Estaciones");
    document.getElementById("water-level-card-image").src = "img/Water-levels/" + event.feature.getProperty("Estaciones") + ".png";

    previous_water_level_marker_coordinates.lat = event.feature.getProperty("x");
    previous_water_level_marker_coordinates.lng = event.feature.getProperty("y");

    document.getElementById("water-level-card-image").addEventListener("click", function () {
        showZoomImage(document.getElementById("water-level-card-image").src);
    });

}

function sedimentsMarkerClickCallback(event) {

    sediment_feature_UHS_property_selected = event.feature.getProperty("UHS");
    document.getElementById("sediments-card-size-button").src = "img/side-bar-icon/sediment_size_button_enabled_icon.png";
    document.getElementById("sediments-card-concentration-button").src = "img/side-bar-icon/sediment_concentration_button_icon.png";
    sediment_button_type_selected = "size";

    offsetCenter(new google.maps.LatLng(event.feature.getProperty("X"), event.feature.getProperty("Y")), 12);
    fadeInElements(["sediments-card-container"], 350);
    // document.getElementById("dropdownMenuButtonWaterlevel").innerHTML = event.feature.getProperty("Estaciones");
    // document.getElementById("sediments-card-image").src = "img/Sediments/Huallaga" + event.feature.getProperty("Name") + ".png";
    document.getElementById("sediments-card-image").src = "img/Sediments/Huallaga/" + event.feature.getProperty("UHS")+ "_" + sediment_button_type_selected + ".png";
    document.getElementById("sediments-card-image").addEventListener("click", function () {
        showZoomImage(document.getElementById("sediments-card-image").src);
    });

}

function addInteractiveSinglePolygonToMap(JSON_path, river_data_layer, polygonProperty, clickCallback, mouseoverCallback, mouseoutCallback, completionCallback) {

    $.getJSON(JSON_path, function (json) {

        river_data_layer.addGeoJson(json);

        river_data_layer.setStyle(function(feature) {

            if(polygonProperty.localeCompare("migration") === 0){
                if(feature.getProperty("tipo").localeCompare("migration") === 0) return {strokeColor: colorMapMigration(feature.getProperty("migration")/1000), strokeOpacity: 1.0, strokeWeight: 3.0};
                if(feature.getProperty("tipo").localeCompare("centerline 1987") === 0) return {strokeColor: migration_older_year, strokeOpacity: 1.0, strokeWeight: 3.0};
                if(feature.getProperty("tipo").localeCompare("centerline 1989") === 0) return {strokeColor: migration_recent_year, strokeOpacity: 1.0, strokeWeight: 3.0};
                if(feature.getProperty("tipo").localeCompare("change of channel") === 0) return {strokeColor: migration_channel_change, strokeOpacity: 1.0, strokeWeight: 3.0};
                if(feature.getProperty("tipo").localeCompare("cutoff") === 0) return {strokeColor: migration_cut_off, strokeOpacity: 1.0, strokeWeight: 3.0};
            }
            if(polygonProperty.localeCompare("dunes_sections") === 0) return {strokeColor: "#000000", strokeOpacity: 0.8, fillColor: dunes_sections_color, fillOpacity: 0.9, strokeWeight: 1.0};
            if(polygonProperty.localeCompare("dunes_lines") === 0) return {strokeColor: dunes_lines_color, strokeOpacity: 1.0, strokeWeight: 2.0};
            if(polygonProperty.localeCompare("bedload") === 0) return {strokeColor: "#000000", strokeOpacity: 0.8, fillColor: bedload_sections_color, fillOpacity: 0.9, strokeWeight: 1.0};
            if(polygonProperty.localeCompare("av_width") === 0) return {strokeColor: "#000000", strokeOpacity: 1.0, fillColor: colorMapWidth(feature.getProperty(polygonProperty)/1000), fillOpacity: 1.0, strokeWeight: 2.0};
            if(polygonProperty.localeCompare("sinuosity") === 0) return {strokeColor: "#000000", strokeOpacity: 1.0, fillColor: colorMapSinuosity(feature.getProperty(polygonProperty)), fillOpacity: 1.0, strokeWeight: 2.0};
            if(polygonProperty.localeCompare("arcwavelen") === 0) return {strokeColor: "#000000", strokeOpacity: 1.0, fillColor: colorMapWavelength(feature.getProperty(polygonProperty)/1000), fillOpacity: 1.0, strokeWeight: 2.0};
            if(polygonProperty.localeCompare("disabled") === 0) return {strokeColor: "#000000", strokeOpacity: 0.2, fillColor: "#555555", fillOpacity: 0.8, strokeWeight: 2.0};
            if(polygonProperty.localeCompare("limits") === 0) return {strokeColor: "#000000", strokeOpacity: 0.2, fillColor: "#000000", fillOpacity: 0.2, strokeWeight: 0.5};
            if(polygonProperty.localeCompare("communities") === 0) return {strokeColor: "#000000", strokeOpacity: 0.5, fillColor: "#0000FF", fillOpacity: 0.5, strokeWeight: 2.0};
            if(polygonProperty.localeCompare("malos_pasos") === 0) return {icon: "img/marker-icons/rojo.png", title: feature.getProperty("NOMBRE")};
            if(polygonProperty.localeCompare("malos_pasos_lineas") === 0) return {strokeColor: "#000000", strokeOpacity: 1.0, strokeWeight: 3.0};
            if(polygonProperty.localeCompare("rivers_valley") === 0) return {strokeColor: "#000000", strokeOpacity: 1.0, fillColor: "#00FF00", fillOpacity: 0.9, strokeWeight: 1.0}
        });

        river_data_layer.addListener("click", function (event) {
            if(clickCallback !== null) clickCallback(event);
        });

        river_data_layer.addListener("mouseover", function (event) {
            if(mouseoverCallback !== null) mouseoverCallback(event, river_data_layer);
        });

        river_data_layer.addListener("mouseout", function (event) {
            if(mouseoutCallback !== null) mouseoutCallback(event, river_data_layer);
        })

    }).done(function () {
        if(completionCallback !== null) completionCallback();
    });

}

function removeLoader(){

    fadeInElements(["main-wrapper"], 1000);
    fadeOutElements(["loading"], 100);

}

function setDroneFlightCards() {

    hideElements(["drone-flights-card-container", "card-1-row-1", "card-2-row-1", "card-3-row-1", "card-1-row-2", "card-2-row-2", "card-3-row-2", "card-1-row-3", "card-2-row-3", "card-3-row-3", "card-1-row-4", "card-2-row-4", "card-3-row-4", "card-1-row-5", "card-2-row-5", "card-3-row-5"]);
    document.getElementById("drone_menu_button_option_id").addEventListener("click", function ()    {

        // $("#drone-flights-card-container").fadeIn(200, function () {
        //     fadeInElements(["card-1-row-1", "card-2-row-1", "card-3-row-1", "card-1-row-2", "card-2-row-2", "card-3-row-2", "card-1-row-3", "card-2-row-3", "card-3-row-3", "card-1-row-4", "card-2-row-4", "card-3-row-4", "card-1-row-5", "card-2-row-5", "card-3-row-5"], 400);
        // });

    });

}

function addDroneMarker() {

    for (var i = 0; i < drone_flights_JSON.length; i++){

        var json = drone_flights_JSON[i];

        var marker = new google.maps.Marker({
            position: {lat: drone_flights_JSON[i].latitude, lng: drone_flights_JSON[i].longitude},
            map: map,
            icon: "img/side-bar-icon/drone_marker_icon.png",
        });

        droneFlightsMarkersArray.push(marker);
        droneFlightsMarkersPositionsArray.push(marker.getPosition());

        (function (marker, i, json, previous_drone_marker_coordinates) {

            google.maps.event.addListener(marker, 'click', function (e) {

                offsetCenter(marker.getPosition(), 10);
                document.getElementById("drone-flights-marker-click-container").addEventListener("click", function () {
                    document.getElementById("droneVideoOverlay").style.visibility = "visible";
                });
                document.getElementById("card-1-marker-row-1-title").innerHTML = json.title;
                document.getElementById("card-1-marker-row-1-location").innerHTML = json.location;
                document.getElementById("card-1-row-1-video").src = "videos/drone_flights/" + json.code;
                document.getElementById("drone-video-source").src = "videos/drone_flights/" + json.code;

                setTimeout(function () {
                    fadeInElements(["drone-flights-marker-click-container"], 350);
                }, 1000);

            });

        })(marker, i, json, previous_drone_marker_coordinates);

    }

    var coordsArray = coordinatesArrayCenter(droneFlightsMarkersPositionsArray);
    map.setZoom(7);
    map.panTo(new google.maps.LatLng(coordsArray.centerX, coordsArray.centerY));

}

function showZoomImage(imagePath){

    document.getElementById("imageZoom").src = imagePath;
    $("#imageZoomOverlay").fadeIn(350, function () {});

}

function setUHDDropdownsListeners() {

    $('#dropdownMenuButtonTop + [aria-labelledby="dropdownMenuButtonTop"] button').on('click', function (e) {

        e.preventDefault();
        var ele = this;
        UHDMarkerIndexTop = parseInt(ele.name) + 1;
        //document.getElementById("dropdownMenuButtonTop").setAttribute("data-i18n", 'dropdown-UHD-section-item');
        document.getElementById("dropdownMenuButtonTop").innerHTML = $.i18n('dropdown-UHD-section-item', (parseInt(ele.name) + 1).toString());

        UHDHuallagaMarkers.forEach(function (marker) {

            if(UHDHuallagaMarkers.indexOf(marker) + 1 !== UHDMarkerIndexTop && UHDHuallagaMarkers.indexOf(marker) + 1 !== UHDMarkerIndexBottom) marker.setIcon("img/marker-icons/blanco.png");
            if(UHDHuallagaMarkers.indexOf(marker) + 1 === UHDMarkerIndexTop) marker.setIcon("img/marker-icons/rojo.png");
            if(UHDHuallagaMarkers.indexOf(marker) + 1 === UHDMarkerIndexBottom) marker.setIcon("img/marker-icons/azul.png");

        });

        UHDHuallagaMarkers[parseInt(ele.name)].setIcon("img/marker-icons/rojo.png");
        offsetCenter(UHDHuallagaMarkersPositions[parseInt(ele.name) - 1], 10);
        geocodeLatLng(UHDHuallagaMarkersPositions[parseInt(ele.name) - 1], "top");
        document.getElementById("UHD-top-card-image").src = "img/cross_sections_images/huallaga/Section " + ele.name +".png";

    });

    $('#dropdownMenuButtonBottom + [aria-labelledby="dropdownMenuButtonBottom"] button').on('click', function (e) {

        e.preventDefault();
        var ele = this;
        document.getElementById("dropdownMenuButtonBottom").innerHTML = ele.textContent;
        UHDMarkerIndexBottom = parseInt(ele.name);

        UHDHuallagaMarkers.forEach(function (marker) {

            if(UHDHuallagaMarkers.indexOf(marker) + 1 !== UHDMarkerIndexTop && UHDHuallagaMarkers.indexOf(marker) + 1 !== UHDMarkerIndexBottom) marker.setIcon("img/marker-icons/blanco.png");
            if(UHDHuallagaMarkers.indexOf(marker) + 1 === UHDMarkerIndexTop) marker.setIcon("img/marker-icons/rojo.png");
            if(UHDHuallagaMarkers.indexOf(marker) + 1 === UHDMarkerIndexBottom) marker.setIcon("img/marker-icons/azul.png");

        });

        UHDHuallagaMarkers[parseInt(ele.name) - 1].setIcon("img/marker-icons/azul.png");
        offsetCenter(UHDHuallagaMarkersPositions[parseInt(ele.name) - 1], 10);
        geocodeLatLng(UHDHuallagaMarkersPositions[parseInt(ele.name) - 1], "bottom");
        document.getElementById("UHD-bottom-card-image").src = "img/cross_sections_images/huallaga/Section " + ele.name +".png";

    });

}

function setDunesDropdownListener() {

    $('#dropdownMenuDunesLines + [aria-labelledby="dropdownMenuDunesLines"] button').on('click', function (e) {

        e.preventDefault();
        var ele = this;

        dunes_lines_huallaga_campaign_1_data_layer.forEach(function (feature) {

            if(feature.getProperty("Name").localeCompare(ele.name) === 0 && feature.getProperty("layer").localeCompare("UHG" + dunes_section_selected_index) === 0) {
                document.getElementById("dunes-top-card-title").innerHTML = "Day 1: " + feature.getProperty("dayOne");
                document.getElementById("dunes-bottom-card-title").innerHTML = "Day 2: " + feature.getProperty("dayTwo");
                dunes_lines_huallaga_campaign_1_data_layer.overrideStyle(feature, {strokeColor: dunes_lines_color, strokeOpacity: 1.0, strokeWeight: 3.0});
            }else{
                dunes_lines_huallaga_campaign_1_data_layer.overrideStyle(feature, {strokeColor: "#000000", strokeOpacity: 1.0, strokeWeight: 1.0});
            }

        });

        document.getElementById("dropdownMenuDunesLines").innerHTML = "Line " + this.name;
        document.getElementById("dunes-top-card-image").src = "img/Dunes/Huallaga/UHG" + dunes_section_selected_index +"-" + this.name + ".png";
        // document.getElementById("dunes-bottom-card-image").src = "img/Dunes/Huallaga/UHG" + dunes_section_selected_index +"-" + this.name + ".png";

    });

}

function toggleIconAndTextEnabled(submenuOptionButtonId, menuIndex) {


    data_submenu_options[menuIndex].options.forEach(function (option) {

        if(option.submenu_option_button_id.localeCompare(submenuOptionButtonId) !== 0){
            document.getElementById(option.submenu_option_title_id).style.color = option.river_availability[activeRiverIndex] ? "#FFFFFF" : "#323232";
            document.getElementById(option.submenu_option_image_id).src = option.river_availability[activeRiverIndex] ? option.submenu_option_image_ref : option.submenu_option_image_blocked_ref;
            data_submenu_options[menuIndex].options[data_submenu_options[menuIndex].options.indexOf(option)].submenu_option_enabled_state  = false;
        }else{
            document.getElementById(option.submenu_option_title_id).style.color = "#00BFDF";
            document.getElementById(option.submenu_option_image_id).src = option.submenu_option_image_enabled_ref;
            data_submenu_options[menuIndex].options[data_submenu_options[menuIndex].options.indexOf(option)].submenu_option_enabled_state = !data_submenu_options[menuIndex].options[data_submenu_options[menuIndex].options.indexOf(option)].submenu_option_enabled_state;
        }

    })

}

function toggleBackgroundDataIconAndTextEnabled(submenuOptionButtonId, menuIndex) {

    background_data_submenu_options[menuIndex].options.forEach(function (option) {

        if(option.submenu_option_button_id.localeCompare(submenuOptionButtonId) !== 0){
            document.getElementById(option.submenu_option_title_id).style.color = option.river_availability[activeRiverIndex] ? "#FFFFFF" : "#323232";
            document.getElementById(option.submenu_option_image_id).src = option.river_availability[activeRiverIndex] ? option.submenu_option_image_ref : option.submenu_option_image_blocked_ref;
            background_data_submenu_options[menuIndex].options[background_data_submenu_options[menuIndex].options.indexOf(option)].submenu_option_enabled_state  = false;
        }else{
            document.getElementById(option.submenu_option_title_id).style.color = "#00BFDF";
            document.getElementById(option.submenu_option_image_id).src = option.submenu_option_image_enabled_ref;
            background_data_submenu_options[menuIndex].options[background_data_submenu_options[menuIndex].options.indexOf(option)].submenu_option_enabled_state = !background_data_submenu_options[menuIndex].options[background_data_submenu_options[menuIndex].options.indexOf(option)].submenu_option_enabled_state;
        }

    })

}

function clearSubmenuEnabledStatus(menuIndex) {

    data_submenu_options[menuIndex].options.forEach(function (option) {

        document.getElementById(option.submenu_option_title_id).style.color = option.available ? "#FFFFFF" : "#323232";
        document.getElementById(option.submenu_option_image_id).src = option.submenu_option_image_ref;
        data_submenu_options[menuIndex].options[data_submenu_options[menuIndex].options.indexOf(option)].submenu_option_enabled_state  = false;

    })

}

function clearBackgroundDataSubmenuEnabledStatus(menuIndex) {

    background_data_submenu_options[menuIndex].options.forEach(function (option) {

        document.getElementById(option.submenu_option_title_id).style.color = option.available ? "#FFFFFF" : "#323232";
        document.getElementById(option.submenu_option_image_id).src = option.submenu_option_image_ref;
        background_data_submenu_options[menuIndex].options[background_data_submenu_options[menuIndex].options.indexOf(option)].submenu_option_enabled_state  = false;

    })

}

function reloadMenuOptionsAvailabilityForRiver(menuIndex, riverIndex) {

    data_submenu_options[menuIndex].options.forEach(function (option) {

        document.getElementById(option.submenu_option_title_id).style.color = option.river_availability[riverIndex] ? "#FFFFFF" : "#323232";
        document.getElementById(option.submenu_option_image_id).src = option.river_availability[riverIndex] ? option.submenu_option_image_ref : option.submenu_option_image_blocked_ref;
        if(option.river_availability[riverIndex]) document.getElementById(option.submenu_option_button_id).addEventListener("click", option.submenu_option_button_click_function);
        if(!option.river_availability[riverIndex]) document.getElementById(option.submenu_option_button_id).removeEventListener("click", option.submenu_option_button_click_function);

    })

}

function clearRiverErosionDepositionLayers() {

    var currentRiverLayers = [0, 2];

    // if(activeRiverIndex === 0 || activeRiverIndex === 2){
    //
    //     rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer.forEach(function (layer) {
    //         rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer[rivers_erosion_deposition_JSON[activeRiverIndex].river_data_NC_layer.indexOf(layer)].setMap(null);
    //     });
    //     rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer.forEach(function (layer) {
    //         rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer[rivers_erosion_deposition_JSON[activeRiverIndex].river_data_E_layer.indexOf(layer)].setMap(null);
    //     });
    //     rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer.forEach(function (layer) {
    //         rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer[rivers_erosion_deposition_JSON[activeRiverIndex].river_data_D_layer.indexOf(layer)].setMap(null);
    //     });
    //
    // }

    for (var i = 0; i < currentRiverLayers.length; i++){

        var riverLayerIndex = currentRiverLayers[i];

        rivers_erosion_deposition_JSON[riverLayerIndex].river_data_NC_layer.forEach(function (layer) {
            rivers_erosion_deposition_JSON[riverLayerIndex].river_data_NC_layer[rivers_erosion_deposition_JSON[riverLayerIndex].river_data_NC_layer.indexOf(layer)].setMap(null);
        });
        rivers_erosion_deposition_JSON[riverLayerIndex].river_data_E_layer.forEach(function (layer) {
            rivers_erosion_deposition_JSON[riverLayerIndex].river_data_E_layer[rivers_erosion_deposition_JSON[riverLayerIndex].river_data_E_layer.indexOf(layer)].setMap(null);
        });
        rivers_erosion_deposition_JSON[riverLayerIndex].river_data_D_layer.forEach(function (layer) {
            rivers_erosion_deposition_JSON[riverLayerIndex].river_data_D_layer[rivers_erosion_deposition_JSON[riverLayerIndex].river_data_D_layer.indexOf(layer)].setMap(null);
        });

    }

}

function loadJSONData(JSON_path, river_data_layer, strokeColor, strokeOpacity, strokeWeight, fillColor, fillOpacity, doneFunction) {

        $.getJSON(JSON_path, function (json) {

            river_data_layer.addGeoJson(json);
            river_data_layer.setStyle(function(feature) {
                return {
                    strokeColor: strokeColor,
                    strokeOpacity: strokeOpacity,
                    strokeWeight: strokeWeight,
                    fillColor: fillColor,
                    fillOpacity: fillOpacity
                }
            });

        }).done(function () {
            if(doneFunction != null) doneFunction();
        })

}

function addButtonOptionsUHDDropdown(optionsLength, dropdownButtonContainerID) {

    var dropdown_button_option_template = document.getElementsByTagName("template")[14];

    for (var i = 0; i < optionsLength; i++){
        var dropdown_button_option_template_content = document.importNode(dropdown_button_option_template.content,true);
        dropdown_button_option_template_content.querySelectorAll(".dropdown-item")[0].name = i.toString();
        // dropdown_button_option_template_content.querySelectorAll(".dropdown-item")[0].setAttribute("data-i18n", "dropdown-UHD-section-item" + "-" + (i+1).toString());
        dropdown_button_option_template_content.querySelectorAll(".dropdown-item")[0].setAttribute("data-i18n", "dropdown-UHD-section-item");
        dropdown_button_option_template_content.querySelectorAll(".dropdown-item")[0].innerHTML = $.i18n('dropdown-UHD-section-item', (i+1).toString());
        document.getElementById(dropdownButtonContainerID).appendChild(dropdown_button_option_template_content);
    }

}
//</editor-fold>
