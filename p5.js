function setup() {
    // Your setup code goes here
    createCanvas(400, 400);
    // Run the draw() function once per second (you will learn about the frameRate() function in a later lesson)
    frameRate(1);
}

function draw() {
    background(Math.floor(Math.random() * 256));
}