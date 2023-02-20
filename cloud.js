let xPos = 0;
let yPos;
let cloudSize;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  makeCloud(xPos + width / 2, 50, 50);
  makeCloud(xPos + width / 7, 210, 140);
  makeCloud(xPos + width / 1.5, 340, 70);
}

function makeCloud(xPos, yPos, cloudSize) {
  noStroke();
  fill(255);

  ellipse(xPos, yPos, cloudSize);
  ellipse(xPos + cloudSize / 2, yPos, cloudSize);
  ellipse(xPos + cloudSize, yPos, cloudSize);
  ellipse (xPos + cloudSize/2, yPos - cloudSize/3, cloudSize);
}