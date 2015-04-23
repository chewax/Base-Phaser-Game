/// <reference path="../../lib/phaser.d.ts"/>
/// <reference path="Level1.ts"/>

module GameStates {

    export class Menu extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;

        preload () {

        }


        create () {

            var text = 'Press ENTER to start';
            var style = { font: "40px Arial", fill: "#ff0044", align: "center" };
            var menuText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, text, style);
            menuText.anchor.set(0.5,0.5);
        }

        update () {
            //Get Start Option From Input Manager
            var start = (<Core.Game> this.game).imanager.startGame();

            if (start){
                this.game.state.start('Level1');
            }
        }
    }
}
