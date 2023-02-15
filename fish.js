function setup() {
    createCanvas(400, 400);
    background(200);
}
function draw() {
    for (let posX = 0; posX < 20; posX++) {
        for (let posY = 0; posY < 20; posY++) {
            circle(posX * 25, posY * 25, 50);
        }
    }
}