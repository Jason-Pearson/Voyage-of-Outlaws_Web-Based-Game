/*
    File:               config.ts
    Author:             Khandker Hussain
    Date Modified:      12/19/2015
    Description:        Cobfig (TypeScript)
    Revision History:   IDK...
*/
var config;
(function (config) {
    // State Constants
    config.MENU_STATE = 0;
    config.PLAY_STATE = 1;
<<<<<<< Updated upstream
    config.PLAY_STATE02 = 2;
    config.OVER_STATE = 3;
    config.WIN_STATE = 4;
=======
    config.LEVEL_2 = 2;
    config.LEVEL_3 = 3;
    config.OVER_STATE = 4;
    config.WIN_STATE = 5;
>>>>>>> Stashed changes
    // Font Constants
    config.FONT_FAMILY_DIANE = "DianeDeFrance";
    config.FONT_FAMILY_DOCK = "Dock51";
    config.FONT_FAMILY_256Bytes = "256_bytesregular";
    config.FONT_FAMILY_1 = "minisystemregular";
    config.FONT_FAMILY_2 = "failed_attemptregular";
    config.FONT_FAMILY_3 = "v_dubregular";
    config.FONT_FAMILY_4 = "256_bytesregular";
    config.FONT_FAMILY_5 = "astron_boyvideo";
    config.FONT_FAMILY_6 = "astron_boywonder";
    config.FONT_FAMILY_7 = "astron_boyregular";
    config.FONT_FAMILY_8 = "borg_9regular";
    config.FONT_FAMILY_9 = "boronregular";
    config.FONT_FAMILY_10 = "dignity_of_labourregular";
    config.FONT_COLOR_RED = "#FF2B46"; //red - over state
    config.FONT_COLOR_YELLOW1 = "#FFCB35"; // yellow - menu state
    config.FONT_COLOR_YELLOW2 = "#FFFF00"; //yellow - game state
    config.FONT_COLOR_GREEN = "#2BFF7A"; // green - win state
})(config || (config = {}));
