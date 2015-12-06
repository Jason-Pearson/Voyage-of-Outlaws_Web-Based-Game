 module managers {
	// Scoreboard class +++++++++++++++++++++++++++++++++++
	export class ScoreBoard {
		// PRIVATE INSTANCE VARIABLES
		public _barrels:number; // hold the number of barrels plundered
		private _lives:number; // hold the number of lives the player/ship has
		
		// PUBLIC PROPERTIES
		public setBarrels(value:number):void {
			this._barrels = value;
		}
		
		public getBarrels():number {
			return this._barrels;
		}
		
		public setLives(value:number):void {
			this._lives = value;
		}
		
		public getLives():number {
			return this._lives;
		}
		
		/**
		 * Empty Constructor
		 */
		constructor() {
			
		}
		
		// PUBLIC METHODS
        /**
		 * Update Method
		 */
        public update(): void {

        }
		
		/**
		 * AddScore method - adds points to the _score
		 */
        public addBarrels(plundered: number): void {
            this._barrels += plundered;
        }
		
		/**
		 * AddLives method - adds lives to the _lives
		 */
        public addLives(lives: number): void {
            this._lives += lives;
        }
		
		/**
		 * RemoveLives method - removes lives from  _lives
		 */
        public removeLives(lives: number): void {
            this._lives -= lives;
        }
     }
 }