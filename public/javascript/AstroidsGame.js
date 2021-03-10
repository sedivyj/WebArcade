var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('background', 'images/Astroids/StarBackground.png') //Background
    game.load.spritesheet('player', 'images/Astroids/glowShips.png', 344, 164, 10) //Player Character
    game.load.image('bullet', 'images/Astroids/Bullet.png') //Bullets
    game.load.image('asteroid', 'images/Astroids/SpaceRock.png') //Asteroids
    game.load.image('startBtn', 'images/Astroids/startBtn.png') //Start Button
    game.load.image('pauseBtn', 'images/Astroids/pauseBtn.png') //Pause Button
    game.load.image('playAgain', 'images/Astroids/playAgain.png') //Play Again Button
    game.load.image('resume', 'images/Astroids/resume.png') //Resume Button
    game.load.image('gameOver', 'images/Astroids/gameOverText.png') //Game Over Text
    game.load.image('ammo', 'images/Astroids/SpaceJunk.png') // Ammo powerup.
    game.load.image('roadster', 'images/Astroids/Roadster.png')
};

// Variables
var sprite;
var cursors;
var weapon;
var fireButton;
var pauseKey;
var safeTime;
var respawnTime = 2000; // 2 seconds rocks wont fly at player
var startAmmo = 10; // Starting ammo
var playerAlive = true;
var asteroidCount = 3; // Starting asteroids
var totalAsteroids = asteroidCount;
var liveAsteroids;
var lives = 3; // Starting lives
var ammo = startAmmo;
var ammoSpawnTime = 10000; // 10 seconds between ammo drops
var totalSatAmmo = 0;
var x2; // Fly to point
var y2;
var totalRoadster = 0; 
var roadsterSpawnTime = 20000; // Set to 20 seconds for demonstration
var playerInvincible = false;
var playerInvincibleTime;
var score = 0;

function create() {

    // Add background
    game.add.sprite(0, 0, 'background');
    
    // Add player sprite
    player = game.add.sprite(game.world.width * .5, game.world.height - 150, 'player', 2);
    
    // Add physics to player
    game.physics.arcade.enable(player);
    
    // Prevent player from leaving game window
    player.body.collideWorldBounds = true;
    
    // Scale player sprite
    player.scale.setTo(.15);
    
    // Set rotation around center of player sprite
    player.anchor.setTo(0.5, 0.5);

    // Set drag
    player.body.drag.set(100);

    // Set max speed
    player.body.maxVelocity.set(300);

    // Creates 30 bullets, using the 'bullet' graphic
    weapon = game.add.weapon(30, 'bullet');

    // The bullet will be automatically killed when it leaves the world bounds
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

    //  The speed at which the bullet is fired
    weapon.bulletSpeed = 800;

    // The rate at which bullets are fired
    weapon.fireRate = 200;

    // The ammo count
    weapon.fireLimit = startAmmo;

    // Set weapon to player
    weapon.trackSprite(player, 25, 0, true);

    // Set bullet scale
    weapon.bullets.setAll('scale.x', 0.05);
    weapon.bullets.setAll('scale.y', 0.05);

    // Define fire button
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    // Define pause key
    pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);

    // Add Asteroid sprite and allow physics
    asteroidGroup = game.add.group();
    asteroidGroup.enableBody = true;
    asteroidGroup.physicsBodyType = Phaser.Physics.ARCADE;

    resetAsteroids();

    // Pause menu
    // Create a pause button
    pause_button = game.add.button(730, 20, 'pauseBtn', pause, this);

    // Start with game paused
    game.paused = true;

    // Start Game Button
    start_button = game.add.button(game.world.centerX - 110, 350, 'startBtn', unpause, this);

    // Display Score
    score_label = game.add.text(20, 20, 'Score: ' + score,  { font: '24px Lucida Console', fill: '#fff' });

    // Display number of lives
    lives_label = game.add.text(20, 50, 'Lives: ' + lives, { font: '24px Lucida Console', fill: '#fff' });

    // Display ammo count
    ammo_label = game.add.text(20, 80, 'Ammo: ' + ammo,  { font: '24px Lucida Console', fill: '#fff' });

    // Add Satallite (ammo) sprite 
    satelliteAmmoGroup = game.add.group();
    satelliteAmmoGroup.enableBody = true;
    //satelliteAmmoGroup.physicsBodyType = Phaser.Physics.ARCADE;

    // Add Roadster (powerup) sprite
    roadsterPowerupGroup = game.add.group();
    roadsterPowerupGroup.enableBody = true;
}

function update() {
    console.log("UPDATE");
    cursors = game.input.keyboard.createCursorKeys();
    
    // Movement
    if (cursors.up.isDown) {
        if (playerAlive) {
            if (playerInvincibleTime > game.time.now + 5000) {
                player.frame = 0;
            } else if (playerInvincibleTime > game.time.now + 2000) {
                player.frame = 2;
            } else if (playerInvincibleTime > game.time.now) {
                player.frame = 4;
            } else {
                player.frame = 6;
            }
        } else {
            player.frame = 8;
        }
        game.physics.arcade.accelerationFromRotation(player.rotation, 200, player.body.acceleration);
    
    } else {
        if (playerAlive) {
            if (playerInvincibleTime > game.time.now + 5000) {
                player.frame = 1;
            } else if (playerInvincibleTime > game.time.now + 2000) {
                player.frame = 3;
            } else if (playerInvincibleTime > game.time.now) {
                player.frame = 5;
            } else {
                player.frame = 7;
            }
        } else {
            player.frame = 9;
        }
        player.body.acceleration.set(0);
    }

    // Rotation
    if (cursors.left.isDown) {
    
        player.body.angularVelocity = -300;
    
    } else if (cursors.right.isDown) {
    
        player.body.angularVelocity = 300;
    
    } else {
        
        player.body.angularVelocity = 0;

    }

    // Weapons fire 
    if (fireButton.isDown) {
        weapon.fire();
        updateAmmo();
    }

    // Pause key
    if(pauseKey.isDown) {
        pause();
    }

    // Asteroid track towards player movement & collision
    for (i=0; i < totalAsteroids; i++) {
        if (playerAlive) {
            game.physics.arcade.collide(player, asteroidGroup.children[i], shipHit, null, this);
        }
        game.physics.arcade.overlap(asteroidGroup.children[i], weapon.bullets, hitAsteroid, null, this);
        // When the asteroid leaves the world bounds kill it
        asteroidGroup.children[i].events.onOutOfBounds.add(asteroidOOB, this);
    }

    for (i=0; i < totalSatAmmo; i++) {
        game.physics.arcade.overlap(player, satelliteAmmoGroup.children[i], shipHitSatelliteAmmo, null, this);
        game.physics.arcade.overlap(satelliteAmmoGroup.children[i], weapon.bullets, hitSatelliteAmmo, null, this);
        satelliteAmmoGroup.children[i].events.onOutOfBounds.add(satAmmoOOB, this);
        game.physics.arcade.moveToXY(satelliteAmmoGroup.children[i], x2, 650, n);
    }

    for (i=0; i < totalRoadster; i++) {
        game.physics.arcade.overlap(player, roadsterPowerupGroup.children[i], shipHitRoadster, null, this);
        game.physics.arcade.overlap(roadsterPowerupGroup.children[i], weapon.bullets, hitRoadster, null, this);
        roadsterPowerupGroup.children[i].events.onOutOfBounds.add(roadsterOOB, this);
        game.physics.arcade.moveToXY(roadsterPowerupGroup.children[i], 850, y2, n);
    }

    // Make player vulnerable again after a time has passed
    if (safeTime < game.time.now) {
        playerAlive = true;
    }

    // Make player vulnerable again after a time has passed
    if (playerInvincibleTime < game.time.now) {
        playerInvincible = false;
    }

    // Spawn ammo drops at intervals 
    if (ammoSpawnTime < game.time.now) {
        resetSatelliteAmmo();
        ammoSpawnTime = game.time.now  + 10000;
    }

    // Spawn roadster at intervals 
    if (roadsterSpawnTime < game.time.now) {
        resetRoadster();
        roadsterSpawnTime = game.time.now + (roadsterSpawnTime * 2); 
    }
}

// Reset asteroids
function resetAsteroids () {
    for (i=0; i < asteroidCount; i++) {
        x = Math.random() * 800;
        y = 0;
        createAsteroid(x, y, 'asteroid');
    }
    liveAsteroids = asteroidCount;
    if (totalAsteroids != asteroidCount) {
        totalAsteroids += asteroidCount;
    }
}

// Create an asteroid
function createAsteroid (x, y, asset) {
    asteroid = this.asteroidGroup.create(x, y, asset);
    asteroid.anchor.setTo(0.5, 0.5);
    // Randomly set speed between 40 and 90
    n = Math.floor((Math.random() * 50) + 40);
    game.physics.arcade.moveToObject(asteroid, player, n);
    // Randomly set size
    s = Math.random() + .1;
    asteroid.scale.setTo(s);
    asteroid.maxHealth = s;
    // needed to kill asteroid as it leaves the world
    asteroid.checkWorldBounds = true;
}

// Asteroid hit 
function hitAsteroid (rock, bullet) {
    rock.kill();
    bullet.kill();
    liveAsteroids--;
    if (liveAsteroids == 0) {
        asteroidCount++;
        resetAsteroids();
    }
    increaseScore(rock);    
}

// Asteroids leaves world bounds
function asteroidOOB (asteroid) {
    asteroid.kill();
    liveAsteroids--
    if (liveAsteroids == 0) {
        asteroidCount++;
        resetAsteroids();
    }
}

// Ship is hit by asteroid
function shipHit (ship, rock) {

    if (playerInvincible == true) {
        rock.kill();
        liveAsteroids--;
        if (liveAsteroids == 0) {
            asteroidCount++;
            resetAsteroids();
        }
        increaseScore(rock);
    } else {
        lives --;
        playerAlive = false;
        ship.kill();
    
        // Determine if it is a game over or not
        if (lives > 0) {
            respawnPlayer();
        } else {
            gameOver();
        }
        updateLives();
    }
}

// Update lives
function updateLives () {
    lives_label.setText("Lives: " + lives);
}

// Respawn player
function respawnPlayer () {
    player.reset(game.world.width * .5, game.world.height - 150);
    safeTime = game.time.now + respawnTime;
    weapon.firelimit = startAmmo;
    ammo = startAmmo;
    weapon.resetShots();
    updateAmmo();
}

// Reset satellite
function resetSatelliteAmmo () {
    x = Math.random() * 800;
    y = 0;
    createSatelliteAmmo(x, y, 'ammo');
}

// Create satellite
function createSatelliteAmmo (x, y, asset) {
    satAmmo = this.satelliteAmmoGroup.create(x, y, asset);
    satAmmo.anchor.setTo(0.5, 0.5);
    // Randomly set speed between 40 and 90
    n = Math.floor((Math.random() * 100) + 70);
    // set size
    satAmmo.scale.setTo(.25);
    // needed to kill satAmmo as it leaves the world
    satAmmo.checkWorldBounds = true;
    // Increase totalSatAmmo
    totalSatAmmo++;
    // Fly to point
    x2 = Math.random() * 800;
    game.physics.arcade.moveToXY(satAmmo, x2, 650, n);
}

// Bullet Collides with Satalite Ammo
function hitSatelliteAmmo (satAmmo, bullet) {
    satAmmo.kill();
    bullet.kill();
}

// Ship Collides with Satalite Ammo
function shipHitSatelliteAmmo (player, satAmmo) {
    satAmmo.kill();
    weapon.resetShots();
    updateAmmo();
}

// StatliteAmmo leaves world bounds
function satAmmoOOB (satAmmo) {
    satAmmo.kill();
}

// Update Ammo Counter
function updateAmmo () {
    ammo = startAmmo - weapon.shots;
    ammo_label.setText("Ammo: " + ammo);
}

// Reset roadster
function resetRoadster () {
    x = 0;
    y = Math.random() * 600;
    createRoadster(x, y, 'roadster');
}

// Create roadster
function createRoadster (x, y, asset) {
    roadsterPU = this.roadsterPowerupGroup.create(x, y, asset);
    roadsterPU.anchor.setTo(0.5, 0.5);
    // Randomly set speed between 40 and 90
    n = Math.floor((Math.random() * 100) + 70);
    // set size
    roadsterPU.scale.setTo(.25);
    // needed to kill roadsterPU as it leaves the world
    roadsterPU.checkWorldBounds = true;
    // Increase totalRoadster
    totalRoadster++;
    // Fly to point
    y2 = Math.random() * 600;
    game.physics.arcade.moveToXY(roadsterPU, y2, 650, n);
}

// Bullet Collides with roadster
function hitRoadster (roadsterPU, bullet) {
    roadsterPU.kill();
    bullet.kill();
}

// Ship Collides with roadster
function shipHitRoadster (ship, roadsterPU) {
    roadsterPU.kill();
    lives++;
    updateLives();
    playerInvincible = true;
    playerInvincibleTime = game.time.now + 10000; // Invincible time 10 seconds
}

// StatliteAmmo leaves world bounds
function roadsterOOB (roadsterPU) {
    roadsterPU.kill();
}

function increaseScore (rock) {
    score += 10 * (2.1 - rock.maxHealth);
    score = Math.round(score);
    score_label.setText("Score: " + score);
}

// Pause function
function pause() {
    console.log("Paused");
    // Only act if unpaused
    if (!(game.paused)) {
        
        // Pause the game
        game.paused = true;

        // Add start button
        start_button = game.add.button(game.world.centerX - 110, 350, 'resume', unpause, this, 2, 1, 0);
    }
};

// Unpause function
function unpause(){

    // Only act if paused
    if (game.paused) {

        // Remove the start button
        start_button.destroy();

        // Unpause the game
        game.paused = false;
    }
}

// Game Over
function gameOver () {
    sendScore(score);
    game.paused = true;
    gameOver = game.add.sprite(game.world.width -775, game.world.height - 400, 'gameOver'); 
    restart_button = game.add.button(game.world.centerX - 110, 400, 'playAgain', restart, this, 2, 1, 0);
}

// Reload the game
function restart () {
     location.reload();
}

function sendScore() {
    // Getting player's initials
    var initials = prompt("Please enter your initials");
    // preparing post data
    postData = {
        'scoreid': null,
        'gameid': 2,
        'score': txt_CurrentScoreValue,
        'initial': initials
    }
    // Make endpoint call
    fetch('/submitScore', {
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