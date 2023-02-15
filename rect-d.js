function setup() {
    createCanvas(400, 400);
    background(200);
}
function draw() {
    for (let posX = 0; posX < 300; posX++) {
        stroke(posX);
        rect(25, 25, 300 - posX, 300 - posX);
    }
}