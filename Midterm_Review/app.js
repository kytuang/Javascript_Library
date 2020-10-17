

function setup() {

    createCanvas(800, 600);
}

let circleX = 400;
let circleY = 300;
let Xspeed = -5;
let Yspeed = -3;

let rectX = 700;
let rectY = 220;
let rectW = 20;
let rectH = 150;


function draw() {


    //light blue background
   background(52, 229, 235);

   //my paddle
   fill("black");
   rect(rectX, rectY, rectW, rectH);

   //keys up and down UPDATER
   update();


   //the ball
    fill (255, 0, 255);
    noStroke();
    ellipse(circleX, circleY, 30, 30)



    //ball speed and movement
   circleX = circleX + Xspeed;
   circleY = circleY + Yspeed;

  // if (circleX > 800) Xspeed =- Xspeed; 
  //left stoppper
    if (circleX == 0) 
        Xspeed =- Xspeed;
        //restarts the game after passing right
        else if (circleX > 800) {
    circleX = 400;
    circleY = 300;
    Xspeed = -5;
    Yspeed = -3;
         
    }
//top and bottom stopper
   if (circleY == 0) Yspeed =- Yspeed;
    else if (circleY > 600) {
        Yspeed =- Yspeed;
    }


  if (collideRect(circleX, circleY, rectX, rectY, rectW, rectH)) Xspeed =- Xspeed; 



}


//hitTestPoint
function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

  var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {
       

        if(circleY > rectY && circleY < rectY + rectH) {
        

              return true;

        }

   }

   return false;

}


//updater for paddle
function update()
{

if (keyIsDown(UP_ARROW)) {
rectY = rectY - 5;
}

if (keyIsDown(DOWN_ARROW)) {
rectY = rectY + 5;
}

}
