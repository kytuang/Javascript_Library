



function setup() {

    createCanvas(800, 600);
    
    }
    
    let xPos=400;
    let yPos=300;
    
    function draw() {
    
    background("Blue");
    
    fill("red");
    circle(xPos, yPos, 25);
    
    update();
    
    }
    
    function update()
    {
    if (keyIsDown(LEFT_ARROW)) {
    xPos =xPos- 2;
    }
    
    if (keyIsDown(RIGHT_ARROW)) {
    xPos =xPos+ 2;
    }
    
    if (keyIsDown(UP_ARROW)) {
    yPos =yPos- 2;
    }
    
    if (keyIsDown(DOWN_ARROW)) {
    yPos = yPos+ 2;
    }
    
    }
    