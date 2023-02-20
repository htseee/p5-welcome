let t;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noFill();
    stroke(255);
    strokeWeight(2);
    t = 0;
}
function draw() {
    // noStroke();
    background(0, 16);
    // fill(255);
    makeCircle(4, 50, 600);
    makeCircle(0, 200, 200);
    makeCircle(100, 200, 1);
}
function makeCircle(xPos, yPos, circleSize) {
    let x = width * noise(t + xPos);
    let y = height * noise(t + yPos);
    let size = width * noise(t + circleSize);
    ellipse(x, y, size, size);
    t = t + 0.001;
}