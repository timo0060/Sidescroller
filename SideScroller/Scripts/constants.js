var constants;
(function (constants) {
    //FONT VARIABLES ------------------------------------------------------------------------------
    constants.FONT_SIZE = "40px";
    constants.FONT_FAMILY = "Consolas";
    constants.FONT_COLOUR = "#CAD108";
    //SCREEN VARIABLES -----------------------------------------------------------------------------
    constants.SCREEN_WIDTH = 800;
    constants.SCREEN_HEIGHT = 600;
    constants.SCREEN_CENTER_WIDTH = constants.SCREEN_WIDTH * 0.5;
    constants.SCREEN_CENTER_HEIGHT = constants.SCREEN_HEIGHT * 0.5;
    constants.TREE_LINE = 450;
    //GAME VARIABLES ---------------------------------------------------------------------------------
    constants.PLAYER_LIVES = 5;
    constants.ENEMY_NUM = 3;
    //STATE VARIABLES -------------------------------------------------------------------------------
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map