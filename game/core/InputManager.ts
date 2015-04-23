/// <reference path="../../lib/phaser.d.ts"/>

module Core{

    export class InputManager{

        game: Phaser.Game;

        /**
         * Returns an instance of the class.
         * @param game - An instance of the current game class
         */
        constructor (game:Phaser.Game) {
            this.game = game;
        }

        jumpInput():boolean {
            return true;
        }

        sprintInput():boolean {
            return true;
        }

        fireInput():boolean {
            return true;
        }

        startGame():boolean {
            return true;
        }

    }

}