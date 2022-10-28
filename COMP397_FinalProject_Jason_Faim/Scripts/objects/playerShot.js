var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //Ship Class - to create the Ship gameobject, making a variable of this type holding the Ship sprite/gameobject
    var playerShot = (function (_super) {
        __extends(playerShot, _super);
        // COSNTRUCTOR
        function playerShot() {
            _super.call(this, "Blast2");
            //this.speed = 15
            //Start Spawn Position - preferrably in front of the player
            this.x = (game._ship.x) + 60;
            //this.y = game._ship.y;
        }
        playerShot.prototype.update = function () {
            this.y = stage.mouseY; //TESTING PURPOSES
            //this.x += this.speed; //every frame, update the y-position of the Ship affixed to the mouse's y-position
            //this._removeClone();
            //this._blastShot();
        };
        return playerShot;
    })(objects.GameObject);
    objects.playerShot = playerShot;
})(objects || (objects = {}));
//# sourceMappingURL=playershot.js.map