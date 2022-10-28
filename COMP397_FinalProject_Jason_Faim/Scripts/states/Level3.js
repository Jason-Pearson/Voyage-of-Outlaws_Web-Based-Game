var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // GAME CLASS
    var Level3 = (function (_super) {
        __extends(Level3, _super);
        // CONSTRUCTOR
        function Level3() {
            _super.call(this);
            this._barrels = []; // referene of type Barrel class - holds Barrel gameobject, along with class properties to control spawning and scoring
            this._pickup2 = []; // referene of type Barrel class - holds Barrel gameobject, along with class properties to control spawning and scoring
            this._pickup3 = [];
            this._feds = []; // referene of type Enemy class - holds Enemy gameobject, along with class properties to control spawning, AI movement, player interaction
        }
        // PUBLIC METHODS
        Level3.prototype.start = function () {
            scoreboard.setLives(scoreboard._lives + 10);
            scoreboard.setScore(scoreboard._score);
            scoreboard.setCores(0);
            console.log(scoreboard.getLives());
            console.log(scoreboard.getScore());
            console.log(scoreboard.getCores());
            //this._outOf = 20;
            //Add Ocean to Game Scene at Start
            this._space = new objects.Space();
            this.addChild(this._space);
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
            //Add Barrels to Game Scene at Start
            for (var pickups = 0; pickups < 2; pickups++) {
                this._pickup3[pickups] = new objects.Pickup3();
                //this._barrels[barrel]._tagName = "Barrel#" + barrel;
                //this._barrels[barrel].setName(this._barrels[barrel]._tagName);
                this.addChild(this._pickup3[pickups]);
            }
            //Add Ship to Game Scene at Start
            this._ship = new objects.Ship();
            this.addChild(this._ship);
            //Add Enemies to Game Scene at Start
            for (var feds = 0; feds < 4; feds++) {
                this._feds[feds] = new objects.Feds();
                //this._enemies[enemy]._tagName = "Enemy#" + enemy;
                //this._enemies[enemy].setName(this._enemies[enemy]._tagName);
                this.addChild(this._feds[feds]);
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
            createjs.Sound.play("Level3", { loop: -1, volume: 0.5 }); // play game music at Start - infinite loop (-1)
        };
        //GAME OVER METHOD - Lives reach 0 - stop music, save score, change state
        //GAME SCENE UPDATE METHOD
        Level3.prototype.update = function () {
            this._space.update(); // every frame, call the update method of Ocean class in order to scroll
            for (var pickups = 0; pickups < 3; pickups++) {
                this._barrels[pickups].update();
                this._collision.update(this._ship, this._barrels[pickups], pickups); // every frame, check collision between Ship and each Barrel
            }
            for (var pickups = 0; pickups < 2; pickups++) {
                this._pickup2[pickups].update();
                this._collision.update(this._ship, this._pickup2[pickups], pickups); // every frame, check collision between Ship and each Barrel
            }
            for (var pickups = 0; pickups < 2; pickups++) {
                this._pickup3[pickups].update();
                this._collision.update(this._ship, this._pickup3[pickups], pickups); // every frame, check collision between Ship and each Barrel
            }
            this._fusionCore.update();
            this._collision.update(this._ship, this._fusionCore, 1);
            this._ship.update(); // every frame, call the update method of Ship class in order to move
            for (var feds = 0; feds < 4; feds++) {
                this._feds[feds].update();
                this._collision.update(this._ship, this._feds[feds], feds); // every frame, check collision between Ship and each Enemy
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
        Level3.prototype._updateLabels = function () {
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
            this._coreLabel.text = "Fusion Cores: " + scoreboard.getCores() + "/15";
        };
        Level3.prototype._gameOver = function () {
            if (scoreboard.getLives() <= 0) {
                //this._outOf = over._outOf;
                createjs.Sound.stop(); // stop game music upon losing all lives
                changeState(config.OVER_STATE);
            }
        };
        Level3.prototype._win = function () {
            if (scoreboard.getCores() >= 15) {
                createjs.Sound.stop(); // stop game music upon getting 20 barrels
                changeState(config.WIN_STATE);
            }
            /*if (scoreboard._barrels / 5 == 1) {
                scoreboard.addLives(1);
            }*/
        };
        Level3.prototype._pickup1Reset = function (barrel) {
            this._barrels[barrel]._reset();
        };
        Level3.prototype._pickup2Reset = function (barrel) {
            this._pickup2[barrel]._reset();
        };
        Level3.prototype._pickup3Reset = function (barrel) {
            this._pickup3[barrel]._reset();
        };
        Level3.prototype._enemyReset = function (enemy) {
            this._feds[enemy]._reset();
        };
        Level3.prototype._coreReset = function () {
            this._fusionCore._reset();
        };
        return Level3;
    })(objects.Scene);
    states.Level3 = Level3;
})(states || (states = {}));
//# sourceMappingURL=Level3.js.map