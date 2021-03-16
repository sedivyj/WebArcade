var script = document.getElementById("gamescript");
script.onload = function () {
  bootStrap();
}

function bootStrap() {
  var nickCageMode = false;
  var globalGameState;
  var countdownTimer;
  var countdownTimerDuration;
  var game;
  var timerEvent;
  var sprite;
  var player;
  var lives;
  var deathTime;
  var canMove = true;
  var playerAlive = true;
  var yjumpDistance = 1975;
  var xjumpDistance = 750; //old 1500

  var obstacles = [
    [500, -25, 368, 'redCar_Right', 'left', 50, 'obstacle', 2250, 500],
    [500, 720, 335, 'semi', 'right', 80, 'obstacle', 2500, 1000],
    [500, -25, 302, 'purpleCar', 'left', 40, 'obstacle', 3000, 1000],
    [500, 720, 269, 'redCar', 'right', 50, 'obstacle', 3000, 1000],
    [500, -25, 236, 'bike', 'left', 30, 'obstacle', 3500, 1000],
    [500, 720, 170, 'log', 'right', 60, 'log', 4500, 1000],
    [500, -125, 137, 'log', 'left', 50, 'log', 6500, 2000],
    [500, 720, 104, 'log', 'right', 30, 'log', 8500, 1500],
    [500, -125, 71, 'log', 'left', 70, 'log', 4500, 500],
    [500, 720, 38, 'log', 'right', 40, 'log', 6500, 1500]
  ];

  var obstacleGroup;

  var logGroup;
  var logSpeed = 50;
  var onLog;

  var deathNote = 0;
  var order66 = false;
  var scoreSent = false;

  var txt_SecondsLeft;
  var timeleft_seconds;
  var txt_CurrentLivesLeftValue;
  var txt_CurrentLivesLeftDisplay;
  var txt_LivesLeftLabel;

  var txt_CurrentScoreValue;
  var txt_CurrentScoreDisplay;
  var txt_ScoreLabel;
  var txt_TimeLeft;
  var txt_DynamicPrompt;
  var txt_DynamicPromptMessage = "";
  var DynamicPromptTimeOfInitialDisplay;
  var snd_jump;

  var goal1;
  var goal2;
  var goal3;
  var goal4;
  var goal5;

  var barrier;

  var frogsSaved = 0;


  var game = new Phaser.Game(720, 462, Phaser.AUTO, 'game', { preload: preload, create: create, render: render, update: update });
  var input_EnterKey;

  function preload() {

    game.load.image('img_nick', 'nick.png');
    game.load.audio('snd_jump', 'frogjump.wav');

    // LOADING ALL IMAGES

    game.load.image('img_placeholder', 'images/Frogger/level1mockupplaceholder3.png');

    //Frog Sprites
    game.load.image('frogUp', 'images/Frogger/frog_Sprite/frogBase.png');
    game.load.image('frogLeft', 'images/Frogger/frog_Sprite/frog_Left.png');
    game.load.image('frogDown', 'images/Frogger/frog_Sprite/frog_Down.png');
    game.load.image('frogRight', 'images/Frogger/frog_Sprite/frog_Right.png');
    game.load.image('frogDead', 'images/Frogger/frog_Sprite/deadFrog.png');

    //Obstacles
    game.load.image('redCar', 'images/Frogger/Obstacles/small_Car.png');
    game.load.image('purpleCar', 'images/Frogger/Obstacles/car.png');
    game.load.image('semi', 'images/Frogger/Obstacles/semi.png');
    game.load.image('bike', 'images/Frogger/Obstacles/bike.png');
    game.load.image('goal', 'images/Frogger/frog_Sprite/savedFrog.png');
    game.load.image('log', 'images/Frogger/Obstacles/log.png');
    game.load.image('barrier', 'images/Frogger/Obstacles/barrier-row.png');
    game.load.image('redCar_Right', 'images/Frogger/Obstacles/redCar_Right.png');
    game.load.image('fly', 'images/Frogger/Obstacles/fly.png');

  }

  function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    // 
    // Initial Game State
    globalGameState = "gameplay";
    countdownTimerDuration = 30; //30

    // Game Timer
    countdownTimer = game.time.create(false);
    setTimer(countdownTimer, countdownTimerDuration);
    countdownTimer.start();

    // Placeholder Background
    game.add.sprite(0, 0, 'img_placeholder');


    player = game.add.sprite(346, 410, 'frogUp');
    player.frame = 0;
    player.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.onCollide = new Phaser.Signal();
    player.body.onCollide.add(frogPhysicsCollide, this);
    player.body.setSize(10, 10, 10, 10);

    barrier = game.add.sprite(0, 429, 'barrier');
    game.physics.arcade.enable(barrier);
    barrier.alpha = 0;



    goal1 = game.add.sprite(58, 0, 'goal');
    goal1.scale.setTo(.9, .9);
    goal1.alpha = 0;
    goal1.takenCareOf = false;
    game.physics.arcade.enable(goal1);
    goal1.body.immovable = true;

    goal2 = game.add.sprite(203, 0, 'goal');
    goal2.scale.setTo(.9, .9);
    goal2.alpha = 0;
    goal2.takenCareOf = false;
    game.physics.arcade.enable(goal2);
    goal2.body.immovable = true;

    goal3 = game.add.sprite(346, 0, 'goal');
    goal3.scale.setTo(.9, .9);
    goal3.alpha = 0;
    goal3.takenCareOf = false;
    game.physics.arcade.enable(goal3);
    goal3.body.immovable = true;

    goal4 = game.add.sprite(489, 0, 'goal');
    goal4.scale.setTo(.9, .9);
    goal4.alpha = 0;
    goal4.takenCareOf = false;
    game.physics.arcade.enable(goal4);
    goal4.body.immovable = true;

    goal5 = game.add.sprite(633, 0, 'goal');
    goal5.scale.setTo(.9, .9);
    goal5.alpha = 0;
    goal5.takenCareOf = false;
    game.physics.arcade.enable(goal5);
    goal5.body.immovable = true;

    // Time Left Text Elements
    txt_TimeLeft = game.add.text(300, 417, "Time:");
    txt_TimeLeft.fill = "#FFFFFF";
    txt_TimeLeft.anchor.set(0, 0);
    txt_TimeLeft.font = 'monospace';
    txt_TimeLeft.fontSize = '33px';
    txt_TimeLeft.stroke = '#000000';
    txt_TimeLeft.strokeThickness = 10;

    timeleft_seconds = 15;
    txt_SecondsLeft = game.add.text(410, 417, timeleft_seconds);
    txt_SecondsLeft.fill = "#FF0000";
    txt_SecondsLeft.anchor.set(0, 0);
    txt_SecondsLeft.font = 'monospace';
    txt_SecondsLeft.fontSize = '33px';
    txt_SecondsLeft.stroke = '#000000';
    txt_SecondsLeft.strokeThickness = 10;

    // Score Text Elements
    txt_ScoreLabel = game.add.text(5, 417, "Score:");
    txt_ScoreLabel.fill = "#FFFFFF";
    txt_ScoreLabel.anchor.set(0, 0);
    txt_ScoreLabel.font = 'monospace';
    txt_ScoreLabel.fontSize = '33px';
    txt_ScoreLabel.stroke = '#000000';
    txt_ScoreLabel.strokeThickness = 10;

    setCurrentScore(0);
    // changeCurrentScore('add',500); // - For Testing
    txt_CurrentScoreDisplay = game.add.text(130, 417, txt_CurrentScoreValue);
    txt_CurrentScoreDisplay.fill = "#FF0000";
    txt_CurrentScoreDisplay.anchor.set(0, 0);
    txt_CurrentScoreDisplay.font = 'monospace';
    txt_CurrentScoreDisplay.fontSize = '33px';
    txt_CurrentScoreDisplay.stroke = '#000000';
    txt_CurrentScoreDisplay.strokeThickness = 10;

    // Lives Text Elements
    txt_LivesLeftLabel = game.add.text(561, 417, "Lives:");
    txt_LivesLeftLabel.fill = "#FFFFFF";
    txt_LivesLeftLabel.anchor.set(0, 0);
    txt_LivesLeftLabel.font = 'monospace';
    txt_LivesLeftLabel.fontSize = '33px';
    txt_LivesLeftLabel.stroke = '#000000';
    txt_LivesLeftLabel.strokeThickness = 10;

    setNumberOfLives(5);
    //changeNumberOfLives("add", 1);  // This is just a testing line
    txt_CurrentLivesLeftDisplay = game.add.text(680, 417, txt_CurrentLivesLeftValue);
    txt_CurrentLivesLeftDisplay.fill = "#FF0000";
    txt_CurrentLivesLeftDisplay.anchor.set(0, 0);
    txt_CurrentLivesLeftDisplay.font = 'monospace';
    txt_CurrentLivesLeftDisplay.fontSize = '33px';
    txt_CurrentLivesLeftDisplay.stroke = '#000000';
    txt_CurrentLivesLeftDisplay.strokeThickness = 10;


    // Dynamic Text Prompt
    txt_DynamicPrompt = game.add.text(130, 78, "");
    //txt_DynamicPrompt.fill = "#FF0000";
    txt_DynamicPrompt.anchor.set(0, 0);
    txt_DynamicPrompt.font = 'monospace';
    txt_DynamicPrompt.fontSize = '45px';

    //  Stroke color and thickness
    txt_DynamicPrompt.stroke = '#000000';
    txt_DynamicPrompt.strokeThickness = 16;
    txt_DynamicPrompt.fill = '#43d637';

    // Audio 
    snd_jump = game.add.audio('snd_jump');
    //snd_jump.play();

    obstacleGroup = game.add.group();
    logGroup = game.add.group();

    //TEST SPAWN
    //spawnObstacle(1, 365, 'redCar', 'left'); //ROAD: 365, 300, 270, SIDEWALK: 235

    obstacleGroup.enableBody = true;
    obstacleGroup.physics = Phaser.Physics.ARCADE;
    //obstacleGroup.body.immovable = true;

    logGroup.enableBody = true;
    logGroup.physics = Phaser.Physics.ARCADE;

    input_EnterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

  }

  function update() {

    //Game State Logic
    switch (globalGameState) {

      case "gameplay":

        //console.log('Gamestate Changed To: ' + globalGameState);
        gameplay();

        break;


      case "reachedGoal":

        //console.log('Gamestate Changed To: ' + globalGameState);
        reachedGoal();

        break;

      case "death":

        //console.log('Gamestate Changed To: ' + globalGameState);
        death();

        break;

      case "gameOver":

        //console.log('Gamestate Changed To: ' + globalGameState);
        gameOver();

        break;

      case "beatTheGame":

        //console.log('Gamestate Changed To: ' + globalGameState);
        beatTheGame();

        break;

    }
  }

  function render() {


    //game.debug.text("Current Game State: " + globalGameState, 32, 32);

    updateTimerOSD();
    updateLivesOSD();
    updateScoreOSD();
    //dynamicPrompt();
    txt_DynamicPrompt.text = txt_DynamicPromptMessage;
    txt_DynamicPrompt.bringToTop();
    //game.debug.bodyInfo(player, 32, 32);
    //game.debug.body(player);

    //for (var i = 0; i < obstacleGroup.countLiving(); i++) {

    //game.debug.body(obstacleGroup.children[i]);

    //}

  }


  function setCurrentScore(amount) {

    txt_CurrentScoreValue = amount;

  }

  function changeCurrentScore(addOrSubtract, amount) {

    if (addOrSubtract == "add") {

      txt_CurrentScoreValue = txt_CurrentScoreValue + amount;

    } else if (addOrSubtract == "subtract") {

      txt_CurrentScoreValue = txt_CurrentScoreValue - amount;
    }

  }

  function updateScoreOSD() {

    txt_CurrentScoreDisplay.text = txt_CurrentScoreValue;

  }


  function setNumberOfLives(amount) {

    lives = amount;
  }

  function subtractLife() {

    lives = lives - 1;
    txt_CurrentLivesLeftValue = lives;
    //console.log("life subtracted, current amount is " + txt_CurrentLivesLeftValue  + " current time is: " + game.time.now);

  }

  function updateLivesOSD() {

    txt_CurrentLivesLeftDisplay.text = lives;

  }

  function setTimer(spriteObject, durationInSeconds) {

    countdownTimer.add(durationInSeconds * 1000, frogDeath, this);

  }

  function updateTimerOSD() {

    if (countdownTimer.length > 0) {
      timeleft_seconds = countdownTimer.duration.toFixed(0) / 1000;
      txt_SecondsLeft.text = timeleft_seconds.toFixed(0);
    }
    else {
      txt_SecondsLeft.text = 0;
    }

  }

  // DEBUG CODE
  /*
  function displayTimerDebug(timerObject, enabled) {
      
      if (enabled === true) {

          //console.log('Timer Debug Display enabled');
          game.debug.text("Time until event (timer.duration): " + timerObject.duration, 32, 32);
          game.debug.text("Is Timer Running? (timer.running): " + timerObject.running, 32, 64);
          game.debug.text("For How Long? (timer.seconds): " + timerObject.seconds, 32, 96);      
          game.debug.text("Does it have events? (timer.events): " + timerObject.events, 32, 128);
          game.debug.text("Is it paused? (timer.paused): " + timerObject.paused, 32, 160);
          game.debug.text("(timer.onComplete): " + timerObject.onComplete, 32, 192);
          game.debug.text("(timer.onNextTick): " + timerObject.onNextTick, 32, 224);
          game.debug.text("(timer.elapsed): " + timerObject.elapsed, 32, 256);
          game.debug.text("(timer.expired): " + timerObject.expired, 32, 288);
          game.debug.text("(timer.game): " + timerObject.game, 32, 310);
          game.debug.text("(timer.length): " + timerObject.length, 32, 342);
          game.debug.text("(timer.next): " + timerObject.next, 32, 374);
          game.debug.text("(timer.nextTick): " + timerObject.nextTick, 32, 406);
  
      } else if (enabled == false) {
  
          //console.log('Timer Debug Display disabled');
      }
  
  }
/*
  function displaySpriteDebug(spriteObject, enabled) {
      
      if (enabled === true) {

          //console.log('Timer Debug Display enabled');
          game.debug.body(spriteObject);
          game.debug.text("spriteObject.anchor: " + spriteObject.anchor, 32, 32);
          game.debug.text("spriteObject.rotation: " + spriteObject.rotation, 32, 64);
          game.debug.text("spriteObject.pivot: " + spriteObject.pivot, 32, 96);      
          game.debug.text("centerX" + spriteObject.centerX, 32, 128);
          game.debug.text("centerY" + spriteObject.centerY, 32, 160);
          game.debug.text("body.offset" + spriteObject.body.offset, 32, 192);
          game.debug.text("body.position" + spriteObject.body.position, 32, 224);
          game.debug.text("body.rotation: " + spriteObject.body.rotation, 32, 256);
          game.debug.geom(new Phaser.Point(spriteObject.pivot.x, spriteObject.pivot.y), '#FF88FF');
          game.debug.geom(new Phaser.Point(spriteObject.anchor.x, spriteObject.anchor.y), '#FFFFFF');
          game.debug.spriteInfo(spriteObject, 32, 288);
  
      } else if (enabled == false) {
  
          //console.log('Timer Debug Display disabled');
      }
  }*/

  //Spawn Obstacles Function
  function spawnObstacle(x, y, sprite, direction, speed, group) {

    // console.log("Hello"); // - For Testing

    var obstacle;

    //Determine if a road obstacle or log is to be spawned
    if (group == "obstacle") {
      obstacle = obstacleGroup.create(x, y, sprite);
    } else if (group == "log") {
      obstacle = logGroup.create(x, y, sprite);
    }

    game.physics.arcade.enable(obstacle); //Enable Physics
    obstacle.body.immovable = true;

    //Set Obstacle Movement
    obstacleMovement(obstacle, direction, speed);

  }

  //Kill Player & Remove Life
  function frogDeath() {

    countdownTimer.removeAll();
    //console.log("frogdeath called at: " + game.time.now);
    //console.log("frog killer was a: " + frogKiller.key);
    deathTime = game.time.now;
    playerAlive = false;
    subtractLife();
    player.kill();
    globalGameState = "death";
  }

  //Respawn Player & Reset Timer
  function respawnPlayer() {
    globalGameState = "gameplay";
    player.reset(350, 410);
    player.angle = 0;
    playerAlive = true;
    countdownTimer.removeAll();
    setTimer(countdownTimer, countdownTimerDuration);
    //console.log(canMove); // For testing
  }

  function gameOver() {

    if (game.time.now > deathTime + 3000 && input_EnterKey.downDuration(500)) {
      txt_DynamicPromptMessage = "";
      setTimer(countdownTimer, countdownTimerDuration);
      setNumberOfLives(5);
      goal1.alpha = 0;
      goal1.takenCareOf = false;
      goal2.alpha = 0;
      goal2.takenCareOf = false;
      goal3.alpha = 0;
      goal3.takenCareOf = false;
      goal4.alpha = 0;
      goal4.takenCareOf = false;
      goal5.alpha = 0;
      goal5.takenCareOf = false;
      frogsSaved = 0;
      console.log('department of the interior:' + globalGameState);
      respawnPlayer();
      scoreSent = false;
      //globalGameState = "gameplay";                    
    } else {
      console.log('whatever');
      if (!scoreSent) {
        sendScore();
        scoreSent = true;
      }
      txt_DynamicPromptMessage = "GAME OVER\nSCORE: " + txt_CurrentScoreValue + "\nPress ENTER KEY\nto continue";
    }
  }

  function death() {

    if (lives > 0 && game.time.now > deathTime + 1000) {
      respawnPlayer();
    } else if (lives == 0) {
      globalGameState = "gameOver";
    }
  }


  function frogMovement() {

    //Movement
    cursors = game.input.keyboard.createCursorKeys();
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.up.isDown) {
      //  Move up
      if (canMove) {
        player.angle = 0;
        player.body.velocity.y = -yjumpDistance;
        canMove = false;
      }

    } else if (cursors.down.isDown) {
      //  Move down
      if (canMove) {
        player.angle = 180;
        player.body.velocity.y = yjumpDistance;
        canMove = false;
      }

    } else if (cursors.right.isDown) {
      moved = true;
      //  Move to the right
      if (canMove) {
        player.angle = 90;
        player.body.velocity.x = xjumpDistance;
        canMove = false;
      }

    } else if (cursors.left.isDown) {
      //  Move to the left
      if (canMove) {
        player.angle = 270;
        player.body.velocity.x = -xjumpDistance;
        canMove = false;
      }

    } else {
      canMove = true;
    }

  }

  function frogPhysicsCollide(player, thingThatCollidedWithPlayer) {

    //console.log("frogphysicscollide! " + thingThatCollidedWithPlayer);
    //console.log("The Frog has Collided with a " + thingThatCollidedWithPlayer.key);

    // isnt a goal kill the player
    if (thingThatCollidedWithPlayer.key != "goal") {
      frogDeath();
    }

  }

  //Collision Detection (for road obstacles & goals)
  function frogCollisionDetection() {

    //Prevent player from going on top of UI
    if (checkOverlap(player, barrier)) {
      player.y = player.y - 33;
      player.angle = 0;
    }

    game.physics.arcade.collide(player, obstacleGroup);

    //TODO: Create Goals Array & Loop Through It
    if (checkOverlap(player, goal1)) {
      reachedGoal(player, goal1);
    }

    //game.physics.arcade.collide(player, goal1, reachedGoal, null, this); 
    game.physics.arcade.collide(player, goal2, reachedGoal, null, this);
    game.physics.arcade.collide(player, goal3, reachedGoal, null, this);
    game.physics.arcade.collide(player, goal4, reachedGoal, null, this);
    game.physics.arcade.collide(player, goal5, reachedGoal, null, this);


    //Check if player is on a log
    for (var l = 0; l < logGroup.countLiving(); l++) {
      if (checkOverlap(player, logGroup.children[l])) {

        //console.log('onLog');
        onLog = true;

        //If a player is on a log & not moving using arrow keys move the player with the log
        if (canMove) {
          player.body.velocity.x = logGroup.children[l].body.velocity.x;
        }
      }
    }

    // Check if player is in water & not on log
    if (player.position.y < 180 && !onLog) {

      if (deathNote == 0) {

        deathNote = game.time.now + 150; //Kill Frog after 150ms 
        order66 = true;
        //console.log("order66 set to true: " + player.position.y);   
      }
    }

    //Checks if order to kill frog has been sent & calls frogDeath() at the right time
    if (game.time.now > deathNote && order66) {

      deathNote = 0;
      frogDeath();
      //console.log("line 625 in play: " + player.position.y);
      order66 = false;
    }
  }

  //Overlap Detection (for logs)
  function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
  }

  //Spawn Rate Variance Generator
  function spawnRate(variation) {

    var variation = Math.floor(Math.random() * (variation + 1));
    if (variation % 2 == 0) {
      //console.log(variation);
      return variation;
    } else {
      //console.log("-" + variation);
      return -variation;
    }
  }

  //Move the obstacles across the screen 
  function obstacleMovement(obstacle, direction, speed) {

    if (direction == "right") {
      obstacle.body.velocity.x = -speed;
    } else if (direction == "left") {
      obstacle.body.velocity.x = speed;
    }

    if (!obstacle.inCamera) {

      obstacle.destroy();
    }
  }

  function gameplay() {

    frogMovement(); // Allow Frog to move using arrow keys
    frogCollisionDetection(); // Constantly check for collision with obstacles

    //RE-REVAMPED OBSTACLE SPAWNING
    for (i = 0; i < obstacles.length; i++) {

      if (game.time.now > obstacles[i][0]) {

        spawnObstacle(obstacles[i][1], obstacles[i][2], obstacles[i][3], obstacles[i][4], obstacles[i][5], obstacles[i][6]);
        obstacles[i][0] = game.time.now + obstacles[i][7] + spawnRate(obstacles[i][8]);
      }
    }

    //Clears Capture Text after 5 seconds
    if (game.time.now > DynamicPromptTimeOfInitialDisplay + 5000 && txt_DynamicPromptMessage != "") {

      txt_DynamicPromptMessage = "";

    }

    // Check if player has reached all 5 goals
    if (frogsSaved == 5) {

      globalGameState = "beatTheGame";
    }

    player.bringToTop();
    //player.z = 0;

    onLog = false;
  }

  // Frog Made it to the Other Side
  function reachedGoal(playerObject, goalObject) {

    if (goalObject.takenCareOf == false) {
      console.log("You Saved a Frog!");
      frogsSaved++;
      countdownTimer.removeAll();
      setTimer(countdownTimer, countdownTimerDuration);
      console.log(timeleft_seconds.toFixed(0) + " when saved");
      changeCurrentScore('add', timeleft_seconds.toFixed(0) * 50);

      player.reset(350, 410);
      goalObject.alpha = 1.0;
      goalObject.takenCareOf = true;
      DynamicPromptTimeOfInitialDisplay = game.time.now;
      if (frogsSaved == 1) {
        txt_DynamicPromptMessage = "YOU HAVE SAVED\n " + frogsSaved + " FROG";
      } else if (frogsSaved > 1) {
        txt_DynamicPromptMessage = "YOU HAVE SAVED\n " + frogsSaved + " FROGS";
      }

    } else {
      console.log("Your Frog is in Another Castle");
      changeCurrentScore('subtract', 100);
      DynamicPromptTimeOfInitialDisplay = game.time.now;
      txt_DynamicPromptMessage = "Your Frog is\nin Another Castle";
      player.reset(350, 410);
    }
  }

  // Game Clear Function
  function beatTheGame() {

    console.log('Game Beaten!');
    player.kill();
    txt_DynamicPromptMessage = "YOU HAVE SAVED\nALL FIVE FROGS\nTHE END";
    if (!scoreSent) {
      sendScore()
      scoreSent = true;
    }
    countdownTimer.removeAll();
  }

  function sendScore() {
    // Getting player's initials
    var initials = prompt("Please enter your initials");
    // preparing post data
    postData = {
      'scoreid': null,
      'gameid': 1,
      'score': txt_CurrentScoreValue,
      'initial': initials
    }
    // Make endpoint call
    fetch('/score/submitScore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(response => response.status) // we want status returned
      .then(status => console.log(status)) // log status
      .catch(error => console.log(error)); // log error

  }
};