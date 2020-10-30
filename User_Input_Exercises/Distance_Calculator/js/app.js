

function Calculate() {
    
    var x1 = Number(document.getElementById("x1").value);
    var y1 = Number(document.getElementById("y1").value);
    var x2 = Number(document.getElementById("x2").value);
    var y2 = Number(document.getElementById("y2").value);


    var distanceTotal = Math.sqrt (x1 * x2 + y1 * y2)


    getOutput.innerHTML = "Total Distance: " + Number(distanceTotal).toFixed(3);


}