let dvBox= document.getElementById("pixels");

dvBox.style.backgroundColor = "#038227";



dvBox.style.width = "100px" ;
dvBox.style.height = "100px" ;
  
var boxSize = dvBox.style.width * 1.1;
var boxSize = dvBox.style.height * 1.1;

function zoom() {

for (let x = 0; x >= 5; x++){
    
    dvBox.style.backgroundColor = "#820310";

    dvBox.style.width =  (boxSize + "px");
    dvBox.style.height = boxSize + "px";
    }


}