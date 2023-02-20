let capture;
let filterTypes;
let currentFilterIndex = 0;
function setup() {
    createCanvas(400, 400);
    capture = createCapture(VIDEO);
    capture.hide();
    filterTypes = [
        {name: GRAY},
        {name: THRESHOLD},
        {name: POSTERIZE, arg: 3}
    ];
}
function draw() {
    background(220);
    image(capture, 0, 0, width, height);
    let currentFilter = filterTypes[currentFilterIndex];
    if (currentFilter.arg) {
        filter(currentFilter.name, currentFilter.arg);
    } else {
        filter(currentFilter.name);
    }
}
function mousePressed() {
    currentFilterIndex++;
    if (currentFilterIndex >= 3) {
        currentFilterIndex = 0;
    }
}