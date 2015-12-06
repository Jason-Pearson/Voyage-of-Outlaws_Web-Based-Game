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
        "../../Assets/images/atlas.png"
    ],

    "frames": [
        [2, 2, 118, 97, 0, -2, -3],
        [122, 2, 150, 50, 0, 0, 0],
        [274, 2, 150, 50, 0, 0, 0],
        [122, 54, 150, 50, 0, 0, 0],
        [274, 54, 94, 62, 0, 0, -3],
        [370, 54, 30, 30, 0, -1, 0],
        [402, 54, 30, 28, 0, -1, 0],
        [402, 84, 30, 26, 0, -2, -2]
    ],

    "animations": {
        "Ship": [0],
        "MenuButton": [1],
        "RestartButton": [2],
        "StartButton": [3],
        "Leviathan": [4],
        "cannonball": [5],
        "Crate": [6],
        "Barrel": [7]
    }

};

// manifest of all our assets
var manifest = [
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "MenuButton", src: "../../Assets/images/MenuButton.png" },
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "Ocean", src: "../../Assets/images/ocean.png" },
    { id: "menu", src: "../../Assets/audio/menu1_music.mp3" },
    { id: "game", src: "../../Assets/audio/game1_music.mp3" },
    { id: "over", src: "../../Assets/audio/over1_music.mp3" },
    { id: "win", src: "../../Assets/audio/win_music.mp3" },
    { id: "cannon", src: "../../Assets/audio/shoot_cannon.wav" },
    { id: "damage", src: "../../Assets/audio/damage.wav" },
    { id: "pickup1", src: "../../Assets/audio/pickup1.wav" }
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
 