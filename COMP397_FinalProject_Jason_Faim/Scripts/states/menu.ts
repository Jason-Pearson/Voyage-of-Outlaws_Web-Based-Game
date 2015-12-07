module states {
    // MENU CLASS
    export class Menu extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _gameTitleLabel: objects.Label;
        private _intructLabel: objects.Label;
        private _intructLabel2: objects.Label;
        private _intructLabel3: objects.Label;
        private _startButton: objects.Button;
        private _ocean: objects.Ocean; // reference of type Ocean class - holds Ocean bitmap, along with class properties to control constant scrolling

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            //Add Ocean to Menu Scene at Start - for Aesthetics 
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

            // hello label
            this._gameTitleLabel = new objects.Label("Voyage of Outlaws", "150px " + config.FONT_FAMILY_DIANE, config.FONT_COLOR_YELLOW1, 30, 100, false); //Change font and color
            this.addChild(this._gameTitleLabel); // add label to the stage

            this._intructLabel = new objects.Label("Move the mouse up and down to move ship", "20px " + config.FONT_FAMILY_DOCK, config.FONT_COLOR_YELLOW1, 110, 220, false); //Change font and color
            this.addChild(this._intructLabel); // add label to the stage
            this._intructLabel2 = new objects.Label("Attain enough Fusion Cores to warp", "20px " + config.FONT_FAMILY_DOCK, config.FONT_COLOR_YELLOW1, 130, 270, false); //Change font and color
            this.addChild(this._intructLabel2); // add label to the stage
            this._intructLabel3 = new objects.Label("through Galactic Federacy Space and escape captivity!", "20px " + config.FONT_FAMILY_DOCK, config.FONT_COLOR_YELLOW1, 30, 300, false); //Change font and color
            this.addChild(this._intructLabel3); // add label to the stage
            // start button
            this._startButton = new objects.Button("StartButton", 320, 400);
            this._startButton.on("click", this._clickStartButton, this); // event listener
            this.addChild(this._startButton);

            stage.addChild(this);

            createjs.Sound.play("menu", { loop: -1, volume: 0.5}); // play menu music at Start - infinite loop (-1)
        }


        public update(): void {
            this._ocean.update();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        private _clickStartButton(event: createjs.MouseEvent): void {
            createjs.Sound.stop(); // stop menu music upon clicking the Start Button
            changeState(config.PLAY_STATE);
        }

    }


}