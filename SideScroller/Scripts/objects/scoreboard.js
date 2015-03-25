var objects;
(function (objects) {
    //SCOREBOARD CLASS ---------------------------------------------------------------------------
    var Scoreboard = (function () {
        //CONSTRUCTOR ----------------------------------------------------------------------------
        function Scoreboard(game) {
            this.lives = constants.PLAYER_LIVES;
            this.score = 0;
            this._livesLabel = new createjs.Text("LIVES: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            this._livesLabel.x = 15;
            game.addChild(this._livesLabel);
            this._scoreLabel = new createjs.Text("SCORE: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            this._scoreLabel.x = 500;
            game.addChild(this._scoreLabel);
        }
        Scoreboard.prototype.update = function () {
            this._livesLabel.text = "LIVES: " + this.lives.toString();
            this._scoreLabel.text = "SCORE: " + this.score.toString();
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map