class GameEndScene extends Phaser.Scene {
    constructor() {
        super(T3.GameOptions.scenes.gameEndScene);
    }

    init(data) {
        this.winner = data.winner;

        this.playAgain = null;
        this.resultText = null;
        this.winnerSymbol = null;

        this.previousClientWidth = 0;
        this.previousClientHeight = 0;

        this.isPortraitMode = true;
    }

    create() {
        let gameTitle = this.add.image(T3.game.config.width / 2, 90, "gametitle");
        gameTitle.setOrigin(0.5, 0);

        this.resultText = this.add.image(T3.game.config.width / 2, T3.game.config.height + 90, "drawText");
        this.resultText.setOrigin(0.5, 0);

        this.winnerSymbol = this.add.image(T3.game.config.width / 2, T3.game.config.height + 512, "egg");
        this.winnerSymbol.setOrigin(0.5, 0);

        this.playAgain = this.add.image(T3.game.config.width / 2, T3.game.config.height + 90, "playAgain");
        this.playAgain.setOrigin(0.5, 0);
        this.playAgain.setInteractive();
        this.playAgain.on('pointerdown', this.loadGameMenuScene, this);

        this.showResult();
    }

    update() {
        if (this.sys.game.device.os.android || this.sys.game.device.os.iPhone || this.sys.game.device.os.iPad) {
            let clientWidth = document.documentElement.clientWidth;
            let clientHeight = document.documentElement.clientHeight;
            if (clientWidth !== this.previousClientWidth || clientHeight !== this.previousClientHeight) {
                this.previousClientWidth = clientWidth;
                this.previousClientHeight = clientHeight;
                this.handleScreenSizeChange();
            }
        }
    }

    handleScreenSizeChange() {
        if (this.previousClientWidth > this.previousClientHeight) {
            this.isPortraitMode = false;
            document.getElementById("turn").style.display = "block";
        }
        else {
            this.isPortraitMode = true;
            document.getElementById("turn").style.display = "none";
        }
    }

    showResult() {
        if (this.winner === PlayerType.Human) {
            this.resultText.setTexture('winText');
            this.winnerSymbol.setTexture('cup');
        }
        else if (this.winner === PlayerType.Bot) {
            this.resultText.setTexture('looseText');
            this.winnerSymbol.setTexture('robotFace');
        }
        else {
            this.resultText.setTexture('drawText');
            this.winnerSymbol.setTexture('egg');
        }

        this.tweens.add({
            targets: [this.resultText],
            y: (T3.game.config.height / 4) * 1.5,
            duration: T3.GameOptions.animations.buttonTweenDelay,
            callbackScope: this,
            onComplete: function () {
                this.tweens.add({
                    targets: [this.winnerSymbol],
                    y: T3.game.config.height / 2,
                    duration: T3.GameOptions.animations.buttonTweenDelay * 2,
                    callbackScope: this,
                    onComplete: function () {
                        this.tweens.add({
                            targets: [this.playAgain],
                            y: T3.game.config.height - 180,
                            duration: T3.GameOptions.animations.buttonTweenDelay
                        });
                    }
                });
            }
        });
    }

    loadGameMenuScene() {
        this.tweens.add({
            targets: [this.playAgain],
            y: T3.game.config.height + 90,
            duration: T3.GameOptions.animations.buttonTweenDelay,
            callbackScope: this,
            onComplete: function () {
                this.tweens.add({
                    targets: [this.winnerSymbol],
                    y: T3.game.config.height + 512,
                    duration: T3.GameOptions.animations.buttonTweenDelay * 2,
                    callbackScope: this,
                    onComplete: function () {
                        this.tweens.add({
                            targets: [this.resultText],
                            y: T3.game.config.height + 90,
                            duration: T3.GameOptions.animations.buttonTweenDelay,
                            callbackScope: this,
                            onComplete: function () {
                                this.scene.start(T3.GameOptions.scenes.mainMenuScene);
                            }
                        });
                    }
                });
            }
        });
    }
}