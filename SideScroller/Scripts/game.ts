/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />


/// <reference path="objects/treasure.ts" />
/// <reference path="objects/player.ts" />


//global variables
var canvas;
var stage: createjs.Stage;

//Game Objects
var helicopter: objects.Player;
var treasure: objects.Treasure;

var assetLoader: createjs.LoadQueue;
//Define the manifest with all the game assets
var manifest = [
    { id: "helicopter", src: "assets/images/helicopter.png" },
    { id: "backgroundfirst", src: "assets/images/background-first.png" },
    { id: "backgroundsecond", src: "assets/images/background-second.png" },
    { id: "treasure", src: "assets/images/treasure.png"}
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

    main();
}

function gameLoop() {
    helicopter.update();
    treasure.update();
    stage.update();
}

function main() {
    
    treasure = new objects.Treasure();
    stage.addChild(treasure);

    helicopter = new objects.Player();
    stage.addChild(helicopter);

}