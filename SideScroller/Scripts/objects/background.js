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
        //CONSTRUCTOR
        function Background() {
            _super.call(this);
            //Private Variables
            this._dx = 5;
            this.backgroundOne = new createjs.Bitmap("assets/images/background-first.png");
            this.backgroundTwo = new createjs.Bitmap("assets/images/background-second.png");
            this.backOneWidth = this.backgroundOne.getBounds().width;
            this.backTwoWidth = this.backgroundTwo.getBounds().width;
            this.backOneX = 0;
            this.backTwoX = this.backOneWidth;
            this.backgroundOne.y = 0;
            this.backgroundTwo.y = 0;
            this.backgroundOne.x = this.backOneX;
            this.backgroundTwo.x = this.backTwoX;
        }
        Background.prototype.update = function () {
            this.backOneX -= this._dx;
            this.backTwoX -= this._dx;
            this.backgroundOne.x = this.backOneX;
            this.backgroundTwo.x = this.backTwoX;
            this._checkbounds();
        };
        Background.prototype._checkbounds = function () {
            if ((this.backOneX + this.backOneWidth) < 0) {
                this.backOneX = this.backTwoX + this.backTwoWidth;
            }
            if ((this.backTwoX + this.backTwoWidth) < 0) {
                this.backTwoX = this.backOneX + this.backOneWidth;
            }
        };
        return Background;
    })(createjs.Container);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map