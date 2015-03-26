/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />


/// <reference path="states/gameover.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />


//global variables
var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;

//State Variables
var currentState: number;
var currentStateFunction: any;
var stateChanged: boolean = false;
var theme: string;

//Game States
var gameover: states.GameOver;
var play: states.Play;
var menu: states.Menu;


//Score Variables
var finalScore: number = 0;
var highScore: number = 0;

//Look at the slot machine Button object to put background the way I want (getImage)

var assetLoader: createjs.LoadQueue;
//Define the manifest with all the game assets
var manifest = [
    { id: "helicopter", src: "assets/images/helicopter.png" },
    { id: "backgroundfirst", src: "assets/images/background-first.png" },
    { id: "backgroundsecond", src: "assets/images/background-second.png" },
    { id: "treasure", src: "assets/images/treasure.png" },
    { id: "enemy", src: "assets/images/enemy.png" },
    { id: "background", src: "assets/images/background.png" },
    { id: "resetButton", src: "assets/images/resetButton.png" },
    { id: "startButton", src: "assets/images/startButton.png"},
    { id: "explosion", src: "assets/audio/explosion.mp3" },
    { id: "helicopterSound", src: "assets/audio/helicopter.mp3" },
    { id: "pickupTreasure", src: "assets/audio/pickup.wav" },
    { id: "theme", src: "assets/audio/theme.ogg"}
];
//This function is used to preload all of the assets
function preload() {
    assetLoader = new createjs.LoadQueue(); //instantiate the assetLoader
    assetLoader.installPlugin(createjs.Sound);  //Install the sound plugin
    assetLoader.on("complete", init, this); //When it's done loading, run the init function
    assetLoader.loadManifest(manifest); //Load the manifest that's filled with the assets
}

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);

    setStats();

    currentState = constants.MENU_STATE;

    changeState(currentState);
}

function setStats() {
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}


function gameLoop() {

    stats.begin(); //Begin metering

    currentStateFunction.update();

    if (stateChanged) {
        changeState(currentState);
    }

    stage.update();

    stats.end(); // End metering
}



function changeState(state: number) {


    switch (state){
        case constants.MENU_STATE:
            stateChanged = false;
            menu = new states.Menu();
            currentStateFunction = menu;
            break;

        case constants.PLAY_STATE:
            stateChanged = false;
            //Instantiate play state
            play = new states.Play();
            currentStateFunction = play;
            break;

        case constants.GAME_OVER_STATE:
            stateChanged = false;
            //Instantiate Game Over state
            gameover = new states.GameOver();
            currentStateFunction = gameover;
            break;
    }
}