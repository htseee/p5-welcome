function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(20);
    // fill(mouseX, mouseY, 100);
    if (mouseX > 250) {
        fill(100, 100, 100);
    } else {
        fill(200, 200, 200);
    }
    if (mouseX > 250 && mouseY > 250) {
        ellipse(mouseX, mouseY, 20, 20);
    } else {
        ellipse(mouseX, mouseY, 100, 100);
    }
    ellipse(350, 10, 100, 10);
    ellipse(350, 200, 10, 100);
    rect(250, 100, 10, 100, 10);
  }
  