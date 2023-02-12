function setup() {
    createCanvas(500, 500);
    line(0, height / 2, width, height / 2);
    line(width / 2, 0, width / 2, height);
}
// TODO: Create setup() function

  // Inside the setup() function:
  // TODO: Create canvas 500px wide and 500px high

  // TODO: Draw horizontal and vertical guidelines


function draw() {
    stroke(127);
    strokeWeight(4);
    for (let count = 0; count < 10; count++) {
        line(0 + count * 25, 0, 0 + count * 25, width / 2);
    }

    fill('#ffd700');
    noStroke();
    for (let posX = 0; posX < 10; posX++) {
        for (let posY = 0; posY < 10; posY++) {
            if (posX % 2) {
                circle(width / 2 + posX * 25, 10 + posY * 25, 10);
            } else {
                circle(width / 2 + posX * 25, 10 + posY * 25 + 10, 10);
            }
        }
    }

    for (let posX = 0; posX < 10; posX++) {
        for (let posY = 0; posY < 5; posY++) {
            square(0 + posX * 25, height / 2 + posY * 50, 25);
        }
    }

    for (let posX = 0; posX < 10; posX++) {
        for (let posY = 0; posY < 5; posY++) {
            if (posX % 2 == 0) {
                fill('red');
                square(width / 2 + posX * 25, height / 2 + posY * 50 + 25, 25);
            } else {
                fill('#ffd700');
                square(width / 2 + posX * 25, height / 2 + posY * 50, 25);
            }
            
        }
    }

    strokeWeight(10);
    stroke('blue');
    for (let i = 0; i < 10; i++) {
        line(width, height - i * 25, width / 2 + i * 25, height);
        line(width / 2 + i * 25, height / 2, width / 2, height - i * 25);
    }

    stroke('black');
    line(0, 0, width, 0);
    line(0, 0, 0, height);
    line(0, height, width, height);
    line(width, 0, width, height);
}

// TODO: Create wall drawing inside draw() function

  // Inside the draw() function:
  // Draw parallel lines:
  // TODO: Set stroke color and weight



  // TODO: Use a for loop to draw 10 vertical lines



  // Draw polka dots:
  // TODO: Set no stroke and fill color



  // TODO: Use nested for loops to draw a grid of circles
  // TODO: Offset y positions of every other column by 10 pixels



  // Draw checkered squares:
  // TODO: Set fill color


  // TODO: Use nested for loops to draw rows of squares
  // TODO: Offset y positions of every other column by 25 pixels


  
  // Draw parallel diagonal lines:
  // TODO: Set stroke color and weight


  // TODO: Use a for loop to draw diagonal lines



  // Draw borders:
  // TODO: Set stroke color


  // TODO: Draw horizontal and vertical guidelines


  // TODO: Draw borders around canvas


