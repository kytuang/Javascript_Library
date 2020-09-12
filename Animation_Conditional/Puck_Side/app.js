
function setup() {
    createCanvas(400, 300);
}

function draw() {
    //default background color "grey"
    background(128, 128, 128)
   
    //creating circle 
    circle(mouseX, mouseY, 20, 20); 
    //if mouse pixel is more than 200 fill circle
    if (mouseX > 200) {  
        //fill color with red
      fill("red");
    
    }

    //else mouse position is less than 200 fill circle with blue
    else {
        fill("blue");
    }

}

