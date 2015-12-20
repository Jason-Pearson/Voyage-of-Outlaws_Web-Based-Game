var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // GAME CLASS
    var Level2 = (function (_super) {
        __extends(Level2, _super);
        // CONSTRUCTOR
        function Level2() {
            _super.call(this);
            this._barrels = []; // referene of type Barrel class - holds Barrel gameobject, along with class properties to control spawning and scoring
            this._pickup2 = []; // referene of type Barrel class - holds Barrel gameobject, along with class properties to control spawning and scoring
            this._hunters = []; // referene of type Enemy class - holds Enemy gameobject, along with class properties to control spawning, AI movement, player interaction
            this._rangers = []; // referene of type Enemy class - holds Enemy gameobject, along with class properties to control spawning, AI movement, player interaction
        }
        // PUBLIC METHODS
        Level2.prototype.start = function () {
            scoreboard.setLives(10);
            scoreboard.setScore(scoreboard._score);
            scoreboard.setCores(0);
            console.log(scoreboard.getLives());
            console.log(scoreboard.getScore());
            console.log(scoreboard.getCores());
            //this._outOf = 20;
            //Add Ocean to Game Scene at Start
            this._forest = new objects.Forest();
            this.addChild(this._forest);
            //Add Barrels to Game Scene at Start
            for (var barrel = 0; barrel < 3; barrel++) {
                this._barrels[barrel] = new objects.Barrel();
                //this._barrels[barrel]._tagName = "Barrel#" + barrel;
                //this._barrels[barrel].setName(this._barrels[barrel]._tagName);
                this.addChild(this._barrels[barrel]);
            }
            //Add Barrels to Game Scene at Start
            for (var pickups = 0; pickups < 2; pickups++) {
                this._pickup2[pickups] = new objects.Pickup2();
                //this._barrels[barrel]._tagName = "Barrel#" + barrel;
                //this._barrels[barrel].setName(this._barrels[barrel]._tagName);
                this.addChild(this._pickup2[pickups]);
            }
            //Add Ship to Game Scene at Start
            this._ship = new objects.Ship();
            this.addChild(this._ship);
            //Add Enemies to Game Scene at Start
            for (var feds = 0; feds < 3; feds++) {
                this._hunters[feds] = new objects.Hunters();
                //this._enemies[enemy]._tagName = "Enemy#" + enemy;
                //this._enemies[enemy].setName(this._enemies[enemy]._tagName);
                this.addChild(this._hunters[feds]);
            }
            for (var feds = 0; feds < 2; feds++) {
                this._rangers[feds] = new objects.Rangers();
                //this._enemies[enemy]._tagName = "Enemy#" + enemy;
                //this._enemies[enemy].setName(this._enemies[enemy]._tagName);
                this.addChild(this._rangers[feds]);
            }
            //Add a Fusion Core
            this._fusionCore = new objects.fcore();
            //this._fusionCore.x = 1980;
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
            createjs.Sound.play("Level2", { loop: -1, volume: 0.4, delay: 100 }); // play game music at Start - infinite loop (-1)
        };
        //GAME OVER METHOD - Lives reach 0 - stop music, save score, change state
        //GAME SCENE UPDATE METHOD
        Level2.prototype.update = function () {
            this._forest.update(); // every frame, call the update method of Ocean class in order to scroll
            for (var pickups = 0; pickups < 3; pickups++) {
                this._barrels[pickups].update();
                this._collision.update(this._ship, this._barrels[pickups], pickups); // every frame, check collision between Ship and each Barrel
            }
            for (var pickups = 0; pickups < 2; pickups++) {
                this._pickup2[pickups].update();
                this._collision.update(this._ship, this._pickup2[pickups], pickups); // every frame, check collision between Ship and each Barrel
            }
            this._fusionCore.update();
            this._collision.update(this._ship, this._fusionCore, 1);
            this._ship.update(); // every frame, call the update method of Ship class in order to move
            for (var feds = 0; feds < 3; feds++) {
                this._hunters[feds].update();
                this._collision.update(this._ship, this._hunters[feds], feds); // every frame, check collision between Ship and each Enemy
            }
            for (var feds = 0; feds < 2; feds++) {
                this._rangers[feds].update();
                this._collision.update(this._ship, this._rangers[feds], feds); // every frame, check collision between Ship and each Enemy
            }
            this._updateLabels();
            this._win();
            this._gameOver();
            /*this.on("click", this.playerShot, this);
            console.log(this.on("click", this.playerShot, this));*/
        };
        /*private playerShot(): void {
           this._playerShot = new objects.playerShot;
           this.addChild(this._playerShot);
           console.log(this.addChild(this._playerShot));
           stage.addChild(this);
       }*/
        Level2.prototype._updateLabels = function () {
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
            this._coreLabel.text = "Fusion Cores: " + scoreboard.getCores() + "/10";
        };
        Level2.prototype._gameOver = function () {
            if (scoreboard.getLives() <= 0) {
                //this._outOf = over._outOf;
                createjs.Sound.stop(); // stop game music upon losing all lives
                changeState(config.OVER_STATE);
            }
        };
        Level2.prototype._win = function () {
            if (scoreboard.getCores() >= 10) {
                createjs.Sound.stop(); // stop game music upon getting 20 barrels
                changeState(config.LEVEL_3);
            }
            /*if (scoreboard._barrels / 5 == 1) {
                scoreboard.addLives(1);
            }*/
        };
        Level2.prototype._pickup1Reset = function (barrel) {
            this._barrels[barrel]._reset();
        };
        Level2.prototype._pickup2Reset = function (barrel) {
            this._pickup2[barrel]._reset();
        };
        Level2.prototype._hunterReset = function (enemy) {
            this._hunters[enemy]._reset();
        };
        Level2.prototype._rangerReset = function (enemy) {
            this._rangers[enemy]._reset();
        };
        Level2.prototype._coreReset = function () {
            this._fusionCore._reset();
        };
        return Level2;
    })(objects.Scene);
    states.Level2 = Level2;
})(states || (states = {}));
//# sourceMappingURL=level2.js.map