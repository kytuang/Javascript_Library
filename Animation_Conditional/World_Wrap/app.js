

let xPos = 0;
let yPos = 300;

let xSpeed = 5;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(128, 128, 128);

    xPos = xPos + xSpeed;

    fill ("#03bafc");
    noStroke();

    circle(xPos, yPos, 30);

    if (xPos > 800){
        xPos = 0;

    }
}