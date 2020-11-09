
  

    for (var i = 1; i <= 100; i++ ) {
    var Box = document.createElement("div2");
    

    //generate the RGB format
    var randomColor = Math.floor(Math.random() * 256);
    var randomColor2 = Math.floor(Math.random() * 256);
    var randomColor3 = Math.floor(Math.random() * 256);

    //Box sizes and float to left
    Box.style.width = "20px";
    Box.style.height = "20px";
    Box.style.float = "left";


    //RGB Colors
    Box.style.backgroundColor = "rgb(" + randomColor + ","+randomColor2+","+randomColor3+")";

  document.body.appendChild(Box);
    }
 

