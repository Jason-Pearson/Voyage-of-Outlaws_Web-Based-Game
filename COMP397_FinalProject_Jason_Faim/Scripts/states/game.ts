/*
    File:               game.ts
    Author:             Khandker Hussain
    Date Modified:      12/6/2015
    Description:        Game's scene
    Revision History:   IDK...
*/
module states
{
    // GAME CLASS
    export class Game extends objects.Scene
    {
        // PRIVATE INSTANCE VARIABLES
        public _ship: objects.Ship; // reference of type Ship class - holds Ship gameobject, along with class properties to control behaviour/user input
        public _blastShot: objects.playerShot;
        private _fusionCore: objects.fcore;
        private _barrels: objects.Barrel[] = []; // referene of type Barrel class - holds Barrel gameobject, along with class properties to control spawning and scoring
        private _enemies: objects.Enemy[] = []; // referene of type Enemy class - holds Enemy gameobject, along with class properties to control spawning, AI movement, player interaction
        private _ocean: objects.Ocean; // reference of type Ocean class - holds Ocean bitmap, along with class properties to control constant scrolling
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _coreLabel: objects.Label;
        private _livesLabel: objects.Label;
        //private _playerShot: objects.playerShot;

        public finalBarrels: number;
        // CONSTRUCTOR
        constructor()
        {
            super();
        }

        // PUBLIC METHODS
        public start(): void
        {

            scoreboard.setLives(5);
            scoreboard.setScore(0);
            scoreboard.setCores(0);
            console.log(scoreboard.getLives());
            console.log(scoreboard.getScore());
            console.log(scoreboard.getCores());

            //Add Ocean to Game Scene at Start
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

            //Add Barrels to Game Scene at Start
            for (var barrel = 0; barrel < 3; barrel++)
            {
                this._barrels[barrel] = new objects.Barrel();
                //this._barrels[barrel]._tagName = "Barrel#" + barrel;
                //this._barrels[barrel].setName(this._barrels[barrel]._tagName);
                this.addChild(this._barrels[barrel]);
            }

            //Add Ship to Game Scene at Start
            this._ship = new objects.Ship();
            this.addChild(this._ship);

            //Add playerShot to Game Scene at start
            this._blastShot = new objects.playerShot();
            this.addChild(this._blastShot);

            //Add Enemies to Game Scene at Start
            for (var enemy = 0; enemy < 5; enemy++)
            {
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
            this._scoreLabel = new objects.Label("Score: ", "40px " + config.FONT_FAMILY_DOCK, config.FONT_COLOR_YELLOW2, 5, 5, false);
            this.addChild(this._scoreLabel);
            
            // Lives Label
            this._livesLabel = new objects.Label("Lives: ", "40px " + config.FONT_FAMILY_DOCK, config.FONT_COLOR_YELLOW2, 450, 5, false);
            this.addChild(this._livesLabel);

            // Core Label
            this._coreLabel = new objects.Label("Fusion Cores: ", "40px " + config.FONT_FAMILY_DOCK, config.FONT_COLOR_YELLOW2, 5, 450, false);
            this.addChild(this._coreLabel);

            stage.addChild(this);

            createjs.Sound.play("game", { loop: -1, volume: 0.3, delay: 100 }); // play game music at Start - infinite loop (-1)
        }        
        //GAME OVER METHOD - Lives reach 0 - stop music, save score, change state

        //GAME SCENE UPDATE METHOD
        public update(): void
        {
            this._ocean.update(); // every frame, call the update method of Ocean class in order to scroll
            for (var barrel = 0; barrel < 3; barrel++) // every frame, call the update method of Enemy class of All Enemies in order to spawn and drift
            {
                this._barrels[barrel].update();
                this._collision.update(this._ship, this._barrels[barrel], barrel)// every frame, check collision between Ship and each Barrel
            }
            this._fusionCore.update();
            this._collision.update(this._ship, this._fusionCore, 1);
            this._ship.update(); // every frame, call the update method of Ship class in order to move
            for (var enemy = 0; enemy < 5; enemy++) // every frame, call the update method of Enemy class of All Enemies in order to spawn and drift
            {
                this._enemies[enemy].update();
                this._collision.update(this._ship, this._enemies[enemy], enemy)// every frame, check collision between Ship and each Enemy
            }

            this._updateLabels();
            this._win();
            this._gameOver();

            /*this.on("click", this.playerShot, this);
            console.log(this.on("click", this.playerShot, this));*/
        }

         /*private playerShot(): void 
        {
            this._playerShot = new objects.playerShot;
            this.addChild(this._playerShot);
            console.log(this.addChild(this._playerShot));
            stage.addChild(this);
        }*/

        private _updateLabels(): void
        {
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
            this._coreLabel.text = "Fusion Cores: " + scoreboard.getCores() + "/10";
        }

        private _gameOver(): void
        {
            if (scoreboard.getLives() == 0)
            {
                createjs.Sound.stop(); // stop game music upon losing all lives
                changeState(config.OVER_STATE);
            }
        }

        private _win(): void
        {
            if (scoreboard.getCores() >= 10)
            {
                createjs.Sound.stop(); // stop game music upon getting 20 barrels
                changeState(config.WIN_STATE);
            }
            /*if (scoreboard._barrels / 5 == 1) 
            {
                scoreboard.addLives(1);
            }*/
        }

        public _barrelReset(barrel: number): void
        {
            this._barrels[barrel]._reset();
        }
        public _enemyReset(enemy: number): void
        {
            this._enemies[enemy]._reset();
        }

        public _coreReset(): void
        {
            this._fusionCore._reset();
        }
    }
} 