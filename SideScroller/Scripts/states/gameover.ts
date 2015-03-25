/// <reference path="../constants.ts" />

/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/background.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />


module states {
    //GAMEOVER STATE ----------------------------------------------------------------------------------
    export class GameOver {

        //INSTANCE VARIABLES ----------------------------------------------------------------------
        public game: createjs.Container;
        public background: objects.Background;


        //CONSTRUCTOR ------------------------------------------------------------------------------
        constructor() {
            this.game = new createjs.Container();

            this.background = new objects.Background();
            this.game.addChild(this.background);

            stage.addChild(this.game);
        }//End of Constructor

        //PUBLIC METHODS ---------------------------------------------------------------------------

        public update() {

            this.background.update();
            
        }//End of Update Function

    }

} 