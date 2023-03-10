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
                text('๐ค', x, y); 
            } else if (brightness_val > 70) {
                text('๐', x, y);    
            } else if (brightness_val > 60) {
                text('๐งก', x, y);
            } else if (brightness_val > 50) {
                text('โค๏ธ', x, y);
            } else if (brightness_val > 40) {
                text('๐', x, y);
            } else if (brightness_val > 30) {
                text('๐', x, y);
            } else if (brightness_val > 20) {
                text('๐', x, y);
            } else {
                text('๐', x, y);
            }
        }
    }
}
 