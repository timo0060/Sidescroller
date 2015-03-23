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
var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;
var game: createjs.Container;
var backgroundSpeed = 5;

//Game Objects
var helicopter: objects.Player;
var treasure: objects.Treasure;
var backgroundFirst: createjs.Bitmap;
var backgroundSecond: createjs.Bitmap;
var enemies: objects.Enemy[] = [];




var assetLoader: createjs.LoadQueue;
//Define the manifest with all the game assets
var manifest = [
    { id: "helicopter", src: "assets/images/helicopter.png" },
    { id: "backgroundfirst", src: "assets/images/background-first.png" },
    { id: "backgroundsecond", src: "assets/images/background-second.png" },
    { id: "treasure", src: "assets/images/treasure.png" },
    { id: "enemy", src: "assets/images/enemy.png"}
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

    main();
}

function setStats() {
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
//Calculates the distance between two points
function getDistance(p1: createjs.Point, p2: createjs.Point):number {

    return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
}

function playerAndTreasure() {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();

    p1.x = helicopter.x;
    p1.y = helicopter.y;

    p2.x = treasure.x;
    p2.y = treasure.y;

    if (getDistance(p1, p2) < ((helicopter.height * 0.5) + (treasure.height * 0.5))) {
        if (!treasure.isColliding) {
            console.log("Collision");
            treasure.isColliding = true;
        }
    } else {
        treasure.isColliding = false;
    }
}

function playerAndEnemy(enemy:objects.Enemy) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();

    p1.x = helicopter.x;
    p1.y = helicopter.y;

    p2.x = enemy.x;
    p2.y = enemy.y;

    if (getDistance(p1, p2) < ((helicopter.height * 0.5) + (enemy.height * 0.5))) {
        if (!enemy.isColliding) {
            console.log("Collision");
            enemy.isColliding = true;
        }
    } else {
        enemy.isColliding = false;
    }
}

function gameLoop() {
    stats.begin(); //Begin metering

    updateBackground();
    helicopter.update();
    treasure.update();
    
    for (var enemy = 3; enemy > 0; enemy--){
        enemies[enemy].update();
        playerAndEnemy(enemies[enemy]);
    }

    readdObjects();
    stage.update();
    playerAndTreasure();

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