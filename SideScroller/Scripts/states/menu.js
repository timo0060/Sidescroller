/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
var states;
(function (states) {
    //GAMEOVER STATE ----------------------------------------------------------------------------------
    var Menu = (function () {
        //CONSTRUCTOR ------------------------------------------------------------------------------
        function Menu() {
            this.game = new createjs.Container();
            this.background = new objects.Background();
            this.game.addChild(this.background);
            var menuStartLabel = new objects.Label("Sky Treasure", constants.SCREEN_CENTER_WIDTH, (constants.SCREEN_CENTER_HEIGHT));
            menuStartLabel.font = "60px Consolas";
            menuStartLabel.regX = menuStartLabel.getMeasuredWidth() * 0.5;
            menuStartLabel.regY = menuStartLabel.getMeasuredWidth() * 0.5;
            this.game.addChild(menuStartLabel);
            this.startButton = new objects.Button("startButton", constants.SCREEN_CENTER_WIDTH, constants.SCREEN_CENTER_HEIGHT + 100);
            this.game.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClicked, this);
            var theme = assetLoader.getResult("theme");
            createjs.Sound.play("theme", { loop: -1 });
            stage.addChild(this.game);
        } //End of Constructor
        //PUBLIC METHODS ---------------------------------------------------------------------------
        Menu.prototype.startButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        };
        Menu.prototype.update = function () {
            this.background.update();
        }; //End of Update Function
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map