var T3 = T3 || {};

T3.GameOptions = {
    aspectRatio: 16 / 9,
    animations: {
        keys: {
            drawBoard: 'drawBoard',
            drawCross: 'drawCross',
            drawCircle: 'drawCircle',
            drawCrossCube: 'drawCrossCube',
            drawCircleCube: 'drawCircleCube'
        },
        botCubeDelay: 1000,
        alphaTweenSpeed: 1000,
        iconAppearAnimationDelay: 500,
        boardRemoveDelay: 1000,
        buttonTweenDelay: 500
    },
    storage: {
        difficulty: "t3difficultyLevel"
    },
    scenes: {
        bootScene: "BootScene",
        preloadScene: "PreloadScene",
        mainMenuScene: "MainMenuScene",
        gameScene: "GameScene",
        gameEndScene: "GameEndScene"
    }
};

const PlayerType = {
    Bot: 0,
    Human: 1
};

const DifficultyLevel = {
    Easy: 1,
    Medium: 2,
    Hard: 3
};

/* Resizing the game to cover the wider area possible */
function resizeGame() {
    let canvas = document.querySelector("canvas");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowRatio = windowWidth / windowHeight;
    let gameRatio = T3.game.config.width / T3.game.config.height;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}

window.onload = function () {
    let width = 1080;

    T3.GameConfig = {
        width: width,
        height: width * T3.GameOptions.aspectRatio,
        backgroundColor: 0x14BDAC,
        scene: [BootScene, PreloadScene, MainMenuScene, GameScene, GameEndScene]
    };

    /* Initializing the Phaser 3 framework */
    T3.game = new Phaser.Game(T3.GameConfig);
    window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame);
};