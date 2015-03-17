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
            _super.call(this, assetLoader.getResult("treasure"));
            //PRIVATE VARIABLES
            this._dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
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
            this.y = Math.floor(Math.random() * 450) + this.height;
            this.x = 800 + this.width;
        };
        Treasure.prototype._checkBounds = function () {
            if ((this.x + this.width) < 0) {
                this._reset();
            }
        };
        return Treasure;
    })(createjs.Bitmap);
    objects.Treasure = Treasure;
})(objects || (objects = {}));
//# sourceMappingURL=treasure.js.map