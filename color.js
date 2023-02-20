function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1);
}
function draw() {
    background(0);
    let redValue = random(255);
    let greenValue = random(255);
    let blueValue = random(255);
    let size = width / 4;
    colorMode(RGB);
    fill(redValue, greenValue, blueValue);
    ellipse(width / 4, height / 2, size, size);
    colorMode(HSB);
    let hueValue = random(360);
    fill(hueValue, 100, 100);
    ellipse(width / 4 * 3, height / 2, size, size);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}