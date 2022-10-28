﻿module states {
    // OVER CLASS
    export class Over extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _sand: objects.Ocean; // reference of type Ocean class - holds Ocean bitmap, along with class properties to control constant scrolling

        private _finalScoreLabel: objects.Label;
        //public _outOf: number;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            //Add Ocean to Menu Scene at Start - for Aesthetics 
            this._sand = new objects.Ocean();
            this.addChild(this._sand);

            // level label
            this._gameOverLabel = new objects.Label("Escape Failed", "80px " + config.FONT_FAMILY_7, config.FONT_COLOR_RED, 320, 120, true);
            this.addChild(this._gameOverLabel); // add label to the stage

            //  plundered
            this._finalScoreLabel = new objects.Label("Score: " + scoreboard._score, "40px " + config.FONT_FAMILY_2, config.FONT_COLOR_RED, 320, 240, true);
            this.addChild(this._finalScoreLabel); // add label to the stage

            //  plundered
            this._finalScoreLabel = new objects.Label("Fusion Cores: " + scoreboard._cores, "40px " + config.FONT_FAMILY_2, config.FONT_COLOR_RED, 320, 290, true);
            this.addChild(this._finalScoreLabel); // add label to the stage

            // restart button
            this._restartButton = new objects.Button("RestartButton", 320, 400);
            this._restartButton.on("click", this._clickRestartButton, this); // event listener
            this.addChild(this._restartButton);

            stage.addChild(this);

            createjs.Sound.play("over", { loop: -1 }); // play game over music at Start - infinite loop (-1)
        }


        public update(): void {
            this._sand.update();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        private _clickRestartButton(event: createjs.MouseEvent): void {
            createjs.Sound.stop(); // stop game over music upon clicking the Restart Button
            changeState(config.MENU_STATE);
        }


    }


}  