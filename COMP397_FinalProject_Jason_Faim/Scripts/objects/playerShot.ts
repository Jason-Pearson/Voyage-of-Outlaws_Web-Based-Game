/*
    File:               playerShot.ts
    Author:             Khandker Hussain
    Date Modified:      12/6/2015
    Description:        Instantiating the shots created by the player (ship)
    Revision History:   IDK...
*/
module objects
{
    //Ship Class - to create the Ship gameobject, making a variable of this type holding the Ship sprite/gameobject
    export class playerShot extends objects.GameObject { // extends to gameobject class in order to create Ship sprite/gameobject
        
        public game: states.Game;
        public speed: number;

        // COSNTRUCTOR
        constructor()
        {
            super("Blast2");

            //this.speed = 15
            //Start Spawn Position - preferrably in front of the player
            this.x = (game._ship.x) + 60;
            this.y = game._ship.y;
        }

        public update(): void
        {
            //this.y = stage.mouseY;//TESTING PURPOSES
            this.x += this.speed; //every frame, update the y-position of the Ship affixed to the mouse's y-position
            //this._removeClone();
            this._blastShot();
        }

        //private _removeClone(): void {
        //    if (this.x >= 600) {
        //        game.stage.removeChild(this);
        //    }
        //}

        private _blastShot(): void
        {
            stage.addEventListener("click", function (event)
            {
                alert("clicked");
            })
        }
    }
}