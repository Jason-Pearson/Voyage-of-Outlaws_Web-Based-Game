﻿/*
    File:               config.ts
    Author:             Khandker Hussain
    Date Modified:      12/19/2015
    Description:        Cobfig (TypeScript)
    Revision History:   IDK...
*/
module config
{
    // State Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
<<<<<<< Updated upstream
    export var PLAY_STATE02: number = 2;
    export var OVER_STATE: number = 3;
    export var WIN_STATE: number = 4;
=======
    export var LEVEL_2: number = 2;
    export var LEVEL_3: number = 3;
    export var OVER_STATE: number = 4;
    export var WIN_STATE: number = 5;
>>>>>>> Stashed changes

    // Font Constants
    export var FONT_FAMILY_DIANE: string = "DianeDeFrance";
    export var FONT_FAMILY_DOCK: string = "Dock51";
    export var FONT_FAMILY_256Bytes: string = "256_bytesregular";

    export var FONT_FAMILY_1: string = "minisystemregular";
    export var FONT_FAMILY_2: string = "failed_attemptregular";
    export var FONT_FAMILY_3: string = "v_dubregular";
    export var FONT_FAMILY_4: string = "256_bytesregular";
    export var FONT_FAMILY_5: string = "astron_boyvideo";
    export var FONT_FAMILY_6: string = "astron_boywonder";
    export var FONT_FAMILY_7: string = "astron_boyregular";
    export var FONT_FAMILY_8: string = "borg_9regular";
    export var FONT_FAMILY_9: string = "boronregular";
    export var FONT_FAMILY_10: string = "dignity_of_labourregular";

    export var FONT_COLOR_RED: string = "#FF2B46"; //red - over state
    export var FONT_COLOR_YELLOW1: string = "#FFCB35"; // yellow - menu state
    export var FONT_COLOR_YELLOW2: string = "#FFFF00"; //yellow - game state
    export var FONT_COLOR_GREEN: string = "#2BFF7A"; // green - win state
}