var mainDiv = document.getElementById("mainDiv");
var currentColor = document.getElementById("changeDiv");
var newButtons = document.getElementById("newButtons");

var redOne = document.getElementById("red1");
var redFive = document.getElementById("red5");
var redTen = document.getElementById("red10");

var greenOne = document.getElementById("green1");
var greenFive = document.getElementById("green5");
var greenTen = document.getElementById("green10");

var blueOne = document.getElementById("blue1");
var BlueFive = document.getElementById("blue5");
var blueTen = document.getElementById("blue10");

var red = 0;
var blue = 0;
var green = 0;

newButtons.addEventListener("click", changeColor);

function changeColor(r, g, b) {
  document.getElementById("changeDiv").textContent =
    "current color: rgb(" + red + "," + green + "," + blue + ")";
  mainDiv.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

  if (event.target == redOne) {
    red = red + 1;
    document.getElementById("changeDiv").textContent =
      "current color: rgb(" + red + "," + green + "," + blue + ")";
    mainDiv.style.backgroundColor =
      "rgb(" + red + "," + green + "," + blue + ")";
  } else if (event.target == redFive) {
    red = red + 5;
    document.getElementById("changeDiv").textContent =
      "current color: rgb(" + red + "," + green + "," + blue + ")";
    mainDiv.style.backgroundColor =
      "rgb(" + red + "," + green + "," + blue + ")";
  } else if (event.target == redTen) {
    red = red + 10;
    document.getElementById("changeDiv").textContent =
      "current color: rgb(" + red + "," + green + "," + blue + ")";
    mainDiv.style.backgroundColor =
      "rgb(" + red + "," + green + "," + blue + ")";
  } else if (event.target == greenOne) {
    green = green + 1;
    document.getElementById("changeDiv").textContent =
      "current color: rgb(" + red + "," + green + "," + blue + ")";
    mainDiv.style.backgroundColor =
      "rgb(" + red + "," + green + "," + blue + ")";
  } else if (event.target == greenFive) {
    green = green + 5;
    document.getElementById("changeDiv").textContent =
      "current color: rgb(" + red + "," + green + "," + blue + ")";
    mainDiv.style.backgroundColor =
      "rgb(" + red + "," + green + "," + blue + ")";
  } else if (event.target == greenTen) {
    green = green + 10;
    document.getElementById("changeDiv").textContent =
      "current color: rgb(" + red + "," + green + "," + blue + ")";
    mainDiv.style.backgroundColor =
      "rgb(" + red + "," + green + "," + blue + ")";
  } else if (event.target == blueOne) {
    blue = blue + 1;
    document.getElementById("changeDiv").textContent =
      "current color: rgb(" + red + "," + green + "," + blue + ")";
    mainDiv.style.backgroundColor =
      "rgb(" + red + "," + green + "," + blue + ")";
  } else if (event.target == BlueFive) {
    blue = blue + 5;
    document.getElementById("changeDiv").textContent =
      "current color: rgb(" + red + "," + green + "," + blue + ")";
    mainDiv.style.backgroundColor =
      "rgb(" + red + "," + green + "," + blue + ")";
  } else if (event.target == blueTen) {
    blue = blue + 10;
    document.getElementById("changeDiv").textContent =
      "current color: rgb(" + red + "," + green + "," + blue + ")";
    mainDiv.style.backgroundColor =
      "rgb(" + red + "," + green + "," + blue + ")";
  }
}
