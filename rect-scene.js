function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
  }
  function draw() {
    background(0);
    translate(width / 2, height / 2);
    for (let x = 500; x > 0; x -= 5) {
        let y = x;
        strokeWeight(0.5);
        rotate(radians(frameCount / 50));
        fill(255, x, 255);
        rect(0, 0, x, y);
    }
  }