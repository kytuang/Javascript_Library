

var yposition = 0;
var xposition = 50;


class RainDrop {
    constructor(cx, cy, radius, color) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
        this.speed = 2 + Math.random() * 10;
    }

    update() {
        this.y = this.y + this.speed;
        fill(this.color);
        circle (this.x, this.y, this.radius);
    }
}

var bucketx = 0;
var buckety = 400;
var bucketWidth = 500;
var bucketHeight = 50;

function setup() {
    createCanvas(500,400);
    frameRate(70);
}

function draw() {
    //background(34,32,79);
    background(0, 0, 0);


    rainFall(255, 0, 0)
//rainFall(50, 200, 250);


    rect(bucketx, buckety, bucketWidth, bucketHeight);
    if(frameCount % 500 == 0){
        if(buckety != 0){

            bucketHeight = bucketHeight + 50;
            buckety = buckety - 50;
            this.color(50++);
        }
        
    }
}

rainFall = (r, g, b) =>{
    yposition++;

    noStroke();
    fill(r, g, b);

    triangle(xposition-10,yposition,xposition+10,yposition,xposition,yposition-40)
    ellipse(xposition,yposition,20,20);
    
    yposition = yposition + 8;
    
    if (yposition > 450){
    yposition = 0;
    xposition = random(400);
    } 

}