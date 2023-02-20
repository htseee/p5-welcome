// TODO: Set up how many balls we want
let ballCount = 100;
// TODO: Set up x and y position variable to equal an empty array
let x = [];
let y = [];
// TODO: Set up speed, size and color variable to equal an empty array
let xSpeed = [];
let ySpeed = [];
let size = [];
let r = [];
let g = [];
let b = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // TODO: Create a for loop that iterates through i until it reaches the ball count value
  for (let i = 0; i < ballCount; i++) {
    x[i] = width / 2;
    y[i] = height / 2;    
    xSpeed[i] = random(-5, 5);
    ySpeed[i] = random(-5, 5);
    size[i] = random(10, 50);
    r[i] = random(256);
    g[i] = random(256);
    b[i] = random(256);    
  }
    // Inside the for loop:
    // TODO: Set x and y position to be the center

    // TODO: Set the speeds to be random

    // TODO: Set the size to be random

    // TODO: Set the colors to be random
}

function draw() {
  background(0, 50);
  
  // TODO: Iterate through a new for loop to change the properties in order to animate the balls
  for (let i = 0; i < ballCount; i++) {
    x[i] = x[i] + xSpeed[i];
    y[i] = y[i] + ySpeed[i];
    if (x[i] < 0 || x[i] > width) {
      xSpeed[i] = xSpeed[i] * -1;
    }
    if (y[i] < 0 || y[i] > height) {
      ySpeed[i] = ySpeed[i] * -1;
    }
    fill(r[i], g[i], b[i]);
    noStroke();
    ellipse(x[i], y[i], size[i], size[i]);
  }
    // Inside the for loop:
    // TODO: Increment speed for x position

    // TODO: Increment speed for y position

    
    // TODO: Reverse x direction if ball hits left or right sides


    // TODO: Reverse y direction if ball hits top or bottom sides


    // TODO: Set random R, G, B values


    // TODO: Style to have no strokes


    // TODO: Draw the bouncing balls
}