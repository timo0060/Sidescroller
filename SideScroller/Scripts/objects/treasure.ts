module objects {

    export class Treasure extends objects.GameObject {


        //CONSTRUCTOR --------------------------------------------------------------------------------------------------

        constructor() {
            super("treasure");
            this.name = "treasure";
            this._dx = 5;



            //Put sound here, Example (Declare audio in assetManager):
            this.soundString="pickupTreasure";

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
            this.y = Math.floor(Math.random() * constants.TREE_LINE) + (this.height * 0.5);
            this.x = constants.SCREEN_WIDTH + this.width;
        }

        private _checkBounds() {
            if ((this.x + this.width) < 0) {
                this._reset();
            }
        }
    }
}   