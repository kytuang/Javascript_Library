let objects = [

    { color: "#FF0000", 
    height: 100,
    width: 300 },

    { color: "#FFFF00", 
    height: 200, 
    width: 200 },

    { color: "#ff0000", 
    height: 300, 
    width: 100 },

   ];


  for (var i = 0; i < objects.length; i++) {

    var box = objects[i];
    var newDiv1 = document.createElement("div");

    newDiv1.style.backgroundColor = box.color;
    newDiv1.style.height = box.height+"px";
    newDiv1.style.width = box.width+"px";

    document.body.appendChild(newDiv1);
  }
