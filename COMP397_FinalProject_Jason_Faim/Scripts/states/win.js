var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // WIN CLASS
    var Win = (function (_super) {
        __extends(Win, _super);
        // CONSTRUCTOR
        function Win() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Win.prototype.start = function () {
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
            createjs.Sound.play("win", { loop: -1, volume: 0.5 }); // play win music at Start - infinite loop (-1)
        };
        Win.prototype.update = function () {
            this._space.update();
            //this._winLabel.rotation += 5;
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        Win.prototype._clickRestartButton = function (event) {
            createjs.Sound.stop(); // stop game over music upon clicking the Restart Button
            changeState(config.MENU_STATE);
        };
        return Win;
    })(objects.Scene);
    states.Win = Win;
})(states || (states = {}));
//# sourceMappingURL=win.js.map