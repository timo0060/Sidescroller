var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Treasure = (function (_super) {
        __extends(Treasure, _super);
        //CONSTRUCTOR --------------------------------------------------------------------------------------------------
        function Treasure() {
            _super.call(this, "treasure");
            this.name = "treasure";
            this._dx = 5;
            //Put sound here, Example (Declare audio in assetManager):
            this.soundString = "pickupTreasure";
            this._reset();
        }
        //PUBLIC METHODS -----------------------------------------------------------------------------------------------
        Treasure.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        //PRIVATE METHODS
        Treasure.prototype._reset = function () {
            //Set treasure to start at random y, outside of canvas
            this.y = Math.floor(Math.random() * constants.TREE_LINE) + (this.height * 0.5);
            this.x = constants.SCREEN_WIDTH + this.width;
        };
        Treasure.prototype._checkBounds = function () {
            if ((this.x + this.width) < 0) {
                this._reset();
            }
        };
        return Treasure;
    })(objects.GameObject);
    objects.Treasure = Treasure;
})(objects || (objects = {}));
//# sourceMappingURL=treasure.js.map