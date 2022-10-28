var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // GAME CLASS
    var Game = (function (_super) {
        __extends(Game, _super);
        // CONSTRUCTOR
        function Game() {
            _super.call(this);
            this._barrels = []; // referene of type Barrel class - holds Barrel gameobject, along with class properties to control spawning and scoring
            this._enemies = []; // referene of type Enemy class - holds Enemy gameobject, along with class properties to control spawning, AI movement, player interaction
        }
        // PUBLIC METHODS
        Game.prototype.start = function () {
            scoreboard.setLives(5);
            scoreboard.setScore(0);
            scoreboard.setCores(0);
            console.log(scoreboard.getLives());
            console.log(scoreboard.getScore());
            console.log(scoreboard.getCores());
            //  this._outOf = 10;
            //Add Ocean to Game Scene at Start
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            //Add Barrels to Game Scene at Start
            for (var barrel = 0; barrel < 3; barrel++) {
                this._barrels[barrel] = new objects.Barrel();
                //this._barrels[barrel]._tagName = "Barrel#" + barrel;
                //this._barrels[barrel].setName(this._barrels[barrel]._tagName);
                this.addChild(this._barrels[barrel]);
            }
            //Add Ship to Game Scene at Start
            this._ship = new objects.Ship();
            this.addChild(this._ship);
            /*//Add playerShot to Game Scene at start
             this._blastShot = new objects.playerShot();
             this.addChild(this._blastShot);*/
            //Add Enemies to Game Scene at Start
            for (var enemy = 0; enemy < 5; enemy++) {
                this._enemies[enemy] = new objects.Enemy();
                //this._enemies[enemy]._tagName = "Enemy#" + enemy;
                //this._enemies[enemy].setName(this._enemies[enemy]._tagName);
                this.addChild(this._enemies[enemy]);
            }
            //Add a Fusion Core
            this._fusionCore = new objects.fcore();
            this.addChild(this._fusionCore);
            //Instantiating Collision Managers
            this._collision = new managers.Collision;
            // Score Label
            this._scoreLabel = new objects.Label("Score: ", "40px " + config.FONT_FAMILY_2, config.FONT_COLOR_YELLOW2, 5, 5, false);
            this.addChild(this._scoreLabel);
            // Lives Label
            this._livesLabel = new objects.Label("Lives: ", "40px " + config.FONT_FAMILY_2, config.FONT_COLOR_YELLOW2, 450, 5, false);
            this.addChild(this._livesLabel);
            // Core Label
            this._coreLabel = new objects.Label("Fusion Cores: ", "40px " + config.FONT_FAMILY_2, config.FONT_COLOR_YELLOW2, 5, 445, false);
            this.addChild(this._coreLabel);
            stage.addChild(this);
            createjs.Sound.play("game", { loop: -1, volume: 0.3, delay: 100 }); // play game music at Start - infinite loop (-1)
        };
        //GAME OVER METHOD - Lives reach 0 - stop music, save score, change state
        //GAME SCENE UPDATE METHOD
        Game.prototype.update = function () {
            this._ocean.update(); // every frame, call the update method of Ocean class in order to scroll
            for (var barrel = 0; barrel < 3; barrel++) {
                this._barrels[barrel].update();
                this._collision.update(this._ship, this._barrels[barrel], barrel); // every frame, check collision between Ship and each Barrel
            }
            this._fusionCore.update();
            this._collision.update(this._ship, this._fusionCore, 1);
            this._ship.update(); // every frame, call the update method of Ship class in order to move
            for (var enemy = 0; enemy < 5; enemy++) {
                this._enemies[enemy].update();
                this._collision.update(this._ship, this._enemies[enemy], enemy); // every frame, check collision between Ship and each Enemy
            }
            this._updateLabels();
            this._win();
            this._gameOver();
            /*this.on("click", this.playerShot, this);
            console.log(this.on("click", this.playerShot, this));*/
        };
        /*private playerShot(): void
       {
           this._playerShot = new objects.playerShot;
           this.addChild(this._playerShot);
           console.log(this.addChild(this._playerShot));
           stage.addChild(this);
       }*/
        Game.prototype._updateLabels = function () {
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
            this._coreLabel.text = "Fusion Cores: " + scoreboard.getCores() + "/10";
        };
        Game.prototype._gameOver = function () {
            if (scoreboard.getLives() <= 0) {
                //    this._outOf = over._outOf;
                createjs.Sound.stop(); // stop game music upon losing all lives
                changeState(config.OVER_STATE);
            }
        };
        Game.prototype._win = function () {
            if (scoreboard.getCores() >= 10) {
                createjs.Sound.stop(); // stop game music upon getting 20 barrels
                changeState(config.LEVEL_2);
            }
            /*if (scoreboard._barrels / 5 == 1)
            {
                scoreboard.addLives(1);
            }*/
        };
        Game.prototype._barrelReset = function (barrel) {
            this._barrels[barrel]._reset();
        };
        Game.prototype._enemyReset = function (enemy) {
            this._enemies[enemy]._reset();
        };
        Game.prototype._coreReset = function () {
            this._fusionCore._reset();
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map