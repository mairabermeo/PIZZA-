// bouncing circles
let numBalls = 13;
let spring = 0.05;
let gravity = 0.03;
let friction = -0.9;
let balls = [];
function setup() {
  createCanvas(400, 400);
   for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(30, 70),
      i,
      balls
    );
  }
  noStroke();
  fill(255, 204);
}
class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

function draw() {
   
  background(240, 248, 255);
 // pizza shape
  fill(214, 201, 19)
    triangle(10,350,200,20, 390, 350);
  // crust
  fill(97, 69, 3);
  rect(1, 350, 400, 35, 20);
 
  let s = 'New Yorkers who love Pizza' ;
  fill(230, 131, 139);
  text(s, 30,60,70,80);

  fill(235, 178, 183);
  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  })
    
  //olive
  ellipseMode(RADIUS);
  fill(89, 88, 56);
  ellipse(127, 255, 25, 25); // Outer white ellipse
  ellipseMode(CENTER);
  fill(145, 80, 31);
  ellipse(127, 255, 30, 30);
  //olive
  ellipseMode(RADIUS);
  fill(89, 88, 56);
  ellipse(216, 166, 25, 25); // Outer white ellipse
  ellipseMode(CENTER);
  fill(145, 80, 31);
  ellipse(216, 166, 30, 30);

//olive3
  ellipseMode(RADIUS);
  fill(89, 88, 56);
  ellipse(230, 255, 25, 25); // Outer white ellipse
  ellipseMode(CENTER);
  fill(145, 80, 31);
  ellipse(230, 255, 30, 30);
  
// straight cheese
  fill(255, 250, 250);
  rect(100, 200, 60, 10);
  rect(220, 290, 60, 10);
  rect(180, 96, 10, 60);
  rect(290, 220, 10, 60);
  
  //cheese
 translate(width / 2, height / 3);
rotate(PI / 4.0);
  fill(255,250,250)
  rect(-36, 30, 12, 42);
  
  translate(width / 2, height / 3);
rotate(PI / 2.0);
  fill(255,250,250)
rect(-46, -4, 12, 42);
  
 translate(width / 2, height / 3);
rotate(PI / 7.0);
  fill(255,250,250)
rect(-86, 60, 12, 42);
}