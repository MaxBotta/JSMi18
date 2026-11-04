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
let playerVelocity = 0;
const gravity = 0.3;

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

  // Spieler
  fill("yellow");
  square(playerX, playerY, playerSize);

  fill("green");
  rect(20, 540, 600, 20);
}

function keyPressed() {
  if (keyCode === 38) {
    console.log('press')
    playerVelocity = -10
  }
  return false; // prevent default
}
