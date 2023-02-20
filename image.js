let img;
let imagePath = 'cutePuppy.jpg';

function preload() {
    img = loadImage(imagePath);
}
function setup() {
  createCanvas(300, 400);
  //Load image here:
}

function draw() {
  background(220);
  //Draw image here:
  image(img, 0, 0, 300, 400);
}