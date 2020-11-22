


function badWords() {
    var userInput = document.getElementById("inputID").value;

    var listWords = ["clear", "water", "tires"];

    var Splits = userInput.split(" ");

    var Check = Splits.filter((el) => listWords.includes(el) );
    
    wordsFound.innerHTML = "The bad word: " + Check.join(", ");
    wordsCount.innerHTML =  Check.length + " were found."; 

    if (Check.length== 0){
        wordsFound.innerHTML = null;
        wordsCount.innerHTML = "No bad words found.";
    }

    document.getElementById("userInput").value = null;
    
}