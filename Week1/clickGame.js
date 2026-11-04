/*
Beschreibung: Klickspiel
Ziel: So viele Kreise wie möglioch klicken
Todos: 
  - Es soll ein Kreis immer an zufälligen Positionen erscheinen
  - Der Spieler soll den Kreis anklicken können
  - Nach dem Klick wird der Kreis an einer neuen Position gespawnt
  - Der Spieler hat 60 Sekunden Zeit
  - Jeder Klick auf einen Kreis gibt einen Punkt
*/

let score = 0;
let circlePosition = {
  x: 300,
  y: 300,
};

let circle = document.createElement("div");
circle.id = "circle";
circle.className = "circle";
document.body.appendChild(circle);

function render() {
  circle.style.top = circlePosition.y + "px";
  circle.style.left = circlePosition.x + "px";
}

function setRandomPosition() {
  let randomX = randomInt(window.innerWidth);
  let randomY = randomInt(window.innerHeight);
  circlePosition.x = randomX;
  circlePosition.y = randomY;

  render();
}

// Helferfunktion für zufällige Zahl
function randomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

setInterval(setRandomPosition, 1000);
