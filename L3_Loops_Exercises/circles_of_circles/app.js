

function setup() {
    createCanvas(400, 400)
}
//one draw function
function draw() {
    //silver background color
    background("#E0E0E0");

    //allowing things inside the circles
    noFill();


    for(var i=0; i< 34; i++) {
        //black circles
        stroke("black");

        //200x200 in center position creating circles outwards starting at 0 by 6 pixels till 34
        circle(200, 200, i * 6);
    }
}

