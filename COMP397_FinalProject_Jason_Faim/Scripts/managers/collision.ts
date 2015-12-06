module managers {
    // COLISSION CLASS +++++++++++++++++++++++++++++++++
    export class Collision {        
        /**
		 * Empty Constructor
		 */
        constructor() {
        }
		
		/**
		 * Update Method for Collision Class - check the collision between two gameobjects
		 * This method needs two GameObjects to hold as arugments to pass into the CheckCollision Method
		 * public update(object1: objects.GameObject, object2: objects.GameObject)
		 */
        public update(object1: objects.GameObject, object2: objects.GameObject, num:number): void {
            this._checkCollision(object1, object2, num)
        }

        /**
         * Private Utility Method - Distance - returns distance between two points in pixels in an integer - FOR COLLISION DETECTION
         * √((x2 - x1)^2) + ((y2 - y1)^2) = Distance (integer via Math.floor)
         */
        private _distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        /**
         * Private Utility Method - Check Collision - checks the collision between two gameobjects
         * GameObjects are passed into this method by the arguments of the Update Method of the Collsion Class   
         */
        private _checkCollision(object1: objects.GameObject, object2: objects.GameObject, num:number): void {
            // if the (distance between ship and other gameobject) is less than (half the height of the Ship + half the height of the other game object) = Collision
            if (this._distance(object1.getPosition(), object2.getPosition()) <
                (object1.getHalfHeight() + object2.getHalfHeight())) {
                    
                    
                //Check if Ship is not ALREADY colliding - when it first enters collision (registers a hit), it is set to true only ONCE - the distance will be rechecked every frame, but not this collision when it is already true 
                if (!object2.getIsColliding()) {
                    switch (object2.getName()) { // checks what other is via their tagName, and executes the code for the collision accordingly...
                        case "Pickup": //if tag name is Barrel (pickup)
                            console.log("Hit Barrel");
                            createjs.Sound.play("pickup"); // play game music at Start - infinite loop (-1)
                            scoreboard.addBarrels(10);
                            game._barrelReset(num);
                            break;
                        case "Fighter3": // is tag name is Leviathan (enemy)
                            console.log("Hit Leviathan");
                            createjs.Sound.play("damage"); // play game music at Start - infinite loop (-1)
                            scoreboard.removeLives(1);
                            game._enemyReset(num);
                            break;
                    }
                    object2.setIsColliding(true); // if it is currently colliding, then IsColliding is set and remains True
                }
            }//THIS EXTRA BRACKET IS MAKES THE IF STATEMENT FOR !OBJECT.GETISCOLLIDING NOT ACTIVATED WHILE DISTANCT CHECK = TRUE --> SINCE SETISCOLLIDING(TRUE) AFTER THE VERY FIRST CHECK!!!
            else { //otherwise, until the distance check is not true...
                object2.setIsColliding(false);// if it is not currently colliding, then IsColliding is set and remains False
            }


        }
    }
}