// Variablen anlegen
// Es gibt verschiedne Datentypen
// Zeichen -> String
// Nummern -> Numbers, Ganzzahl -> Integer, Kommazahl -> float
// Listen -> Arrays
// Boolean -> True oder False

let myName = "Max"; // String
let myNumber = 101; // Number
let itsRaining = false; // Boolean

// Listen
let names = ["Max", "Damian", "Lea"]; // Array aus Zeichen
let numbers = [3, 6, 1, 3.2, 6.3]; // Array aus Zahlen

// Konstanten
const PI = 3.14; // Konstanter Wert (unveränderbar)

// Javascript Object, Sehr praktisch um Information zu speichern
let player = {
  username: "Gandalf10",
  life: 40,
  attack: 10,
  defense: 5,
  equipped: {
    weapon: 1903412,
  },
  inventory: [
    {
      id: 1903412,
      name: "Basic Sword",
      attack: 30,
    },
    {
      id: 23901392,
      name: "Basic Shield",
      defense: 20,
    },
  ],
  spawnPosition: {
    x: 1034,
    y: 312,
  },
  equip: function (objectName) {
    //...
  },
};

let monster = {
  life: 20,
  attack: 10,
  defense: 5,
};

// Beispiel für Quizgame
let questions = {
  html: [
    {
      id: 1,
      question: "Welchen Tag benutzt man für Fließtext",
      options: [
        { name: "<p>", isCorrect: true },
        { name: "<div>", isCorrect: false },
        { name: "<body>", isCorrect: false },
        { name: "<bodytext>", isCorrect: false },
      ],
    },
  ],
  css: [],
  js: [],
};

// If Anweisungen
if (monster.defense < player.attack) {
  monster.life += monster.defense - player.attack;
}

if (itsRaining) {
  player.equip("umbrella");
}

// Schleifen
for(let i = 0; i < 10; i++) {
  console.log(i)
}

let total = 0
for(let i = 0; i < 10; i++) {
  total = total + i
  console.log(total)
}


// Funktionen
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

let result = addTwoNumbers(3, 7) // = 10
