/*
function setup() {
  createCanvas(600, 500); 
  noStroke(); 
}

function draw() {
  background(220); 
  // big triangle
  fill(227, 191, 152);
  triangle(62, 70, 305, 450, 530, 70);
  
  // first circle topping
  fill(200,300,400)
  circle(150,90,30)
// second circle topping 
  fill(100,145,200)
  circle(500,90,30)
  

  
  text(`x: ${round(mouseX)}, y: ${round(mouseY)}`, 10, 10) 
}

*/

function draw() {
  background(220); 
  // big triangle
  fill(227, 191, 152);
  triangle(80, 42, 312, 450, 501, 42);
  
  fill(191, 156, 119);
  rect(89, 41, 408, 41);
  
  fill(179, 104, 91);
  circle(178, 127, 50);
  circle(326, 265, 50);
  circle(373, 123, 50);
  
  fill(117, 34, 20);
  circle(306, 347, 50);
  circle(281, 139, 50);
  
  fill(250, 244, 125);
  rect(300, 200, 60, 10);
  

  
  text(`x: ${round(mouseX)}, y: ${round(mouseY)}`, 10, 10) 
}

