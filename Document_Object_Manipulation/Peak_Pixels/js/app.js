let dvBox= document.getElementById("pixels");

dvBox.style.backgroundColor = "#038227";

varName = 100 + "px";

dvBox.style.width = varName;
dvBox.style.height = varName;


function zoom() {

    var dvBox = document.getElementById("pixels");
    var Box = dvBox.getBoundingClientRect();

    var varName = Box.height;
    var varName = Box.width;

    var newHeight = varName *1.1;
    var newWidth = varName * 1.1;


    
    document.getElementById("pixels").style.height = newHeight+"px";
    document.getElementById("pixels").style.width = newWidth+"px";


}