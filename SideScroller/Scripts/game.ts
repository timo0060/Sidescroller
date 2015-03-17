//global variables
var canvas;
var stage: createjs.Stage;

var assetLoader: createjs.LoadQueue;
//Define the manifest with all the game assets
var manifest = [
    { id: "helicopter", src: "assets/images/helicopter.png" },
    { id: "backgroundfirst", src: "assets/images/background-first.png" },
    { id: "backgroundsecond", src: "assets/images/background-second.png"}
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
    stage.update();
}

function main() {
    console.log("Game starting....");
}