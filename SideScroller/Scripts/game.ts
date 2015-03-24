/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/treasure.ts" />
/// <reference path="objects/player.ts" />


//global variables
var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;
var game: createjs.Container;

//Game Objects
var helicopter: objects.Player;
var treasure: objects.Treasure;
var background: objects.Background;
var enemies: objects.Enemy[] = [];




var assetLoader: createjs.LoadQueue;
//Define the manifest with all the game assets
var manifest = [
    { id: "helicopter", src: "assets/images/helicopter.png" },
    { id: "backgroundfirst", src: "assets/images/background-first.png" },
    { id: "backgroundsecond", src: "assets/images/background-second.png" },
    { id: "treasure", src: "assets/images/treasure.png" },
    { id: "enemy", src: "assets/images/enemy.png" },
    { id: "background", src: "assets/images/background.png"}
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

function checkCollision(collider:objects.GameObject) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();

    p1.x = helicopter.x;
    p1.y = helicopter.y;

    p2.x = collider.x;
    p2.y = collider.y;

    if (getDistance(p1, p2) < ((helicopter.height * 0.5) + (collider.height * 0.5))) {
        if (!collider.isColliding) {
            console.log("Collision");
            collider.isColliding = true;
        }
    } else {
        collider.isColliding = false;
    }
}

function gameLoop() {
    stats.begin(); //Begin metering

    background.update();
    helicopter.update();
    treasure.update();
    
    for (var enemy = 3; enemy > 0; enemy--){
        enemies[enemy].update();
        checkCollision(enemies[enemy]);
    }
    
    checkCollision(helicopter);

    stage.update();

    stats.end(); // End metering
}



function main() {

    game = new createjs.Container();

    background = new objects.Background();
    game.addChild(background);
    
    treasure = new objects.Treasure();
    game.addChild(treasure);

    for (var enemy = 3; enemy > 0; enemy--) {
        enemies[enemy] = new objects.Enemy();
        game.addChild(enemies[enemy]);
    }

    helicopter = new objects.Player();
    game.addChild(helicopter);

    stage.addChild(game);

}