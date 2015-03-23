/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/treasure.ts" />
/// <reference path="objects/player.ts" />
//global variables
var stats = new Stats();
var canvas;
var stage;
var game;
var backgroundSpeed = 5;
//Game Objects
var helicopter;
var treasure;
var backgroundFirst;
var backgroundSecond;
var enemies = [];
var assetLoader;
//Define the manifest with all the game assets
var manifest = [
    { id: "helicopter", src: "assets/images/helicopter.png" },
    { id: "backgroundfirst", src: "assets/images/background-first.png" },
    { id: "backgroundsecond", src: "assets/images/background-second.png" },
    { id: "treasure", src: "assets/images/treasure.png" },
    { id: "enemy", src: "assets/images/enemy.png" }
];
//This function is used to preload all of the assets
function preload() {
    assetLoader = new createjs.LoadQueue(); //instantiate the assetLoader
    assetLoader.installPlugin(createjs.Sound); //Install the sound plugin
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
    main();
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
    updateBackground();
    helicopter.update();
    treasure.update();
    for (var enemy = 3; enemy > 0; enemy--) {
        enemies[enemy].update();
    }
    readdObjects();
    stage.update();
    stats.end(); // End metering
}
function updateBackground() {
    backgroundFirst.x -= backgroundSpeed;
    backgroundSecond.x -= backgroundSpeed;
    if ((backgroundFirst.x + backgroundFirst.getBounds().width) < 0) {
        backgroundFirst.x += 4800 + backgroundSecond.x;
        stage.removeChild(backgroundFirst);
        stage.addChild(backgroundFirst);
    }
    if ((backgroundSecond.x + backgroundSecond.getBounds().width) < 0) {
        backgroundSecond.x += 4800 + backgroundFirst.x;
        stage.addChild(backgroundFirst);
    }
}
function readdObjects() {
    stage.removeChild(treasure);
    stage.removeChild(helicopter);
    stage.addChild(treasure);
    for (var enemy = 3; enemy > 0; enemy--) {
        stage.removeChild(enemies[enemy]);
        stage.addChild(enemies[enemy]);
    }
    stage.addChild(helicopter);
}
function main() {
    game = new createjs.Container();
    backgroundFirst = new createjs.Bitmap("assets/images/background-first.png");
    backgroundSecond = new createjs.Bitmap("assets/images/background-second.png");
    backgroundFirst.y = 0;
    backgroundSecond.y = 0;
    backgroundFirst.x = 0;
    backgroundSecond.x = 2400;
    stage.addChild(backgroundFirst);
    stage.addChild(backgroundSecond);
    treasure = new objects.Treasure();
    stage.addChild(treasure);
    for (var enemy = 3; enemy > 0; enemy--) {
        enemies[enemy] = new objects.Enemy();
        stage.addChild(enemies[enemy]);
    }
    helicopter = new objects.Player();
    stage.addChild(helicopter);
}
//# sourceMappingURL=game.js.map