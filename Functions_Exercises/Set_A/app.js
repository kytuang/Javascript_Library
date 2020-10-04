

function setup() {

    createCanvas(800, 600);

}

let colors = ["Blue", "Red", "Purple", "Green"];


function draw() {

 background(220);



  ellipse(400, 300, 300, 300);
  
}

function mousePressed()  {

 fill(random(colors));


}




