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

let playerX = 100;
let playerY = 0;
const playerSize = 40;
const playerJump = -16;
let playerVelocity = 0;
let playerRotation = 0;
let isRotating = false;

const jumpCountDefault = 2;
let jumpCount = jumpCountDefault;

const gravity = 0.8;

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

  angleMode(DEGREES);
}

// Gameloop (wiederholt sich die ganze Zeit, Framerate)
function draw() {
  background(0, 200, 250);

  // Spieler fällt wegen Gravitation
  playerVelocity = playerVelocity + gravity;
  playerY = playerY + playerVelocity;

  // Wenn Spieler runter fällt soll er wieder respawnen
  if (playerY > 600) {
    playerVelocity = 0;
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
      playerY >= platform.y - playerSize &&
      playerY <= platform.y + platform.height - playerSize &&
      playerX + playerSize > platform.x &&
      playerX < platform.x + platform.width &&
      playerVelocity > 0
    ) {
      // Spieler steht auf Plattform
      playerVelocity = 0;
      playerY = platform.y - playerSize;

      //Spieler mitbewegen
      // player.x = player.x - platform.speed;

      // Setze die Jumpcount wieder zurück
      jumpCount = jumpCountDefault;
    }
  }

  // Spieler
  fill("yellow");
  square(playerX, playerY, playerSize);

  if (isRotating === true) {
    playerRotation = playerRotation + 5;
  }
  if (playerRotation >= 360) {
    playerRotation = 0;
    isRotating = false;
  }

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
    playerVelocity = playerJump;

    isRotating = true;
  }

  return false; // prevent default
}
