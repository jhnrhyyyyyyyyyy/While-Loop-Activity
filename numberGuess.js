let secretNum = 7;

let guess = 0;
while (guess < 10){
    let guessNum = parseInt(prompt("Guess a number between 1 and 10:"));

    if (secretNum === guessNum){
        console.log("You guess the correct number!");
        break;
    } else if (secretNum < guessNum){
        console.log("Too high!");
        guess++;
    } else{
        console.log("Too low");
        guess++;
    }
    if (guess === 10){
        console.log("Attemp reach the limit");
    }

}

