// import { postData } from '../javascript/utility/api-tools.js';

var game = new Phaser.Game(700, 490, Phaser.AUTO, "game");
var mainState = {

  preload: function () {
    if (!game.device.desktop) {
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      game.scale.setMinMax(game.width / 2, game.height / 2, game.width, game.height);
    }

    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#1350d4';
    game.load.image('fish', 'images/SwimmyFish/fish.png');
    game.load.image('seaweed', 'images/SwimmyFish/seaweed.png');
  },

  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.seaweeds = game.add.group();
    this.clock = game.time.events.loop(1500, this.addRowOfSeaweeds, this);
    this.fish = game.add.sprite(200, 50, 'fish');
    game.physics.arcade.enable(this.fish);
    this.fish.body.gravity.y = 0;
    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.spaceAction, this);

    this.paused = true;
    this.clock.paused = true;
    this.startLabel = game.add.text(200, 300, "Press [SPACE] to Start!", { font: "30px Arial", fill: "#ffffff" });

    this.score = 0;
    this.labelScore = game.add.text(300, 75, "0", { font: "60px Arial", fill: "#ffffff" });
  },

  update: function () {
    if (!this.paused) {
      this.startLabel.text = "";

      if (this.fish.y < 0 || this.fish.y > game.world.height)
        this.hitSeaweed();

      game.physics.arcade.overlap(this.fish, this.seaweeds, this.hitSeaweed, null, this);

      if (this.fish.alive) {
        this.score += 1;
        this.labelScore.text = this.score;
      }
    }
  },

  spaceAction: function () {
    if (this.paused) {
      this.paused = false;
      this.fish.body.gravity.y = 1000;
    } else {
      if (this.fish.alive == false)
        this.restartGame();
      else
        this.jump();
    }
  },

  jump: function () {
    if (this.fish.alive == false)
      return;

    this.fish.body.velocity.y = -350;
  },

  hitSeaweed: function () {
    if (this.fish.alive == false)
      return;

    this.fish.alive = false;
    game.time.events.remove(this.clock);
    this.seaweeds.forEach(function (p) {
      p.body.velocity.x = 0;
    }, this);
    this.gameOver();
  },

  restartGame: function () {
    game.state.start('main');
  },

  addOneSeaweed: function (x, y) {
    var seaweed = game.add.sprite(x, y, 'seaweed');
    this.seaweeds.add(seaweed);
    game.physics.arcade.enable(seaweed);

    seaweed.body.velocity.x = -200;
    seaweed.outOfBoundsKill = true;
    seaweed.checkWorldBounds = true;
  },

  addRowOfSeaweeds: function () {
    if (!this.paused) {
      var hole = Math.floor(Math.random() * 5) + 1;

      for (var i = 0; i < 20; i++)
        if (i < hole || i > hole + 5)
          this.addOneSeaweed(700, i * 40);
    }
  },

  gameOver: function () {
    this.gameOverMessage = game.add.text(160, 250, "GAME OVER!", { font: "60px Arial", fill: "#ffffff" });
    this.restartMessage = game.add.text(165, 350, "Press [Space] to Play Again", { font: "30px Arial", fill: "#ffffff" });
    this.sendScore();
  },

  sendScore: function () {
    // Getting player's initials
    var initials = prompt("Please enter your initials");

    //TODO: Send Score Code
    // Format Data
    const scoreData = {
      'scoreid': null,
      'gameid': 3,
      'score': this.score,
      'initial': initials
    }
    // Submit the score
    fetch('/score/submitScore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(scoreData)
    })
    //postData('/score/submitScore', scoreData, this.submitSuccess, this.submitFailed)
  },

  submitSuccess: function (response) {
    window.alert(response.message)
  },

  submitFailed: function (err) {
    window.alert(err.error)
  }
};

game.state.add('main', mainState);
game.state.start('main');