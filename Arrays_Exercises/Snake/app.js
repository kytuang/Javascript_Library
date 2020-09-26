




let xPosition = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
let yPosition = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];


function setup() {

    createCanvas(800, 600);

}

function draw(){

        background("gray");
    
        
        xPosition.shift();
        xPosition.push(mouseX);

        yPosition.shift();
        yPosition.push(mouseY);

        
       
        

        for(let i=0; i<10; i++) {

        ellipse( xPosition[i], yPosition[i], 10, 10);
        fill("blue");
        
        }
}

   
   
   

