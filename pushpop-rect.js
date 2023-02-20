function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0);
  
    // Red square
    push(); 
    translate(50, 50);
    fill(255, 0, 0);
    rect(0, 0, 100, 100);
    pop(); 
  
    // Yellow square
    push(); 
    translate(300, 150);
    rectMode(CENTER);
    rotate(QUARTER_PI);
    rotate(radians(frameCount))
    fill(255, 255, 0);
    rect(0, 0, 100, 100);
    pop(); 
  
    // Blue square
    push(); 
    translate(100, 250);
    shearX(-0.5);
    fill(0, 0, 255);
    rect(0, 0, 100, 100);
    pop();
  }