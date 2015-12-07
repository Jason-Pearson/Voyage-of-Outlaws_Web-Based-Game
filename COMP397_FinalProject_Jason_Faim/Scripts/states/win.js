var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File:               win.ts
    Author:             Jason Pearson
    Date Modified:      12/5/2015
    Description:        Win's scene
    Revision History:   IDK...
*/
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
            createjs.Sound.play("win", { loop: -1, volume: 0.5 }); // play win music at Start - infinite loop (-1)
        };
        Win.prototype.update = function () {
            this._ocean.update();
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