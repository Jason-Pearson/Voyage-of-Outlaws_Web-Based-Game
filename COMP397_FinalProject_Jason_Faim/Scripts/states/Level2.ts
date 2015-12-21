module states {
    // GAME CLASS
    export class Level2 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        public _ship: objects.Ship; // reference of type Ship class - holds Ship gameobject, along with class properties to control behaviour/user input
        private _fusionCore: objects.fcore;
        private _barrels: objects.Barrel[] = []; // referene of type Barrel class - holds Barrel gameobject, along with class properties to control spawning and scoring
        private _pickup2: objects.Pickup2[] = []; // referene of type Barrel class - holds Barrel gameobject, along with class properties to control spawning and scoring
        private _hunters: objects.Hunters[] = []; // referene of type Enemy class - holds Enemy gameobject, along with class properties to control spawning, AI movement, player interaction
        private _rangers: objects.Rangers[] = []; // referene of type Enemy class - holds Enemy gameobject, along with class properties to control spawning, AI movement, player interaction
        private _forest: objects.Forest; // reference of type Ocean class - holds Ocean bitmap, along with class properties to control constant scrolling
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _coreLabel: objects.Label;
        private _livesLabel: objects.Label;
        //private _playerShot: objects.playerShot;
        //public _outOf: number;
        public finalBarrels: number;
        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            scoreboard.setLives(scoreboard._lives + 10);
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

            createjs.Sound.play("Level2", { loop: -1, volume: 0.4, delay: 100}); // play game music at Start - infinite loop (-1)
        }        
        //GAME OVER METHOD - Lives reach 0 - stop music, save score, change state

        //GAME SCENE UPDATE METHOD
        public update(): void {
            this._forest.update(); // every frame, call the update method of Ocean class in order to scroll
            for (var pickups = 0; pickups < 3; pickups++) {// every frame, call the update method of Enemy class of All Enemies in order to spawn and drift
                this._barrels[pickups].update();
                this._collision.update(this._ship, this._barrels[pickups], pickups)// every frame, check collision between Ship and each Barrel
            }

            for (var pickups = 0; pickups < 2; pickups++) {// every frame, call the update method of Enemy class of All Enemies in order to spawn and drift
                this._pickup2[pickups].update();
                this._collision.update(this._ship, this._pickup2[pickups], pickups)// every frame, check collision between Ship and each Barrel
            }

            this._fusionCore.update();
            this._collision.update(this._ship, this._fusionCore, 1);
            this._ship.update(); // every frame, call the update method of Ship class in order to move
            for (var feds = 0; feds < 3; feds++) {// every frame, call the update method of Enemy class of All Enemies in order to spawn and drift
                this._hunters[feds].update();
                this._collision.update(this._ship, this._hunters[feds], feds)// every frame, check collision between Ship and each Enemy
            }

            for (var feds = 0; feds < 2; feds++) {// every frame, call the update method of Enemy class of All Enemies in order to spawn and drift
                this._rangers[feds].update();
                this._collision.update(this._ship, this._rangers[feds], feds)// every frame, check collision between Ship and each Enemy

            }
            this._updateLabels();
            this._win();
            this._gameOver();

            /*this.on("click", this.playerShot, this);
            console.log(this.on("click", this.playerShot, this));*/
        }

        /*private playerShot(): void {
           this._playerShot = new objects.playerShot;
           this.addChild(this._playerShot);
           console.log(this.addChild(this._playerShot));
           stage.addChild(this);
       }*/

        private _updateLabels(): void {
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
            this._coreLabel.text = "Fusion Cores: " + scoreboard.getCores() + "/10";
        }

        private _gameOver(): void {
            if (scoreboard.getLives() <= 0) {
                //this._outOf = over._outOf;
                createjs.Sound.stop(); // stop game music upon losing all lives
                changeState(config.OVER_STATE);
            }
        }

        private _win(): void {
            if (scoreboard.getCores() >= 10) {
                createjs.Sound.stop(); // stop game music upon getting 20 barrels
                changeState(config.LEVEL_3);
            }
            /*if (scoreboard._barrels / 5 == 1) {
                scoreboard.addLives(1);
            }*/
        }

        public _pickup1Reset(barrel: number): void {
            this._barrels[barrel]._reset();
        }
        public _pickup2Reset(barrel: number): void {
            this._pickup2[barrel]._reset();
        }
        public _hunterReset(enemy: number): void {
            this._hunters[enemy]._reset();
        }
        public _rangerReset(enemy: number): void {
            this._rangers[enemy]._reset();
        }
        public _coreReset(): void {
            this._fusionCore._reset();
        }
    }


}  