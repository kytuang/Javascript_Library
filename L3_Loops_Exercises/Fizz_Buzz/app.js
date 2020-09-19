


function setup() {
    createCanvas(1300, 600)
}

function draw() {
    background("gray");
    let y = 300;

    for ( var i = 0; i <= 25; i++){

    let x = i * 50;

        fill("black");
        ellipse(x+25, y+25, 50, 50);

        if (i % 3 == 0 && i % 5 == 0){
            fill("blue");
            square(x, y, 50);

        }
        else if ( i % 3 == 0) {
            fill("purple");
            ellipse(x+25, y+25, 50, 50);
        }
        else if (i % 5 == 0 ) {
            fill("green");
            square(x, y, 50);
        }
    }

    
}