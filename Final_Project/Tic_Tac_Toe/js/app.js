
//neccessary variables
var sizeX = 3
var blank = "&nbsp;"
var boxes = []; //array with push function
var score; // for update the score
var mark; //players move

//tictactoe game
function tictactoe() {
    var grid = document.createElement('table'); //colorful grid
    grid.setAttribute("border", 5); // create 5 px borders
    grid.setAttribute("cellspacing", 10); // 10px space between borders
//players check mark
var checker = 1;
for (var i = 0; i < sizeX; i++) { //player mark points
    var row = document.createElement('tr');
    grid.appendChild(row);
    for (var j = 0; j < sizeX; j++) {

var cell = document.createElement('td');

//the grid size and formatting
cell.setAttribute('height', 120); 
cell.setAttribute('width', 120); 
cell.setAttribute('align', 'center');
cell.setAttribute('valign', 'center');

        cell.classList.add('col' + j,'row' + i);
        if (i == j) {
            cell.classList.add('diagonal0');
        }
        if (j == sizeX - i - 1) {
            cell.classList.add('diagonal1');
        }
        cell.checker = checker;
        cell.addEventListener("click", result);//cluck function
        row.appendChild(cell); //cell
        boxes.push(cell); // modify array
        checker += checker; //add new
    }
}
//recall the grid
document.getElementById("game").appendChild(grid);
}

//reset is meant to start the game and reset 
function Reset() {
    score = {
        "X": 0,
        "O": 0
    };
    mark = 0;
    winner = "X";
    boxes.forEach(function (square) {
        square.innerHTML = blank;
        });
        document.getElementById('winner').textContent = null;
        showResult.innerHTML = null;
}

//check winner
function win(clicked) {

var winning = clicked.className.split(/\s+/);
for (var i = 0; i < winning.length; i++) {
    var testClass = '.' + winning[i];
var items = container('#game ' + testClass, winner);
   
    if (items.length == sizeX) {
        return true;
    }
}
return false;
}
//get the Xs and Os elements
function container(selector, text) {
var elements = document.querySelectorAll(selector);
return [].filter.call(elements, function(element){
return RegExp(text).test(element.textContent);
});
}

//
function result() {
if (this.innerHTML !== blank) {
    return;
}
this.innerHTML = winner; //display the results
mark += 1;
score[winner] += this.checker; //display the winner
if (win(this)) { //if winner
    showResult.innerHTML = ('winner: Player ' + winner);
    score = {
        "X": 0,
        "O": 0
    };
    mark = 0;
    winner = "X";
    //reset
     boxes.forEach(function (square) {
       square.innerHTML = blank; 
       });
} else if (mark === sizeX * sizeX) {
    showResult.innerHTML= ("The game is Draw");
    score = {
        "X": 0,
        "O": 0
    };
    mark = 0;
    winner = "X";
    //reset
    boxes.forEach(function (square) {
        square.innerHTML = blank;
      });
} else {
    //whose turns
    winner = winner === "X" ? "O" : "X";
    //this players turn
    document.getElementById('winner').textContent = 'Player ' + winner + ' turns';
    }
}
//go 
tictactoe();