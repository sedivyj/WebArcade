class BootScene extends Phaser.Scene {
    constructor() {
        super(T3.GameOptions.scenes.bootScene);
    }

    preload() {
        this.load.image("logo", "assets/sprites/logo.png");
    }

    create() {
        this.scene.start(T3.GameOptions.scenes.preloadScene);
    }
}