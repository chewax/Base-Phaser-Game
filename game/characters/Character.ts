/// <reference path="../../lib/phaser.d.ts"/>
/// <reference path="CharStates.ts"/>
module Characters {

    export class Character {

        game: Phaser.Game;
        state: Characters.State;

        constructor (game: Phaser.Game){
            this.game = game;
        }

        update () {
            var newState = this.state.update();

            // If the update returned a different state then
            // we must exit the previous state, start the new one and assign the new one
            if (newState !== this.state) {
                this.state.exitState();
                newState.enterState();
                this.state = newState;
            }
        }
    }
}