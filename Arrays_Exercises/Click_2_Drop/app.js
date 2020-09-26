


var bricksY = [];
var bricksX = [];


function setup() {
createCanvas(800, 600);

}

function draw () {

    background(50);
    noStroke();
    rectMode(CENTER);
    fill("orange");


    for (var i = 0; i < bricksY.length; i++ ) {
    
        rect(bricksY[i][0], bricksY[i][1], 100, 50);
        
        bricksY[i][1] += 5 ; //5 frame
    }
}
    function mousePressed() {

        bricksY.push([mouseX, mouseY, random("orange")]);
    }

