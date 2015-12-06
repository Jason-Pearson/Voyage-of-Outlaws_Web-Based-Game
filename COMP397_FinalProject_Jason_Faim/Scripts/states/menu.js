var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // MENU CLASS
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Menu.prototype.start = function () {
            //Add Ocean to Menu Scene at Start - for Aesthetics 
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            // hello label
            this._gameTitleLabel = new objects.Label("Voyage of Outlaws", "150px " + config.FONT_FAMILY_DIANE, config.FONT_COLOR_YELLOW1, 320, 180, true); //Change font and color
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
            createjs.Sound.play("menu", { loop: -1, volume: 0.5 }); // play menu music at Start - infinite loop (-1)
        };
        Menu.prototype.update = function () {
            this._ocean.update();
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        Menu.prototype._clickStartButton = function (event) {
            createjs.Sound.stop(); // stop menu music upon clicking the Start Button
            changeState(config.PLAY_STATE);
        };
        return Menu;
    })(objects.Scene);
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map