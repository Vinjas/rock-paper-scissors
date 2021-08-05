const possibleResults = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    let randomIndex = Math.floor(
            Math.random() * (possibleResults.length) - 0
        ) + 0;
        
    let computerResult = possibleResults[randomIndex].toLowerCase();

    return computerResult;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "It's a tie!"
    } 
    else if (
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper"
    ) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
}

function game(rounds) {
    let results = "";

    for(let i = 0; i < rounds; i++) {
        let computerSelection = computerPlay();
        
        let playerSelection = window
            .prompt("Choose: Rock, Paper or Scisors")
            .toLowerCase();

        results += playRound(playerSelection, computerSelection) + "\n"
    }
    return console.log(results);
}

game(5);