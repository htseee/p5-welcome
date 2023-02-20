let capture;
let alpha = 20;
function setup() {
    createCanvas(400, 400);
    capture = createCapture(VIDEO);
}
function draw() {
    capture.loadPixels();
    for (let y = 0; y < capture.height; y++) {
        for (let x = 0; x < capture.width; x++) {
            let indexOfRed = (x + y * capture.width) * 4;
            capture[indexOfRed + 3] = alpha;
        }
    }
    capture.updatePixels();
    image(capture, 0, 0);
    filter(GRAY);
}