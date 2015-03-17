module objects {

    export class Treasure extends createjs.Bitmap {

        //PUBLIC VARIABLES
        public width;
        public height;

        //PRIVATE VARIABLES
        private _dx = 5;


        //CONSTRUCTOR --------------------------------------------------------------------------------------------------

        constructor() {
            super(assetLoader.getResult("treasure"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._reset();
        }

        //PUBLIC METHODS -----------------------------------------------------------------------------------------------

        public update() {
            this.x -= this._dx;

            this._checkBounds();
        }


        //PRIVATE METHODS
        private _reset() {
            //Set treasure to start at random y, outside of canvas
            this.y = Math.floor(Math.random() * 450) + this.height;
            this.x = 800 + this.width;
        }

        private _checkBounds() {
            if ((this.x + this.width) < 0) {
                this._reset();
            }
        }
    }
}  