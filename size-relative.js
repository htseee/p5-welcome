function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    fill(255);
    ellipse(width / 2, height / 2, width, height);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}