module objects
{
    //Ship Class - to create the Ship gameobject, making a variable of this type holding the Ship sprite/gameobject
    export class Ship extends objects.GameObject{ // extends to gameobject class in order to create Ship sprite/gameobject
        // COSNTRUCTOR
        constructor() {
            super("l0_SpaceShip0021"); // makes a super call to the GameObject class, gives imageString value to refer to Ship in the Atlus SpriteSheet variable

            this.x = 60; // set the Ship gameobject at a specific point on the canvas from the Start
        }

        //Below is a Method Definition for better Code-Hinting
        /**
         * Update Method for Ship Class
         */
        public update():void {
            this.y = stage.mouseY; //every frame, update the y-position of the Ship affixed to the mouse's y-position
            this._checkBounds();
        }

        private _checkBounds(): void {
            if (this.y >= 430) {
                this.y = 430;
            }
            else if (this.y <= 40) {
                this.y = 40;
            }
        }

    }
} 