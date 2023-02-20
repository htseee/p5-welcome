function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    for (let i = 0; i < 10; i++) {
        let alpha = 50 + i * 10;
        let size = width / 3 - i * 30;
        push();
        fill(255, 250, 229, alpha);
        ellipse(width / 2, height / 2, size, size);
        pop();
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}