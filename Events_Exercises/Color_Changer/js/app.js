var mainDiv = document.getElementById("mainDiv");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

mainDiv.addEventListener("click", changer);

function changer() {
  if (event.target == div1) {
    event.target.style.backgroundColor = "red";
  }
  if (event.target == div2) {
    event.target.style.backgroundColor = "green";
  }
  if (event.target == div3) {
    event.target.style.backgroundColor = "blue";
  }
}
