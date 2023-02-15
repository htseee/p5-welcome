function setup() {
    createCanvas(400, 400);
    background(200);
}
function draw() {
    for (let posX = 0; posX < 7; posX++) {
        rect(25 + posX * 50, 25, 50, 50);
    }
}