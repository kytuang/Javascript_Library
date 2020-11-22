
function Calculate() {

    var inputID = Number(document.getElementById("inputID").value);
    var returnTip = document.getElementById("returnTip");
    var returnTotal = document.getElementById("returnTotal");

    var tip = inputID * .20;
    var totalBill = inputID + tip;

    returnTip.innerHTML = "Tip: $" + Number(tip).toFixed(2);
    returnTotal.innerHTML = "Total: $" + Number(totalBill).toFixed(2);


}