module states {
    // WIN CLASS
    export class Win extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _winLabel: objects.Label;
        private _restartButton: objects.Button;
        private _ocean: objects.Ocean; // reference of type Ocean class - holds Ocean bitmap, along with class properties to control constant scrolling

        private _winMessageLabel: objects.Label;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            //Add Ocean to Menu Scene at Start - for Aesthetics 
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

            // level label
            this._winLabel = new objects.Label("Escape Successful", "150px " + config.FONT_FAMILY_DIANE, config.FONT_COLOR_GREEN, 319, 180, true);
            this.addChild(this._winLabel); // add label to the stage

            this._winMessageLabel = new objects.Label("You win freedom in the limitless vacuum of space", "20px " + config.FONT_FAMILY_DOCK, config.FONT_COLOR_GREEN, 320, 240, true);
            this.addChild(this._winMessageLabel); // add label to the stage

            // restart button
            this._restartButton = new objects.Button("RestartButton", 320, 400);
            this._restartButton.on("click", this._clickRestartButton, this); // event listener
            this.addChild(this._restartButton);

            stage.addChild(this);

            createjs.Sound.play("win", { loop: -1, volume: 0.5}); // play win music at Start - infinite loop (-1)
        }


        public update(): void {
            this._ocean.update();
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