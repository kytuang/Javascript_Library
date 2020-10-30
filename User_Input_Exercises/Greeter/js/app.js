
let Name = document.getElementById("Name");
let returnResult = document.getElementById("returnResult");



function getName() {

    returnResult.innerHTML = "Hello,  " + Name.value + "!";

    Name.value = " ";
    

}