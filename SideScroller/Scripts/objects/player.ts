module objects {

    export class Player extends objects.GameObject {

        //CONSTRUCTOR --------------------------------------------------------------------------------------------------

        constructor() {
            super("helicopter");
            this.name = "player";

            this.x = 95;

            //Play sound here for the engine
            this.soundString = "helicopterSound";
        }

        //PUBLIC METHODS -----------------------------------------------------------------------------------------------

        public update() {
            this.y = stage.mouseY;
            this.x = stage.mouseX;

            this._checkBounds();
        }


        //PRIVATE METHODS
        private _checkBounds() {
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
        }
    }
} 