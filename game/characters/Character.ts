/// <reference path="../../lib/phaser.d.ts"/>
/// <reference path="CharStates.ts"/>
module Characters {

    export class Character {

        game: Phaser.Game;
        state: Characters.State;

        constructor (game: Phaser.Game){
            this.game = game;
        }
    }
}