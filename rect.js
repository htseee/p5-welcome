function setup() {
    createCanvas(400, 400);
    background(200);
}
function draw() {
    for (let posX = 0; posX < 30; posX++) {
        for (let posY = 0; posY < 30; posY++) {
            rect(25 + posX * 10, 25 + posY * 10, 50, 50);
        }
    }
}