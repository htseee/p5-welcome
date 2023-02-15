function setup() {
    createCanvas(400, 400);
    background(200);
}
function draw() {
    for (let posX = 0; posX < 6; posX++) {
        for (let posY = 0; posY < 6; posY++) {
            rect(25 + posX * 55, 25 + posY * 55, 50, 50);
        }
    }
}