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

let playerX = 100;
let playerY = 0;
let playerVelocityY = 0;
let jumpCount = DEFAULT_JUMP_COUNT;

// Lister aller aktuellen Plattformen
const platforms = [
  {
    x: 20,
    y: 400,
    width: 600,
    height: 30,
    speed: 4,
  },
  {
    x: 400,
    y: 500,
    width: 500,
    height: 60,
    speed: 3,
  },
  {
    x: 500,
    y: 200,
    width: 800,
    height: 20,
    speed: 5,
  },
];

// Wird vor dem Start von draw ausgeführt (also am Anfang des Spiels)
function setup() {
  createCanvas(900, 600);
}

// Gameloop (wiederholt sich die ganze Zeit, Framerate)
function draw() {
  background(0, 200, 250);

  // Spieler fällt wegen Gravitation
  playerVelocityY = playerVelocityY + GRAVITY;
  playerY = playerY + playerVelocityY;

  // Wenn Spieler runter fällt soll er wieder respawnen
  if (playerY > 600) {
    playerVelocityY = 0;
    playerY = 0;
    playerX = 20;
  }

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

  // Spieler
  fill("yellow");
  square(playerX, playerY, PLAYER_SIZE);

  // Spieler nach links und rechts bewegen
  if (keyIsDown(LEFT_ARROW)) {
    playerX = playerX - 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX = playerX + 10;
  }
}

function keyPressed() {
  // Pfeiltaste oben, Spielergeschwindigkeit wird negativ, Spieler springt
  if (keyCode === 38 && jumpCount > 0) {
    jumpCount = jumpCount - 1;
    playerVelocityY = PLAYER_JUMP_FORCE;
  }

  return false; // prevent default
}
