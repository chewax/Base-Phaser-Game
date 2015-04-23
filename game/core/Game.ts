/// <reference path="../../lib/phaser.d.ts"/>
/// <reference path="../states/Boot.ts"/>
/// <reference path="../states/Preloader.ts"/>
/// <reference path="../states/Menu.ts"/>
/// <reference path="../states/Level1.ts"/>
/// <reference path="../utils/Config.ts"/>
/// <reference path="../core/InputManager.ts"/>



module Core{

    export class Game extends Phaser.Game{

        conf: Utils.Config;
        imanager: Core.InputManager;

        constructor () {

            //Init the config object
            this.conf = new Utils.Config();

            //Create the Game Class
            super(this.conf.world.width, this.conf.world.height, Phaser.CANVAS, 'game', null);

            //Init the input manager
            this.imanager = new Core.InputManager(this);

            //Add States
            this.state.add('Boot', GameStates.Boot, false);
            this.state.add('Preloader', GameStates.Preloader, false);
            this.state.add('Menu', GameStates.Menu, false);
            this.state.add('Level1', GameStates.Level1, false);

            //Init the first state to be called: boot.
            this.state.start('Boot');
        }

    }

}