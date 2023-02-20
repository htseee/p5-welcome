let yellowX, yellowY;
let blueX, blueY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  yellowX = width / 2;
  yellowY = height / 2;

  blueX = width / 2;
  blueY = height / 2;

  strokeWeight(5);
}

function draw() {
  background(255, 10);

  // TODO: Add push and pop to isolate the yellow spiral
  push();
  translate(yellowX, yellowY); // Start of code for yellow spiral
  rotate(frameCount * 0.001);
  stroke(255, 255, 0, 30);
  for (let i = 0; i < 24; i++) {
    rotate(PI / 12);
    line(0, 0, 0, 160);
  } // End of code for yellow spiral
  pop();
  
  // TODO: Add push and pop to isolate the blue spiral
  push();
  translate(blueX, blueY); // Start of code for blue spiral
  rotate(frameCount * 0.001 + PI / 8);
  stroke(0, 0, 255, 30);
  for (let i = 0; i < 24; i++) {
    rotate(PI / 12);
    line(0, 0, 0, 240);
  } // End of code for blue spiral
  pop();

}