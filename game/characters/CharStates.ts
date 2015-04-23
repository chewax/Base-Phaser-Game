/// <reference path="../../lib/phaser.d.ts"/>
/// <reference path="Character.ts"/>

module Characters {

    /**
     * @interface CharState
     * Interface for classes that represent a Character State
     *
     * Implements the State Pattern. Sets up a FSM in whiche every state knows how to handle its events and derives
     * to the next state
     */
    export interface State {

        /**
         * @function update
         * @returns {CharState}
         * handles the update logic for current state.
         */
        update():Characters.State;
        enterState():void;
        exitState():void;
    }


    /**
     * Contains all the generic behaviour for the States.
     * @class BaseState
     * @implements CharState
     * @param {Phaser.Game} game - the instance of the current game
     *
     */
    class BaseState implements Characters.State {

        game: Phaser.Game;
        char: Characters.Character;

        /**
         * @param {Phaser.game} game instance
         * @param {Characters.Character} char instance
         */
        constructor (game: Phaser.Game, char: Characters.Character){
            this.game = game;
            this.char = char;
        }

        public update (): Characters.State {
            return null;
        }

        public enterState(): void {}
        public exitState(): void {}
    }


}