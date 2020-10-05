

function setup() {

    createCanvas(800, 600);
}

let circleX = 80;
let circleY = 40;
let Xspeed = 5;
let Yspeed = 5;

let rectX = 300;
let rectY = 500;
let rectW = 250;
let rectH = 50;

function draw() {

    background("gray");

   fill("black");
   rect(rectX, rectY, rectW, rectH);


    fill ("red");
    ellipse(circleX, circleY, 15, 15)

   circleX = circleX + Xspeed;
   circleY = circleY + Yspeed;

 if (circleX > 800) Xspeed =- Xspeed; 
 else if (circleX == 0) {
 Xspeed =- Xspeed;
 }
  if (circleY == 0) Yspeed =- Yspeed;
  else if (circleY > 600) {
      Yspeed =- Yspeed;
  }

  if (collideRect(circleX, circleY, rectX, rectY, rectW, rectH)) Yspeed =- Yspeed;


}


function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {
       

        if(circleY > rectY && circleY < rectY + rectH) {
        

              return true;

        }

   }

   return false;

}
