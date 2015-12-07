var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    File:               gameobject.ts
    Author:             Jason Pearson
    Date Modified:      12/5/2015
    Description:        ...
    Revision History:   IDK...
*/
var objects;
(function (objects) {
    //Game Object Class - extends to createjs.Sprite class properties - to make sprites in the atlas a legit gameobject (object of this class) to use for coding
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        //CONSTRUCTOR
        function GameObject(imageString) {
            _super.call(this, atlas, imageString); // makes a super call to creatjs.Sprite class to the SpriteSheet object Atlus, plus the specific sprite object via imageString, and hold it in a reference variable of type GameObject
            this._tagName = imageString;
            //get the bounds of width and height from gameobject in contruction
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
            this.regX = this._width * 0.5;
            this.regY = this._height * 0.5;
            this._isColliding = false;
        }
        //PUBLIC UTILITY METHODS
        /**
         * Public Utility Method - to get current position of any and all GameObjects and return it via the position variable (point)
         * This variable works for all GameObjects since they inherit the GameObject class
         */
        GameObject.prototype.getPosition = function () {
            var position = new createjs.Point(this.x, this.y); // Hold Point value of the GameObject object (x and y positions)
            return position;
        };
        /**
         * Public Utility Method - to get half the height of a GameObject - FOR COLLISION DETECTION
         */
        GameObject.prototype.getHalfHeight = function () {
            return this._height * 0.5;
        };
        /**
         * Public Utility Method - to check if a GameObject is currently colldiing
         * Uses a boolean instead for a single check
         * Getter Method - to check the collision flag of GameObject
         */
        GameObject.prototype.getIsColliding = function () {
            return this._isColliding;
        };
        /**
         * Public Utility Method - to check if a GameObject is currently colldiing
         * Uses a boolean instead for a single check
         * Setter Method - to set the collision flag of GameObject - True or False
         */
        GameObject.prototype.setIsColliding = function (isColliding) {
            this._isColliding = isColliding;
        };
        /**
         * Getter Method - to get the tag name of the GameObject (via imagestring variable)
         */
        GameObject.prototype.getName = function () {
            return this._tagName;
        };
        /**
         * Setter Method - to set the tag name of the GameObject (via imagestring variable)
         */
        GameObject.prototype.setName = function (_tagName) {
            this._tagName = _tagName;
        };
        return GameObject;
    })(createjs.Sprite);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map