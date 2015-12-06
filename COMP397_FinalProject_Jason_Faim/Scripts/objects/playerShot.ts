module objects {
    //Ship Class - to create the Ship gameobject, making a variable of this type holding the Ship sprite/gameobject
    export class playerShot extends objects.GameObject { // extends to gameobject class in order to create Ship sprite/gameobject
        
        public game: states.Game;
        public speed: number;

        // COSNTRUCTOR
        constructor() {
            super("Blast2");

            this.speed = 15
            //Start Spawn Position - preferrably in front of the player
            this.y = game._ship.y;
            this.x = (game._ship.x) + 60;
        }

        public update(): void {
            this.x += this.speed; //every frame, update the y-position of the Ship affixed to the mouse's y-position
            this._removeClone();
        }

        private _removeClone(): void {
            if (this.x >= 600) {
                game.stage.removeChild(this);
            }
        }


    }
}