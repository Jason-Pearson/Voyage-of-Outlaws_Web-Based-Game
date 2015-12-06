module objects {
    export class Ocean extends createjs.Bitmap { // Ocean class/controller - extends to createjs.Bitmap in order to reference the Ocean.png as a Bitmap throughout this class
        //PRIVATE INSTANCE VARIABLES
        private _dx: number; // the speed on the x-axis to which the Ocean will scroll

        //CONTRUCTOR
        constructor() {
            super(assets.getResult("Sand")); // make a super call to the createjs.Bitmap class to hold the Ocean.png from the manifest in the assets variable (in game.ts)

            //basically what would be called in the Start method
            this._dx = 5;
            this._reset();
            
        }

        //PUBLIC METHODS

        /**
         * Update Method for Ocean Class
         */
        public update(): void {
            this.x -= this._dx; //every frame, the position of the Ocean is decremented by _dx= 5(pixels)
            this._checkBounds(); //every frame, call _checkBounds to check the bounds before resetting Ocean
        }

        //PRIVATE METHODS

        /**
         * Resets the Ocean to x = 0
         */
        private _reset(): void {
            this.x = 0;
        }

        /**
         * Checks if Ocean needs to Reset after scrolling to x=-1280
         */
        private _checkBounds(): void {
            if (this.x <= -1280) {
                this._reset();
            }
        }
    }
}