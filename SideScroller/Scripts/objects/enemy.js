var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        //CONSTRUCTOR --------------------------------------------------------------------------------------------------
        function Enemy() {
            _super.call(this, "enemy");
            this.name = "enemy";
            //Add sound here---- See treasure for example
            this.soundString = "explosion";
            this._reset();
        }
        //PUBLIC METHODS -----------------------------------------------------------------------------------------------
        Enemy.prototype.update = function () {
            this.x -= this._dx;
            this.y -= this._dy;
            this._checkBounds();
        };
        Enemy.prototype._reset = function () {
            //Set treasure to start at random y, outside of canvas
            this.y = Math.floor(Math.random() * constants.TREE_LINE) + (this.height * 0.5);
            this.x = Math.floor(Math.random() * 1000) + (constants.SCREEN_WIDTH + this.width);
            this._dx = Math.floor((Math.random() * 5) + 10);
            this._dy = Math.floor((Math.random() * 5) - 2);
        };
        //Checks to see if the enemy is within the stage
        Enemy.prototype._checkBounds = function () {
            if ((this.x + this.width) < 0 || (this.y + this.height) < 0) {
                this._reset();
            }
            if (this.y > constants.TREE_LINE) {
                this._dy = 0;
            }
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map