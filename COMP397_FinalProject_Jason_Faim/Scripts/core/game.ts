/// <reference path="reference.ts" />

// GLOBAL GAME FRAMEWORK VARIABLES
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var currentState: objects.Scene; // alias for our current state

// MANAGERS
var scoreboard: managers.ScoreBoard;

// GAME OBJECTS
var menu: states.Menu;
var game: states.Game;
var over: states.Over;
var win: states.Win;
var atlas: createjs.SpriteSheet; // variable of type creatjs SpriteSheet to hold a reference for atlas spritesheet

//SPRITE OBJECTS from ATLAS SPRITESHEET
var data = {

    "images": [
        "../../Assets_2/images/atlus.png"
    ],

    "frames": [
        [2, 2, 1920, 480, 0, 0, 0],
        [2, 484, 444, 344, 0, -23, -102],
        [448, 484, 241, 164, 0, 0, 0],
        [448, 650, 241, 122, 0, 0, 0],
        [448, 774, 47, 39, 0, 0, 0],
        [448, 815, 64, 13, 0, 0, 0],
        [497, 774, 36, 39, 0, 0, 0],
        [514, 815, 71, 11, 0, 0, 0],
        [535, 774, 38, 38, 0, 0, 0],
        [575, 774, 57, 29, 0, 0, 0],
        [575, 805, 61, 8, 0, -1, -1],
        [634, 774, 29, 29, 0, 0, 0],
        [638, 805, 20, 20, 0, 0, 0],
        [660, 805, 20, 20, 0, 0, 0],
        [665, 774, 28, 28, 0, 0, 0],
        [682, 804, 21, 17, 0, 0, 0],
        [691, 484, 121, 82, 0, 0, 0],
        [691, 568, 65, 66, 0, 0, 0],
        [691, 636, 84, 58, 0, 0, 0],
        [758, 568, 25, 25, 0, 0, 0],
        [758, 595, 53, 8, 0, 0, 0]
    ],

    "animations": {
        "sand": [0],
        "BeamsOriginal": [1],
        "Spaceship_tut": [2],
        "Spaceship_tut_thin": [3],
        "AssaultboatB": [4],
        "Blast": [5],
        "Assaultboat": [6],
        "blueBeam": [7],
        "Box": [8],
        "Fighter3": [9],
        "redBeam": [10],
        "Cross": [11],
        "Pickup_2": [12],//red-out
        "Pickup_3": [13],
        "Box/Cross": [14],
        "Blast2": [15],
        "Spaceship_tut_small": [16],
        "l0_SpaceShip0021": [17],
        "Corvette": [18],
        "Pickup": [19],
        "cyanBeam": [20]
    }


};

// manifest of all our assets
var manifest = [
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "MenuButton", src: "../../Assets/images/MenuButton.png" },
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "Sand", src: "../../Assets_2/images/sand.jpg" },
    { id: "menu", src: "../../Assets/audio/menu2_music.mp3" },
    { id: "game", src: "../../Assets/audio/game2_music.mp3" },
    { id: "over", src: "../../Assets/audio/over2_music.mp3" },
    { id: "win", src: "../../Assets/audio/win2_music.mp3" },
    { id: "cannon", src: "../../Assets/audio/shoot_cannon.wav" },
    { id: "damage", src: "../../Assets/audio/damage.wav" },
    { id: "over2", src: "../../Assets_2/audio/death/Falling.mp3" },
    { id: "gun-piu", src: "../../Assets_2/audio/shots/gun-piu.wav" },
    { id: "laser1", src: "../../Assets_2/audio/shots/laserfire01.ogg" },
    { id: "laser2", src: "../../Assets_2/audio/shots/laserfire02.ogg" },
    { id: "pickup", src: "../../Assets/audio/pickup1.wav" },
    { id: "pickup2", src: "../../Assets_2/audio/pickups/Bonus 1.wav" }

];

function preload(): void {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);

    //SpriteSheet is configured and preloaded
    atlas = new createjs.SpriteSheet(data) // atlas is declared and holds sprites in the atlas spritesheet
}

function init():void {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counting

    scoreboard = new managers.ScoreBoard();

    state = config.MENU_STATE;
    changeState(state);

}

// Main Game Loop
function gameLoop(event: createjs.Event): void {
    stats.begin(); // start counting


    currentState.update(); // calling State's update method
    stage.update(); // redraw/refresh stage every frame

    stats.end(); // stop counting
}

// Setup Game Stats
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// state machine prep
function changeState(state): void {
    // Launch various scenes

    switch (state) {
        case config.MENU_STATE:
            // show the menu scene
            stage.removeAllChildren();
            menu = new states.Menu();
            currentState = menu;
            break;
        case config.PLAY_STATE:
            // show the play scene
            stage.removeAllChildren();
            game = new states.Game();
            currentState = game;
            break;
        case config.OVER_STATE:
            // show the game over scene
            stage.removeAllChildren();
            over = new states.Over();
            currentState = over;
            break;
        case config.WIN_STATE:
            // show the win scene
            stage.removeAllChildren();
            win = new states.Win();
            currentState = win;
            break;
    }

    currentState.start();
    console.log(currentState.numChildren);
}
 