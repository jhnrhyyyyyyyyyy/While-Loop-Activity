let secretNum = 7;
let guessNum;

while (guessNum !== secretNum){
    let guessNum = parseInt(prompt("Guess a number between 1 and 10:"));

    if (guessNum > secretNum){
        console.log("Too high!");
    } else if(guessNum < secretNum){
        console.log("Too low!");
    } else{
        console.log("Correct!");
        break;
    }    
}

