let laserPosY = 0;
let fps = 40;
let prevSection;
let capture;
function setup() {
    createCanvas(400, 400);
    capture = createCapture(VIDEO);
}
function draw() {
    background(220);
    image(capture, 0, laserPosY, 400, 400, 0, laserPosY, 400, 400 - laserPosY);
    prevSection = capture.get(0, laserPosY, 400, 2);
    image(prevSection, 0, laserPosY - 3,  400, 2);
    strokeWeight(4);
    stroke('CYAN');
    line(0, laserPosY, 400, laserPosY);
    laserPosY++;
    if (laserPosY > 400) {
        laserPosY = 0;
    }
    frameRate(fps);
}