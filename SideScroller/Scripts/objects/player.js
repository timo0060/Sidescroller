var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        //CONSTRUCTOR --------------------------------------------------------------------------------------------------
        function Player() {
            _super.call(this, "helicopter");
            this.name = "player";
            this.x = 95;
            //Play sound here for the engine
            this.soundString = "helicopterSound";
        }
        //PUBLIC METHODS -----------------------------------------------------------------------------------------------
        Player.prototype.update = function () {
            this.y = stage.mouseY;
            this.x = stage.mouseX;
            this._checkBounds();
        };
        //PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (stage.mouseY > constants.TREE_LINE) {
                this.y = 450;
            }
            if ((this.y - (this.height * 0.5)) < 5) {
                this.y = 5 + (this.height * 0.5);
            }
            if (stage.mouseX > 725) {
                this.x = 725;
            }
            if ((this.x - (this.width * 0.5)) < 5) {
                this.x = 5 + (this.width * 0.5);
            }
        };
        return Player;
    })(objects.GameObject);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map