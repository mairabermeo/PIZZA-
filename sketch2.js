// Group 2 member names: 
/*
function setup() {
  createCanvas(600, 500); // Sizes the canvas, making width = 600 and height = 500
  noStroke(); // Setting to draw our shapes without outlines
}

function draw() {
  background(220); // Paints the canvas a nice, neutral grey
  // Shows mouse position, just to be helpful.
  fill(0, 0, 0) // Change color to black for text
  text(`x: ${round(mouseX)}, y: ${round(mouseY)}`, 10, 10) 
  
  // Blue-ish circle code
  fill(0, 190, 240)
  square(100, 100, 100, 100)
  // red square
  fill(255, 204, 0)
  square(50, 5, 50);
  // Purplish circle code
  fill(90, 0, 222)
  square(50, 50, 40);
}
*/


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(240, 237, 74)
  ellipse(square(1, 1, 200))
  fill(235, 62, 56)
  ellipse(square(200, 1, 200))
  fill(38, 173, 26)
  ellipse(square(1, 200, 200))
  fill(34, 51, 179)
  ellipse(square(200, 200, 200))
}
  