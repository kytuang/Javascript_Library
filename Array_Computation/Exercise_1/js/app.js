

function compute() {
    
    var comma = document.getElementById("numbers").value;
    var returnSum = document.getElementById("returnSum");
    var returnAvg = document.getElementById("returnAvg");

    sum = 0;
    average = 0;

    var Splits= comma.toString().split(',');

   for (i= 0; i < Splits.length; i++) {
    sum += parseInt(Splits[i]);
    }

    average = sum / Splits.length;
    returnSum.innerHTML = "The Sum: " + sum.toFixed(2);
    returnAvg.innerHTML = "The Average: " + average.toFixed(2);

    document.getElementById("numbers").value = null;

}

