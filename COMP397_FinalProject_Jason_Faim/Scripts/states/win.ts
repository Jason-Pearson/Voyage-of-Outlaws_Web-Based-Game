module states {
    // WIN CLASS
    export class Win extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _winLabel: objects.Label;
        private _restartButton: objects.Button;
        private _space: objects.Space; // reference of type Ocean class - holds Ocean bitmap, along with class properties to control constant scrolling

        private _winMessageLabel: objects.Label;
        private _finalScoreLabel2: objects.Label;
        private _finalLivesLabel: objects.Label;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            //Add Ocean to Menu Scene at Start - for Aesthetics 
            this._space = new objects.Space();
            this.addChild(this._space);

            // level label
            if (scoreboard._lives == 25) {
                this._winLabel = new objects.Label("Flawless Escape", "80px " + config.FONT_FAMILY_7, config.FONT_COLOR_GREEN, 319, 150, true);
                this.addChild(this._winLabel); // add label to the stage
            }
            else {
                this._winLabel = new objects.Label("Escape Successful", "80px " + config.FONT_FAMILY_7, config.FONT_COLOR_GREEN, 319, 150, true);
                this.addChild(this._winLabel); // add label to the stage
            }

            this._winMessageLabel = new objects.Label("You win freedom in the limitless vacuum of space", "20px " + config.FONT_FAMILY_2, config.FONT_COLOR_GREEN, 320, 210, true);
            this.addChild(this._winMessageLabel); // add label to the stage

            this._finalScoreLabel2 = new objects.Label("Score: " + scoreboard._score, "40px " + config.FONT_FAMILY_2, config.FONT_COLOR_GREEN, 320, 250, true);
            this.addChild(this._finalScoreLabel2); // add label to the stage

            this._finalLivesLabel = new objects.Label("Lives: " + scoreboard._lives, "40px " + config.FONT_FAMILY_2, config.FONT_COLOR_GREEN, 320, 295, true);
            this.addChild(this._finalLivesLabel); // add label to the stage
            // restart button
            this._restartButton = new objects.Button("RestartButton", 320, 400);
            this._restartButton.on("click", this._clickRestartButton, this); // event listener
            this.addChild(this._restartButton);

            stage.addChild(this);

            createjs.Sound.play("win", { loop: -1, volume: 0.5}); // play win music at Start - infinite loop (-1)
        }


        public update(): void {
            this._space.update();
            //this._winLabel.rotation += 5;
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        private _clickRestartButton(event: createjs.MouseEvent): void {
            createjs.Sound.stop(); // stop game over music upon clicking the Restart Button
            changeState(config.MENU_STATE);
        }


    }


}  