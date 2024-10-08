function numGuess(){
    let secretNum = 7;
    let guessNum;

    while (guessNum !== secretNum){
    let guessNum = parseInt(prompt("Guess a number between 1 and 10:"));

    if (guessNum > secretNum){
        alert("Too high!");
    } else if(guessNum < secretNum){
        alert("Too low!");
    } else{
        alert("Correct!");
        break;
    }    
    }
}


