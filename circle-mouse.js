function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
}
function draw() {
    let size = 50;
    fill(mouseX, 135, mouseY);
    ellipse(mouseX, mouseY, size, size);
}