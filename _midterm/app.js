//Khai Tuang
//10/17/2020
//Midterm Exam

//canvas setup 400 by 400 perfect size for this game
function setup() {
        createCanvas(400, 400);
}
 
function draw() {
    //black background is a perfect blend
    background(70);
    
    //this update function allows us to 
    //(1) update the ball status of the ball
    //(2) run the paddle function with users' control
    ball.update();
    paddle.update();
    
    //allows the ball to bounce off the right wall
    //greater than 400 because canvas is 400 by 400
    //so it can't get passed x-axis of 400
    if(ball.x > 400) {
    ball.x = 400;
    ball.velocityX *= -1; //-1 kicks back
    }
    
    //allows the ball to bounce off the left wall
    //less than 0 on x-axis so that it won't bounce off
    //-1 allows it to kick back basically
    if(ball.x < 0) {
    ball.x = 0;
    ball.velocityX *= -1; //-1 kicks back 
    }
    
    //allows the ball to bounce off the top wall
    if(ball.y < 0) {
    ball.y = 0;
    ball.velocityY *= -1; //kicks back the ball
    }
    

    //hitTestPoint
    //if the ball.velocityX touchs anything off paddle "hitbox" of paddle.x, paddle.y, 
    //  paddle.w, paddle.h as defined. It will kick back with a *= -1
    if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {
    ball.velocityY *= -1;
    }
    

    //top blocks interactions because this will allows us to 
    //add the removal integration part when hit by the ball
    for(var i = 0; i < blocks.length; i++) { 
    var b = blocks[i]; //running for loop of blocks
    rect(b.x, b.y, 68, 20); // size of the blocks rect 60 by 30
    
    //do another hitpoint test for the blocks similar to the paddle
    if(hitTestPoint(ball.x, ball.y, b.x, b.y, 68, 20)) {
    ball.velocityY *= -1; //kicks back the ball when touch the blocks of rect by 60 by 20 
    
    //remove block from array
    blocks.splice(i, 1);  //splice is crucial here for the removal of the blocks by one
    }
}
}


//ball variable
var ball = {
    x: 100, y: 100, //starting at x-axis 100, y-axis 100
    velocityX: 2, velocityY: 2, 
    //velocity of 2 of x and 2, makes the ball go down at the right angle

    //we needed to place them in update function here so that we can call them at the top
    update: function() { 
    fill("orange")
    stroke(255, 238, 130);
    //"this" keyboard allows us to recall function in this variable for this case "ball"
    circle(this.x, this.y, 10);
    this.x += this.velocityX;
    this.y += this.velocityY;
    }
};

//paddle vairable
    var paddle = {
    //350 is a perfect replacement of paddle Y-axis for the 400, 400 
    //starting replacement at x-axis of 100 but it is intending to be control by users
    x: 100, y: 350, w: 150, h: 20, //rect paddle of 150 width and height of 20

    //we needed to place them in update function here so that we can call them at the top
    update: function() {  
//I filled them blue because that it looks nicer and we can diffienciate between the blocks (our goal) at  the top
//and paddle (our control) at the  bottom
    fill("blue"); 
  
    stroke(143, 251, 255);
    
    //"this" keyboard allows us to recall function in this variable for this case "paddle"
    rect(this.x, this.y, this.w, this.h);
    //red makes it feel like they are the bad guys so we need to elimates them
    fill("red")

    //users control of going left and right for the paddle
    //it is set at 2 frame because it is a perfect control sensitivity
    if(keyIsDown(LEFT_ARROW)) {
    this.x -= 2; // - goes  left
    }
    //it is set at 2 frame because it is a perfect control sensitivity
    if(keyIsDown(RIGHT_ARROW)) {
    this.x += 2; //+ goes right
    } 
    }
};
    
//blocks vairable
    var blocks = [];
    
    //for loops for 6 times for 6 blocks
    for(var i = 0; i < 6; i++) {
    blocks[i] = { x: i * 68, y: 10}; // changed the size so the blocks is fully run across
    }
    
    //hittestpoint for the blocks hitbox
    function hitTestPoint(px, py, bx, by, bw, bh) {
    
    // if it hits the blocks hitbox, returns the ball
    if(px > bx && px < bx + bw) {
    if(py > by && py < by + bh) {
    return true;
    }
}
    //if not, continue the ball's route
    return false;
}
