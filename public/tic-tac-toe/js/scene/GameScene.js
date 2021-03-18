class GameScene extends Phaser.Scene {
    constructor() {
        super(T3.GameOptions.scenes.gameScene);
    }

    init(data) {
        this.data = data;

        this.firstPlayer = this.data.firstPlayer;
        this.difficulty = this.data.difficulty;
        this.currentTurn = this.firstPlayer;
        this.allowUserInput = false;
        this.isPlayingReverse = false;
        this.boardState = null;
        this.winner = null;
        this.isRestarting = false;

        this.gameTitle = null;
        this.restart = null;
        this.board = null;

        this.previousClientWidth = 0;
        this.previousClientHeight = 0;

        this.isPortraitMode = true;

        this.usedCubesSprite = null;
    }

    create() {
        /* Adding UI images */
        this.gameTitle = this.add.image(T3.game.config.width / 2, 90, "gametitle");
        this.gameTitle.setOrigin(0.5, 0);

        /* Game board */
        this.board = this.add.sprite(T3.game.config.width / 2, T3.game.config.height / 2, "board", 0);
        this.board.setOrigin(0.5, 0.5);
        this.board.setInteractive();
        this.board.on('pointerdown', this.handleBoardTap, this);

        this.restart = this.add.image(T3.game.config.width / 2, T3.game.config.height + 90, "restart");
        this.restart.setOrigin(0.5, 1);
        this.restart.setInteractive();
        this.restart.on('pointerdown', this.goToMainMenu, this);

        /* Initializing sounds */
        this.playerSound = this.sound.add("playerSound");
        this.botSound = this.sound.add("botSound");

        this.usedCubesSprite = this.add.group();

        this.initBoard();
        this.showEntryAnimation();
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

    initBoard() {
        this.boardState = [];

        /* Initializing individual empty element */
        this.boardState.push({used: null, player: null, index: 0, center: {x: null, y: null}});
        this.boardState.push({used: null, player: null, index: 1, center: {x: null, y: null}});
        this.boardState.push({used: null, player: null, index: 2, center: {x: null, y: null}});
        this.boardState.push({used: null, player: null, index: 3, center: {x: null, y: null}});
        this.boardState.push({used: null, player: null, index: 4, center: {x: null, y: null}});
        this.boardState.push({used: null, player: null, index: 5, center: {x: null, y: null}});
        this.boardState.push({used: null, player: null, index: 6, center: {x: null, y: null}});
        this.boardState.push({used: null, player: null, index: 7, center: {x: null, y: null}});
        this.boardState.push({used: null, player: null, index: 8, center: {x: null, y: null}});

        this.calculateBoardCenters();
    }

    calculateBoardCenters() {
        let boardBorderWidth = ((this.board.height / 100) * 4.286);
        let halfCube = Math.round((this.board.height - boardBorderWidth * 2) / 6);

        let top = this.board.getTopLeft().y;
        let bottom = this.board.getBottomRight().y;
        let left = this.board.getTopLeft().x;
        let right = this.board.getBottomRight().x;
        let center = this.board.getCenter();

        /* Calculation center location */
        this.boardState[0].center = {x: left + halfCube, y: top + halfCube};
        this.boardState[1].center = {x: center.x, y: top + halfCube};
        this.boardState[2].center = {x: right - halfCube, y: top + halfCube};

        this.boardState[3].center = {x: left + halfCube, y: center.y};
        this.boardState[4].center = {x: center.x, y: center.y};
        this.boardState[5].center = {x: right - halfCube, y: center.y};

        this.boardState[6].center = {x: left + halfCube, y: bottom - halfCube};
        this.boardState[7].center = {x: center.x, y: bottom - halfCube};
        this.boardState[8].center = {x: right - halfCube, y: bottom - halfCube};
    }

    showEntryAnimation() {
        let timerConfig = {
            delay: T3.GameOptions.animations.iconAppearAnimationDelay,
            callback: function () {
                this.board.on('animationcomplete', function (animation) {
                    if (!this.isPlayingReverse) {
                        if (animation.key === T3.GameOptions.animations.keys.drawBoard) {
                            this.tweens.add({
                                targets: [this.restart],
                                y: T3.game.config.height - 90,
                                duration: T3.GameOptions.animations.buttonTweenDelay,
                                callbackScope: this,
                                onComplete: function () {
                                    if (this.currentTurn === PlayerType.Bot) {
                                        this.time.delayedCall(T3.GameOptions.animations.botCubeDelay, function () {
                                            this.botTurn();
                                        }, [], this);
                                    }
                                    else {
                                        this.allowUserInput = true;
                                    }
                                }
                            });
                        }
                    }
                    else {
                        this.tweens.add({
                            targets: [this.restart],
                            y: T3.game.config.height + 90,
                            duration: T3.GameOptions.animations.buttonTweenDelay,
                            callbackScope: this,
                            onComplete: function () {
                                if (this.isRestarting) {
                                    this.scene.start(T3.GameOptions.scenes.mainMenuScene);
                                }
                                else {
                                    this.scene.start(T3.GameOptions.scenes.gameEndScene, {
                                        winner: this.winner
                                    });
                                }
                            }
                        });
                    }
                }, this);
                this.isPlayingReverse = false;
                this.board.anims.play(T3.GameOptions.animations.keys.drawBoard);
            },
            callbackScope: this,
            paused: false
        };

        this.time.addEvent(timerConfig);
    }

    handleBoardTap(event) {
        if (this.allowUserInput !== true) {
            return;
        }
        this.allowUserInput = false;

        let selectedCube = this.getSelectedCube(event.x, event.y);
        let cube = this.boardState[selectedCube];
        if (cube.used) {
            this.allowUserInput = true;
            return;
        }
        cube.used = true;
        cube.player = PlayerType.Human;

        let animName = this.firstPlayer === PlayerType.Human ? T3.GameOptions.animations.keys.drawCrossCube : T3.GameOptions.animations.keys.drawCircleCube;
        let turnCube = this.add.sprite(cube.center.x, cube.center.y, this.firstPlayer === PlayerType.Human ? 'crossCube' : 'circleCube', 0);
        turnCube.setOrigin(0.5, 0.5);
        turnCube.on('animationcomplete', function (animation) {
            if (animation.key === animName) {
                /* Checking win status */
                let winCubes = this.checkWin();
                if (winCubes) {
                    this.gameEnd(winCubes, PlayerType.Human);
                }
                else {
                    this.time.delayedCall(T3.GameOptions.animations.botCubeDelay, function () {
                        this.currentTurn = PlayerType.Bot;
                        this.botTurn();
                    }, [], this);
                }
            }
        }, this);
        this.playerSound.play();
        this.usedCubesSprite.add(turnCube);
        turnCube.anims.play(animName);
    }

    getSelectedCube(x, y) {
        let relativeX = x - this.board.getTopLeft().x;
        let relativeY = y - this.board.getTopLeft().y;

        let cubeSize = this.board.height / 3;
        let cube1 = cubeSize;
        let cube2 = cubeSize * 2;
        let cube3 = cubeSize * 3;

        /* row 1 */
        if ((0 < relativeX && relativeX < cube1) && (0 < relativeY && relativeY < cube1)) {
            return 0;
        }

        if ((cube1 < relativeX && relativeX < cube2) && (0 < relativeY && relativeY < cube1)) {
            return 1;
        }

        if ((cube2 < relativeX && relativeX < cube3) && (0 < relativeY && relativeY < cube1)) {
            return 2;
        }

        /* row 2 */
        if ((0 < relativeX && relativeX < cube1) && (cube1 < relativeY && relativeY < cube2)) {
            return 3;
        }

        if ((cube1 < relativeX && relativeX < cube2) && (cube1 < relativeY && relativeY < cube2)) {
            return 4;
        }

        if ((cube2 < relativeX && relativeX < cube3) && (cube1 < relativeY && relativeY < cube2)) {
            return 5;
        }

        /* row 3 */
        if ((0 < relativeX && relativeX < cube1) && (cube2 < relativeY && relativeY < cube3)) {
            return 6;
        }

        if ((cube1 < relativeX && relativeX < cube2) && (cube2 < relativeY && relativeY < cube3)) {
            return 7;
        }

        if ((cube2 < relativeX && relativeX < cube3) && (cube2 < relativeY && relativeY < cube3)) {
            return 8;
        }

        return null;
    }

    botTurn() {
        let nextEmptyCube = null;
        if (this.difficulty === DifficultyLevel.Easy) {
            nextEmptyCube = this.nextRandomEmptyCube();
        }
        else if (this.difficulty === DifficultyLevel.Medium) {
            let rand = Math.random() * 100;
            if (rand < 50) {
                nextEmptyCube = this.nextRandomEmptyCube();
            }
            else {
                nextEmptyCube = this.nextMoveAi();
            }
        }
        else if (this.difficulty === DifficultyLevel.Hard) {
            nextEmptyCube = this.nextMoveAi();
        }

        if (!nextEmptyCube) {
            this.gameEnd(null, null);
            return;
        }
        nextEmptyCube.used = true;
        nextEmptyCube.player = PlayerType.Bot;

        let animName = this.firstPlayer === PlayerType.Bot ? T3.GameOptions.animations.keys.drawCrossCube : T3.GameOptions.animations.keys.drawCircleCube;
        let turnCube = this.add.sprite(nextEmptyCube.center.x, nextEmptyCube.center.y, this.firstPlayer === PlayerType.Bot ? 'crossCube' : 'circleCube', 0);
        turnCube.setOrigin(0.5, 0.5);
        turnCube.on('animationcomplete', function (animation) {
            if (animation.key === animName) {
                /* Checking win status */
                let winCubes = this.checkWin();
                if (winCubes) {
                    this.gameEnd(winCubes, PlayerType.Bot);
                }
                else {
                    if (!this.nextRandomEmptyCube()) {
                        this.gameEnd(null, null);
                    }
                    else {
                        this.currentTurn = PlayerType.Human;
                        this.allowUserInput = true;
                    }
                }
            }
        }, this);
        this.botSound.play();
        this.usedCubesSprite.add(turnCube);
        turnCube.anims.play(animName);
    }

    nextRandomEmptyCube() {
        let emptyCubes = [];
        for (let i = 0; i < this.boardState.length; i++) {
            let cube = this.boardState[i];
            if (!cube.used) {
                emptyCubes.push(i);
            }
        }

        if (emptyCubes.length === 0) {
            return null;
        }
        else {
            let randomCube = Phaser.Utils.Array.GetRandom(emptyCubes);
            return this.boardState[randomCube];
        }
    }

    nextMoveAi() {
        /* Converting board to array */
        let huPlayer = "O";
        let aiPlayer = "X";

        let originalBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        for (let i = 0; i < this.boardState.length; i++) {
            let cube = this.boardState[i];
            if (cube.player === PlayerType.Human) {
                originalBoard[i] = huPlayer;
            }
            else if (cube.player === PlayerType.Bot) {
                originalBoard[i] = aiPlayer;
            }
        }

        /* Finding the ultimate play on the game that favors the computer */
        let tEngine = T(originalBoard, aiPlayer, huPlayer);
        let bestSpot = tEngine.nextMove();

        /* Converting output to supported result */
        if (!bestSpot || bestSpot.index === undefined || bestSpot.index == null) {
            return null;
        }

        return this.boardState[bestSpot.index];
    }

    gameEnd(winCubes, winner) {
        this.winner = winner;
        this.isPlayingReverse = true;

        let loserCubes = [];
        for (let i = 0; i < this.usedCubesSprite.children.size; i++) {
            let cube = this.usedCubesSprite.children.entries[i];
            let isWinCube = false;
            if (winCubes) {
                for (let j = 0; j < winCubes.length; j++) {
                    if (cube.x === winCubes[j].center.x && cube.y === winCubes[j].center.y) {
                        isWinCube = true;
                        break;
                    }
                }
            }
            if (!isWinCube) {
                loserCubes.push(cube);
            }
        }

        if (loserCubes.length > 0) {
            loserCubes.forEach(function (cube) {
                this.tweens.add({
                    targets: [cube],
                    alpha: 0,
                    duration: T3.GameOptions.animations.alphaTweenSpeed
                });
            }, this);
        }

        let timerConfig = {
            delay: T3.GameOptions.animations.boardRemoveDelay,
            callback: function () {
                this.board.anims.playReverse(T3.GameOptions.animations.keys.drawBoard);
            },
            callbackScope: this,
            paused: false
        };

        this.time.addEvent(timerConfig);
    }

    checkWin() {
        /* Checking row wise */
        if (this.boardState[0].used && this.boardState[0].player === this.boardState[1].player && this.boardState[0].player === this.boardState[2].player) {
            return [this.boardState[0], this.boardState[1], this.boardState[2]];
        }

        if (this.boardState[3].used && this.boardState[3].player === this.boardState[4].player && this.boardState[3].player === this.boardState[5].player) {
            return [this.boardState[3], this.boardState[4], this.boardState[5]];
        }

        if (this.boardState[6].used && this.boardState[6].player === this.boardState[7].player && this.boardState[6].player === this.boardState[8].player) {
            return [this.boardState[6], this.boardState[7], this.boardState[8]];
        }

        /* Checking column wise */
        if (this.boardState[0].used && this.boardState[0].player === this.boardState[3].player && this.boardState[0].player === this.boardState[6].player) {
            return [this.boardState[0], this.boardState[3], this.boardState[6]];
        }

        if (this.boardState[1].used && this.boardState[1].player === this.boardState[4].player && this.boardState[1].player === this.boardState[7].player) {
            return [this.boardState[1], this.boardState[4], this.boardState[7]];
        }

        if (this.boardState[2].used && this.boardState[2].player === this.boardState[5].player && this.boardState[2].player === this.boardState[8].player) {
            return [this.boardState[2], this.boardState[5], this.boardState[8]];
        }

        /* Checking diagonals */
        if (this.boardState[4].used) {
            if (this.boardState[4].player === this.boardState[0].player && this.boardState[4].player === this.boardState[8].player) {
                return [this.boardState[0], this.boardState[4], this.boardState[8]];
            }

            if (this.boardState[4].player === this.boardState[2].player && this.boardState[4].player === this.boardState[6].player) {
                return [this.boardState[2], this.boardState[4], this.boardState[6]];
            }
        }

        return null;
    }

    goToMainMenu() {
        this.isRestarting = true;
        this.gameEnd(null, null);
    }
}