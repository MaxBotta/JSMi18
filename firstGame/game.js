/*
Todos:
  - Spieler kann sich nach links und rechts bewegen
  - Spieler kann springen
  - Plattformen spawnen auf zufälliger Position und fahren nach links
  - Wenn Spieler linken Rand oder Boden berührt, verliert man
  - Zeit wird gestoppt

  - Gegner spawnen oder Gegenstände
  - Plattformen die Fallen beim berühren

*/

let playerX = 100;
let playerY = 0;
const playerSize = 40;
const playerJump = -16;
let playerVelocity = 0;

const gravity = 0.8;

const platforms = [
  {
    x: 20,
    y: 400,
    width: 400,
    height: 30,
  },
  {
    x: 400,
    y: 500,
    width: 200,
    height: 60,
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
  playerVelocity = playerVelocity + gravity;
  playerY = playerY + playerVelocity;

  // Wenn Spieler Boden berührt, soll Spieler nicht fallen
  if (playerY >= 600 - playerSize) {
    playerVelocity = 0;
    playerY = 600 - playerSize;
  }

  // Plattform (Für jedes Element in unsere Liste von Plattformen)
  for (let platform of platforms) {
    // Plattformen zeichnen
    fill("green");
    rect(platform.x, platform.y, platform.width, platform.height);

    if (
      playerY >= platform.y - playerSize &&
      playerY <= platform.y + platform.height - playerSize &&
      playerX + playerSize > platform.x &&
      playerX < platform.x + platform.width &&
      playerVelocity > 0
    ) {
      playerVelocity = 0;
      playerY = platform.y - playerSize;
    }
  }

  // Spieler
  fill("yellow");
  square(playerX, playerY, playerSize);

  // Spieler nach links und rechts bewegen
  if (keyIsDown(LEFT_ARROW)) {
    playerX = playerX - 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX = playerX + 10;
  }
}

function keyPressed() {
  // Pfeiltaste oben, Spielergeschwindigkeit wird negativ
  if (keyCode === 38) {
    playerVelocity = playerJump;
  }

  return false; // prevent default
}
