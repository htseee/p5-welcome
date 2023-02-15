function setup() {
    createCanvas(400, 400);
    background(200);
}
function draw() {
    for (let posX = 0; posX < 4; posX++) {
        for (let posY = 0; posY < 4; posY++) {
            circle(25 + posX * (25 + 90), 25 + posY * (25 + 90), 25);
        }
    }
}