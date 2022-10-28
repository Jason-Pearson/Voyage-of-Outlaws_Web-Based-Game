var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Hunters = (function (_super) {
        __extends(Hunters, _super);
        //CONTRUCTOR
        function Hunters() {
            _super.call(this, "AssaultboatB"); // makes a super call to the GameObject class, gives imageString value to refer to Leviathan in the Atlus SpriteSheet variable
            //basically what would be called in the Start method 
            this._reset();
        }
        //PUBLIC METHODS
        /**
         * Update Method for Enemy Class
         */
        Hunters.prototype.update = function () {
            //this.y -= this._dy; //every frame, the position of the Enemy is decremented by _dy= 5(pixels)
            this.x -= this._dx; //every frame, the position of the Enemy is decremented by _dx= 5(pixels)
            this._checkBounds(); //every frame, call _checkBounds to check the bounds before resetting Enemy
        };
        //PRIVATE METHODS
        /**
         * Resets the Enemy just before the canvas at x = 640 + width, and resets at a random y-position within the height of the canvas
         */
        Hunters.prototype._reset = function () {
            //this._dy = Math.floor(Math.random() * 4) - 2; // vertical drift
            this._dx = Math.floor(Math.random() * 10) + 9; // horizontal speed
            this.y = Math.floor(Math.random() * (480 - this._height)) + (this._height * 0.5); // the entire height of the sprite image will be within view of the canvas while randomely resetting, but the verticle drift will make that irrelevant
            this.x = Math.floor(Math.random() * 1200) + (640 + this._width); // reset just before the canvas via the full width of the sprite image, for better transitioning into the scene
        };
        /**
         * Checks if Enemy needs to Reset after scrolling beyond the canvas via the entire width of the enemy sprite (better transitioning for resetting)
         */
        Hunters.prototype._checkBounds = function () {
            if (this.x <= -this._width) {
                this._reset();
            }
        };
        return Hunters;
    })(objects.GameObject);
    objects.Hunters = Hunters;
})(objects || (objects = {}));
//# sourceMappingURL=hunters.js.map