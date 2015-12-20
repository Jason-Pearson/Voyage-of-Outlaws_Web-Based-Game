var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
<<<<<<< Updated upstream
/*
    File:               pickup2.ts
    Author:             Khandker Hussain
    Date Modified:      12/19/2015
    Description:        ...
    Revision History:   IDK...
*/
var objects;
(function (objects) {
    var pickup2 = (function (_super) {
        __extends(pickup2, _super);
        //CONTRUCTOR
        function pickup2() {
            _super.call(this, "Pickup_2"); // makes a super call to the GameObject class, gives imageString value to refer to Barrel in the Atlus SpriteSheet variable
            //basically what would be called in the Start method
            this._dx = 10;
=======
var objects;
(function (objects) {
    //Barrel Class - to create the Barrel gameobject, making a variable of this type holding the Barrel sprite/gameobject
    var Pickup2 = (function (_super) {
        __extends(Pickup2, _super);
        //CONTRUCTOR
        function Pickup2() {
            _super.call(this, "Pickup_3"); // makes a super call to the GameObject class, gives imageString value to refer to Barrel in the Atlus SpriteSheet variable
            //basically what would be called in the Start method
            this._dx = 15;
>>>>>>> Stashed changes
            this._reset();
        }
        //PUBLIC METHODS
        /**
         * Update Method for Barrel Class
         */
<<<<<<< Updated upstream
        pickup2.prototype.update = function () {
=======
        Pickup2.prototype.update = function () {
>>>>>>> Stashed changes
            this.x -= this._dx; //every frame, the position of the Barrel is decremented by _dx= 5(pixels)
            this._checkBounds(); //every frame, call _checkBounds to check the bounds before resetting Barrel
        };
        //PRIVATE METHODS
        /**
         * Resets the Barrel radomely between x = 800 (off-screen) and just before the canvas (x = 640), and resets at a random y-position within the height of the canvas
         */
<<<<<<< Updated upstream
        pickup2.prototype._reset = function () {
            this.y = Math.floor(Math.random() * (480 - this._height)) + (this._height * 0.5); // the entire height of the sprite image will be within view of the canvas while randomely resetting
            this.x = Math.floor(Math.random() * (800)) + (640 + this._width); // (Using 640 + width of sprite: so it doesn't pop onto the screen, but off-screen for better transition into the scene)
        };
        /**
         * Checks if Pickup2 needs to Reset after scrolling beyond the canvas via the entire width of the barrel sprite (better transitioning for resetting)
         */
        pickup2.prototype._checkBounds = function () {
=======
        Pickup2.prototype._reset = function () {
            this.y = Math.floor(Math.random() * (480 - this._height)) + (this._height * 0.5); // the entire height of the sprite image will be within view of the canvas while randomely resetting
            this.x = Math.floor(Math.random() * (1600)) + (640 + this._width); // (Using 640 + width of sprite: so it doesn't pop onto the screen, but off-screen for better transition into the scene)
        };
        /**
         * Checks if Barrel needs to Reset after scrolling beyond the canvas via the entire width of the barrel sprite (better transitioning for resetting)
         */
        Pickup2.prototype._checkBounds = function () {
>>>>>>> Stashed changes
            if (this.x <= -this._width) {
                this._reset();
            }
        };
<<<<<<< Updated upstream
        return pickup2;
    })(objects.GameObject);
    objects.pickup2 = pickup2;
})(objects || (objects = {}));
=======
        return Pickup2;
    })(objects.GameObject);
    objects.Pickup2 = Pickup2;
})(objects || (objects = {}));
//# sourceMappingURL=pickup2.js.map
>>>>>>> Stashed changes
