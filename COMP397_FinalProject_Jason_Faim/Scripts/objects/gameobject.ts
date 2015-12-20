module objects {
    //Game Object Class - extends to createjs.Sprite class properties - to make sprites in the atlas a legit gameobject (object of this class) to use for coding
    export class GameObject extends createjs.Sprite {
        //PROTECTED INSTANCE VARIABLES - can pass them to subclasses
        protected _width: number; // To Hold the pixel by pixel dimensions of a gameobject 
        protected _height: number;
        protected _isColliding: boolean; // To hold boolean value of the collsion of a gameobject
        public _tagName: string; // To hold imagestring name of the gameobject 

        //CONSTRUCTOR
        constructor(imageString: string) { // argument is a string variable for the name of the sprite object in the atlas
            super(atlas, imageString); // makes a super call to creatjs.Sprite class to the SpriteSheet object Atlus, plus the specific sprite object via imageString, and hold it in a reference variable of type GameObject

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
        public getPosition(): createjs.Point {
            var position: createjs.Point = new createjs.Point(this.x, this.y); // Hold Point value of the GameObject object (x and y positions)
            return position;
        }

        /**
         * Public Utility Method - to get half the height of a GameObject - FOR COLLISION DETECTION
         */
        public getHalfHeight(): number {
            return this._height * 0.5;
        }

        /**
         * Public Utility Method - to check if a GameObject is currently colldiing
         * Uses a boolean instead for a single check
         * Getter Method - to check the collision flag of GameObject
         */
        public getIsColliding(): boolean {
            return this._isColliding;
        }

        /**
         * Public Utility Method - to check if a GameObject is currently colldiing
         * Uses a boolean instead for a single check
         * Setter Method - to set the collision flag of GameObject - True or False
         */
        public setIsColliding(isColliding:boolean) {
            this._isColliding = isColliding;
        }

        /**
         * Getter Method - to get the tag name of the GameObject (via imagestring variable)
         */
        public getName(): string {
            return this._tagName;
        }
        /**
         * Setter Method - to set the tag name of the GameObject (via imagestring variable)
         */
        public setName(_tagName:string) {
            this._tagName = _tagName;
        }
    }
}