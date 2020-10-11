


function setup() {
    createCanvas (800, 600);
}



var myCircles = [
    {x: 80, y:0, r:10 },
    {x: 0, y:300, r:30 },
    {x: 400, y:300, r:25 },
    {x: 200, y:200, r:15 },
    {x: 600, y:500, r:30 },
    {x: 50, y:50, r:50 },
    {x: 400, y: 0, r:30 }

];

function draw () {

    for (var i = 0; i < myCircles.length; i++){

        circle(myCircles[i].x += 1, myCircles[i].y += 1, myCircles[i].r );
    }
}

