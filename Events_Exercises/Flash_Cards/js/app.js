

var mainDiv = document.getElementById("mainDiv");
var ans1 = document.getElementById("Q1");
var ans2 = document.getElementById("Q2");
var ans3 = document.getElementById("Q3");

cards.addEventListener("click", theAnswer);

function theAnswer() {
  var questionAttribute = event.target.getAttribute("data-question");
  if (event.target == ans1) {
    mainDiv.innerText = "The capitol of Florida is " + questionAttribute;
  }
  if (event.target == ans2) {
    mainDiv.innerText = "The capitol of California is " + questionAttribute;
  }
  if (event.target == ans3) {
    mainDiv.innerText = "There are " + questionAttribute;
  }
}