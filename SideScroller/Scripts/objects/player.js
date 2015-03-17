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
            _super.call(this, assetLoader.getResult("helicopter"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = 95;
        }
        //PUBLIC METHODS -----------------------------------------------------------------------------------------------
        Player.prototype.update = function () {
            this.y = stage.mouseY;
            this._checkBounds();
        };
        //PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (stage.mouseY > 450) {
                this.y = 450;
            }
            if ((this.y - (this.height * 0.5)) < 5) {
                this.y = 5 + (this.height * 0.5);
            }
        };
        return Player;
    })(createjs.Bitmap);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map