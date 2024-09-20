function setup() {
  createCanvas(600, 600);
  background("red");
}
function draw() {
  stroke("rgb(189,161,15)");
  fill("black");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 100, 39);
  }
}
