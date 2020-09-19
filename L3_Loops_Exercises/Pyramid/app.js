
function setup() {
    createCanvas(600, 600)
}

function draw() {
    background("white");
    fill("red");
    stroke("white"); //nostroke does not work
    

    //first loop to define the rows
    for (var i = 0; i <= 3; i++) {

        //another loop to define the columns
       for (let v = 0; v <= i; v++){
  
        //square size of 50. rows and colums by 50 + the loops
            square( v * 50, i * 50, 50);

        }
        
    }
}
