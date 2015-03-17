module objects {

    export class Player extends createjs.Bitmap{

        //Public Variables
        public width;
        public height;


        //CONSTRUCTOR --------------------------------------------------------------------------------------------------

        constructor() {
            super(assetLoader.getResult("helicopter"));
            
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
                      
            this.x = 95;

        }

        //PUBLIC METHODS -----------------------------------------------------------------------------------------------

        public update() {
            this.y = stage.mouseY;
            
            this._checkBounds();
        }



        //PRIVATE METHODS
        private _checkBounds() {
            if (stage.mouseY > 450) {
                this.y = 450;
            }

            if ((this.y - (this.height * 0.5)) < 5) {
                this.y = 5 + (this.height * 0.5);
            }
        }
    }
} 