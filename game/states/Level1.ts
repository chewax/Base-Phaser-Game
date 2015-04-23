/// <reference path="../../lib/phaser.d.ts"/>

module GameStates {

    export class Level1 extends Phaser.State {

        preload () {

        }

        create () {

            //Setup Physics Engine
            this.configurePhysics();

            //Configure Base Stage Options
            this.setBaseStage();

            //Configure Input type
            this.configureInput();
        }

        update () {

        }

        configureInput(){

        }

        configurePhysics() {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
        }

        setBaseStage() {
            this.game.stage.backgroundColor = "#666";
        }

    }
}
