let capture;
let stepSize = 8;
function setup() {
    createCanvas(400, 400);
    capture = createCapture(VIDEO);
    capture.hide();
}
function draw() {
    background(220);
    image(capture, 0, 0);
    capture.loadPixels();
    for (let y = 0; y < capture.height; y += stepSize) {
        for (let x = 0; x < capture.width; x += stepSize) {
            let indexOfRed = (x + y * capture.width) * 4;
            let r = capture[indexOfRed];
            let g = capture[indexOfRed + 1];
            let b = capture[indexOfRed + 2];
            let a = capture[indexOfRed + 3];
            let brightness_val = brightness([r, g, b, a]);
            textSize(stepSize);
            if (brightness_val > 80) {
                text('🤍', x, y); 
            } else if (brightness_val > 70) {
                text('💛', x, y);    
            } else if (brightness_val > 60) {
                text('🧡', x, y);
            } else if (brightness_val > 50) {
                text('❤️', x, y);
            } else if (brightness_val > 40) {
                text('💖', x, y);
            } else if (brightness_val > 30) {
                text('💜', x, y);
            } else if (brightness_val > 20) {
                text('💙', x, y);
            } else {
                text('💚', x, y);
            }
        }
    }
}
 