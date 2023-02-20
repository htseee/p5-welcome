let xPos;
let yPos;
let size = 10;
let xSpeed = 1;
let ySpeed = 1;
function setup() {
    createCanvas(windowWidth, windowHeight);
    xPos = width;
    yPos = height / 2;
}
function draw() {
    background(0);

    ellipse(xPos, yPos, size, size);

    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    
    if (xPos < 0 || xPos > width) {
        xSpeed = xSpeed * -1;
    }
    if (yPos < 0 || yPos > height) {
        ySpeed = ySpeed * -1;
    }

    fill(100);
    textSize(72);
    textAlign(CENTER);
    text(frameCount, width / 2, height / 2);
}