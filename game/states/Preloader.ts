/// <reference path="../../lib/phaser.d.ts"/>
/// <reference path="Menu.ts"/>

module GameStates {

    export class Preloader extends Phaser.State {

        preloadBar;

        preload () {

            this.preloadBar = this.add.sprite(200,250,'loadbar');
            this.preloadBar.anchor.setTo(0.5);

            this.load.setPreloadSprite(this.preloadBar);
            this.loadAssets();
        }
        create () {

            this.game.state.start('Menu', true, false);
        }

        loadAssets () {

        }
    }
}
