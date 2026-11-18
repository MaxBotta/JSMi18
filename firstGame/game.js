/*
Todos:
  [x] Spieler kann sich nach links und rechts bewegen
  [x] Spieler kann springen (1x mal oder 2x mal)
  - Wenn Spieler runter fällt, wird er wieder gespawned
  - Plattformen bewegen sich nach links
  - Plattformen spawnen auf zufälliger Position
  - Wenn Spieler linken Rand oder Boden berührt, verliert man
  - Zeit wird gestoppt

  - PLattformen haben Hindernisse oder Stacheln
  - Gegner spawnen oder Gegenstände
  - Plattformen die Fallen beim berühren

*/

// Globale Konstanten
const DEFAULT_JUMP_COUNT = 2;
const PLAYER_SIZE = 40;
const PLAYER_JUMP_FORCE = -16;
const GRAVITY = 0.8;

let platformSpawnTime = 2000; // Millisekunden
let currentMillis = 0;

let playerX = 100;
let playerY = 0;
let playerVelocityY = 0;
let jumpCount = DEFAULT_JUMP_COUNT;

// Lister aller aktuellen Plattformen
const platforms = [];

// Wird vor dem Start von draw ausgeführt (also am Anfang des Spiels)
function setup() {
  createCanvas(900, 600);
}

// Gameloop (wiederholt sich die ganze Zeit, Framerate)
function draw() {
  background(0, 200, 250);

  // Wenn Spieler runter fällt soll er wieder respawnen
  if (playerY > 600) {
    playerVelocityY = 0;
    playerY = 0;
    playerX = 20;
  }

  spawnPlatformByInterval();
  movePlaformAndCheckCollsion();
  updatePlayer();
  checkPlayerMoving();
}

function keyPressed() {
  // Pfeiltaste oben, Spielergeschwindigkeit wird negativ, Spieler springt
  if (keyCode === 38 && jumpCount > 0) {
    jumpCount = jumpCount - 1;
    playerVelocityY = PLAYER_JUMP_FORCE;
  }

  return false; // prevent default
}

// Eigene Funktionen
function spawnPlatformByInterval() {
  // Plattform spawnen, vergleiche aktuelle Zeit mit gestoppter Zeit plus spawn Zeit
  if (millis() > currentMillis + spawnPlatformByInterval) {
    currentMillis = millis();

    const platformHeight = random(20, 60);

    // Neues Plattform Objekt
    const newPlatform = {
      width: random(60, 600),
      height: platformHeight,
      x: width,
      y: random(0, height - platformHeight),
      speed: random(2, 6),
    };

    // Plattform in Liste einfügen
    platforms.push(newPlatform);
    console.log(platforms);
  }
}

function checkPlayerMoving() {
  // Spieler nach links und rechts bewegen
  if (keyIsDown(LEFT_ARROW)) {
    playerX = playerX - 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX = playerX + 10;
  }
}

function updatePlayer() {
  // Spieler fällt wegen Gravitation
  playerVelocityY = playerVelocityY + GRAVITY;
  playerY = playerY + playerVelocityY;

  fill("yellow");
  square(playerX, playerY, PLAYER_SIZE);
}

function movePlaformAndCheckCollsion() {
  // Plattform (Für jedes Element in unsere Liste von Plattformen)
  for (let platform of platforms) {
    // Plattformen zeichnen
    fill("green");
    rect(platform.x, platform.y, platform.width, platform.height);

    platform.x = platform.x - platform.speed;

    if (
      playerY >= platform.y - PLAYER_SIZE &&
      playerY <= platform.y + platform.height - PLAYER_SIZE &&
      playerX + PLAYER_SIZE > platform.x &&
      playerX < platform.x + platform.width &&
      playerVelocityY > 0
    ) {
      // Spieler steht auf Plattform
      playerVelocityY = 0;
      playerY = platform.y - PLAYER_SIZE;

      //Spieler mitbewegen
      // player.x = player.x - platform.speed;

      // Setze die Jumpcount wieder zurück
      jumpCount = DEFAULT_JUMP_COUNT;
    }
  }
}
