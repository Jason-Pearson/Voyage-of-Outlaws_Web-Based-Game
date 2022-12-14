var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Space = (function (_super) {
        __extends(Space, _super);
        //CONTRUCTOR
        function Space() {
            _super.call(this, assets.getResult("Space")); // make a super call to the createjs.Bitmap class to hold the Ocean.png from the manifest in the assets variable (in game.ts)
            //basically what would be called in the Start method
            this._dx = 5;
            this._reset();
        }
        //PUBLIC METHODS
        /**
         * Update Method for Ocean Class
         */
        Space.prototype.update = function () {
            this.x -= this._dx; //every frame, the position of the Ocean is decremented by _dx= 5(pixels)
            this._checkBounds(); //every frame, call _checkBounds to check the bounds before resetting Ocean
        };
        //PRIVATE METHODS
        /**
         * Resets the Ocean to x = 0
         */
        Space.prototype._reset = function () {
            this.x = 0;
        };
        /**
         * Checks if Ocean needs to Reset after scrolling to x=-1280
         */
        Space.prototype._checkBounds = function () {
            if (this.x <= -1280) {
                this._reset();
            }
        };
        return Space;
    })(createjs.Bitmap);
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map