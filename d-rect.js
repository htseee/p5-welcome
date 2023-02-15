function setup() {
    createCanvas(400, 400);
    background(200);
}
function draw() {
    for (let posX = 0; posX < 5; posX++) {
        for (let posY = 0; posY < 5; posY++) {
            rect(25 + posX * 5, 25 + posY * 5, 50, 50);
        }
    }
}