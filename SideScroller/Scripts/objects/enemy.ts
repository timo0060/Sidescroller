module objects {

    export class Enemy extends objects.GameObject {



        //CONSTRUCTOR --------------------------------------------------------------------------------------------------

        constructor() {
            super("enemy");
            this.name = "enemy";
            //Add sound here---- See treasure for example
            this.soundString = "explosion";


            this._reset();
        }

        //PUBLIC METHODS -----------------------------------------------------------------------------------------------

        public update() {
            this.x -= this._dx;
            this.y -= this._dy;

            this._checkBounds();
        }


        
        private _reset() {
            //Set treasure to start at random y, outside of canvas
            this.y = Math.floor(Math.random() * constants.TREE_LINE) + (this.height * 0.5);
            this.x = Math.floor(Math.random() * 1000) + (constants.SCREEN_WIDTH + this.width);

            this._dx = Math.floor((Math.random() * 5) + 10);
            this._dy = Math.floor((Math.random() * 5)  - 2);
        }

        //Checks to see if the enemy is within the stage
        private _checkBounds() {
            if ((this.x + this.width) < 0 || (this.y + this.height) < 0) {
                this._reset();
            }

            if (this.y > constants.TREE_LINE){
                this._dy = 0;
            }
        }
    }
}    