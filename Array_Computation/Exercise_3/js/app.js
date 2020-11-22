


let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];


objects.forEach((div2) => {

    let div1 = document.createElement("div1");
    div1.setAttribute('color', div2.color);
    div1.setAttribute('height',  div2.height);
    div1.setAttribute('width', div2.width);

    document.body.appendChild(div1);

});
