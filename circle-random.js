let xPos;
let yPos;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    frameRate(10);
}
function draw() {
    xPos = random(width);
    yPos = random(height);

    fill(0, 0, random(256));

    ellipse(xPos, yPos, 50);
}