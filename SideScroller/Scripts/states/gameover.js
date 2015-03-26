/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
var states;
(function (states) {
    //GAMEOVER STATE ----------------------------------------------------------------------------------
    var GameOver = (function () {
        //CONSTRUCTOR ------------------------------------------------------------------------------
        function GameOver() {
            this.game = new createjs.Container();
            this.background = new objects.Background();
            this.game.addChild(this.background);
            var gameOverLabel = new objects.Label("GAME OVER", constants.SCREEN_CENTER_WIDTH, (constants.SCREEN_CENTER_HEIGHT - 100));
            gameOverLabel.font = "60px Consolas";
            gameOverLabel.regX = gameOverLabel.getMeasuredWidth() * 0.5;
            gameOverLabel.regY = gameOverLabel.getMeasuredWidth() * 0.5;
            this.game.addChild(gameOverLabel);
            var finalScoreLabel = new objects.Label("Final Score: " + finalScore, constants.SCREEN_CENTER_WIDTH, (constants.SCREEN_CENTER_HEIGHT - 100));
            this.game.addChild(finalScoreLabel);
            var highScoreLabel = new objects.Label("High Score: " + highScore, constants.SCREEN_CENTER_WIDTH, constants.SCREEN_CENTER_HEIGHT);
            this.game.addChild(highScoreLabel);
            this.resetButton = new objects.Button("resetButton", constants.SCREEN_CENTER_WIDTH, constants.SCREEN_CENTER_HEIGHT + 100);
            this.game.addChild(this.resetButton);
            this.resetButton.on("click", this.resetButtonClicked, this);
            stage.addChild(this.game);
        } //End of Constructor
        //PUBLIC METHODS ---------------------------------------------------------------------------
        GameOver.prototype.resetButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        };
        GameOver.prototype.update = function () {
            this.background.update();
        }; //End of Update Function
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map