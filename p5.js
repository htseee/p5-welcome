let circleWidth = 50;
let shapeWidth = 100;

function setup() {
    // Your setup code goes here
    createCanvas(400, 400);
    // Run the draw() function once per second (you will learn about the frameRate() function in a later lesson)
    //frameRate(1);
    background(200);
}

function draw() {
    //background(Math.floor(Math.random() * 256));

    point(200, 200);
    point(100, 200);
    line(20, 40, 320, 120);
    line(200, 0, 200, 400);
    line(0, 400, 400, 0);
    rect(30, 20, 100, 200);
    square(250, 100, 100);
    ellipse(150, 200, 150, 100);
    circle(300, 150, 75);
    triangle(100, 100, 200, 200, 130, 300);
    triangle(100, 100, 150, 100, 140, 20);
    quad(100, 100, 20, 20, 10, 20, 10, 40);
    quad(100, 100, 50, 100, 40, 100, 20, 120);

    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
    circle(width / 4, height / 4, circleWidth);
    circle(width - width / 4, height / 4, circleWidth);
    circle(width / 4, height - height / 4, circleWidth);
    circle(width - width / 4, height - height / 4, circleWidth);
    
    // TODO: Set the top-left circle fill to rgb blue
    fill(0, 0, 255);
    stroke(0, 255, 0);
    strokeWeight(1);
    circle(width/2 - shapeWidth, shapeWidth, shapeWidth);
  
  // TODO: Set the top-right rectangle fill to black with alpha level of 40  
    fill(0, 40);
    noStroke();
    square(width/2 + shapeWidth/2, shapeWidth/2, shapeWidth);
    
  // TODO: Set the bottom-left triangle to 'purple'
    fill('purple');
    triangle(shapeWidth/2, height/2 + shapeWidth/2, shapeWidth/2, height - shapeWidth/2, width/2 - shapeWidth/2, height/2 + shapeWidth/2);
  
  // TODO: Set the bottom-right circle to transparent
    noFill();
    stroke(0, 10, 0);
    circle(width/2 + shapeWidth, height/2 + shapeWidth, shapeWidth);    
}