

let colors = [ "#ffff99", "#996633", "#ff9999"]

function setup() {
    createCanvas(600, 600)
}



function draw() {
    background(0);

for (var i = 0; i < colors.length; i++) {

    fill( colors[i] );

    rect(0, 200 * i, 600, 200)
}


}