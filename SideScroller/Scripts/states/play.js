/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/treasure.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    //PLAY STATE ----------------------------------------------------------------------------------
    var Play = (function () {
        //CONSTRUCTOR ------------------------------------------------------------------------------
        function Play() {
            this.enemies = [];
            this.game = new createjs.Container();
            this.background = new objects.Background();
            this.game.addChild(this.background);
            this.treasure = new objects.Treasure();
            this.game.addChild(this.treasure);
            for (var enemy = constants.ENEMY_NUM; enemy > 0; enemy--) {
                this.enemies[enemy] = new objects.Enemy();
                this.game.addChild(this.enemies[enemy]);
            }
            this.helicopter = new objects.Player();
            this.game.addChild(this.helicopter);
            createjs.Sound.play(this.helicopter.soundString, { loop: -1 });
            this.scoreboard = new objects.Scoreboard(this.game);
            stage.addChild(this.game);
        } //End of Constructor
        //PUBLIC METHODS ---------------------------------------------------------------------------
        //Calculates the distance between two points
        Play.prototype.getDistance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        //Check collision method
        Play.prototype.checkCollision = function (collider) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.helicopter.x;
            p1.y = this.helicopter.y;
            p2.x = collider.x;
            p2.y = collider.y;
            if (this.getDistance(p1, p2) < ((this.helicopter.height * 0.5) + (collider.height * 0.5))) {
                if (!collider.isColliding) {
                    console.log("Collision");
                    collider.isColliding = true;
                    createjs.Sound.play(collider.soundString);
                    switch (collider.name) {
                        case "treasure":
                            this.scoreboard.score += 100;
                            break;
                        case "enemy":
                            this.scoreboard.lives -= 1;
                            break;
                    }
                }
            }
            else {
                collider.isColliding = false;
            }
        }; //Check Collision End
        Play.prototype.update = function () {
            this.background.update();
            this.helicopter.update();
            this.treasure.update();
            if (this.scoreboard.lives > 0) {
                for (var enemy = constants.ENEMY_NUM; enemy > 0; enemy--) {
                    this.enemies[enemy].update();
                    this.checkCollision(this.enemies[enemy]);
                }
                this.checkCollision(this.treasure);
            }
            this.scoreboard.update();
            if (this.scoreboard.lives < 1) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeAllChildren();
                finalScore = this.scoreboard.score;
                if (finalScore > highScore) {
                    highScore = finalScore;
                }
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
        }; //End of Update Function
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map