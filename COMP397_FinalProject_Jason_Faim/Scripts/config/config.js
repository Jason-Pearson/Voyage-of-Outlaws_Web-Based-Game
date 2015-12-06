var config;
(function (config) {
    // State Constants
    config.MENU_STATE = 0;
    config.PLAY_STATE = 1;
    config.OVER_STATE = 2;
    config.WIN_STATE = 3;
    // Font Constants
    config.FONT_FAMILY_DIANE = "DianeDeFrance";
    config.FONT_FAMILY_DOCK = "Dock51";
    config.FONT_COLOR_RED = "#FF2B46"; //red - over state
    config.FONT_COLOR_YELLOW1 = "#FFCB35"; // yellow - menu state
    config.FONT_COLOR_YELLOW2 = "#FFFF00"; //yellow - game state
    config.FONT_COLOR_GREEN = "#2BFF7A"; // green - win state
})(config || (config = {}));
//# sourceMappingURL=config.js.map