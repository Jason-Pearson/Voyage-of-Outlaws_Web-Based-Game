var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //Ship Class - to create the Ship gameobject, making a variable of this type holding the Ship sprite/gameobject
    var Ship = (function (_super) {
        __extends(Ship, _super);
        // COSNTRUCTOR
        function Ship() {
            _super.call(this, "l0_SpaceShip0021"); // makes a super call to the GameObject class, gives imageString value to refer to Ship in the Atlus SpriteSheet variable
            this.x = 60; // set the Ship gameobject at a specific point on the canvas from the Start
        }
        //Below is a Method Definition for better Code-Hinting
        /**
         * Update Method for Ship Class
         */
        Ship.prototype.update = function () {
            this.y = stage.mouseY; //every frame, update the y-position of the Ship affixed to the mouse's y-position
            this._checkBounds();
        };
        Ship.prototype._checkBounds = function () {
            if (this.y >= 430) {
                this.y = 430;
            }
            else if (this.y <= 40) {
                this.y = 40;
            }
        };
        return Ship;
    })(objects.GameObject);
    objects.Ship = Ship;
})(objects || (objects = {}));
//# sourceMappingURL=ship.js.map