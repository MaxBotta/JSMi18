const padding = 0;
const size = 40;

for (let x = 0; x < 20; x++) {
  for (let y = 0; y < 20; y++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.left = x * (size + padding) + "px";
    square.style.top = y * (size + padding) + "px";
    square.style.backgroundColor = "rgb(240, 240, 240)";
    square.style.position = "absolute";
    document.body.appendChild(square);

    square.addEventListener("mouseenter", function () {
      // square.style.animation = "lightUp 1s infinite";

      
      
      if (square.style.backgroundColor === "blue") {
        square.style.backgroundColor = "green";
      } else {
        square.style.backgroundColor = "blue";
      }
    });
  }
}
