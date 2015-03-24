var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Background = (function (_super) {
        __extends(Background, _super);
        //CONSTRUCTOR --------------------------------------------------------------------------------------------------
        function Background() {
            _super.call(this, assetLoader.getResult("background"));
            this._dx = 5;
            this._reset();
        }
        //PUBLIC METHODS -----------------------------------------------------------------------------------------------
        Background.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        Background.prototype._reset = function () {
            this.y = 0;
            this.x = 0;
        };
        Background.prototype._checkBounds = function () {
            if (this.x <= -4000) {
                this._reset();
            }
        };
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map