function setup() {
    createCanvas(400, 400);
    background(200);
}
function draw() {
    for (let i = 0; i < 255; i++) {
        stroke(i);
        circle(200, 200, 255 - i);
    }
}