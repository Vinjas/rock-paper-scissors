const possibleResults = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    //Return rock, paper or scissors randomly
    let randomIndex = Math.floor(Math.random() * (possibleResults.length) - 0) + 0;
    let computerResult = possibleResults[randomIndex].toLowerCase();

    return computerResult;
}
//console.log(computerPlay())


function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "It's a tie!"
    }

    switch (playerSelection) {
        case "paper": {
            if(computerSelection === "scissors") {
                return "You lose! Scissors beats paper"
            } else if(computerSelection === "rock") {
                return "You win! Paper beats rock"
            }
        }
        case "scissors": {
            if(computerSelection === "paper") {
                return "You win! Scissors beats paper"
            } else if(computerSelection === "rock") {
                return "You lose! Rock beats scissors"
            }
        }
        case "rock": {
            if(computerSelection === "paper") {
                return "You lose! Paper beats rock"
            } else if(computerSelection === "scissors") {
                return "You win! Rock beats scissors"
            }
        }
        default: {
            return playerSelection;
        }
    }
}

function game(rounds) {
    let results = "";

    for(let i = 0; i < rounds; i++) {
        let computerSelection = computerPlay();
        let playerSelection = window.prompt("Choose: Rock, Paper or Scisors").toLowerCase();

        results += playRound(playerSelection, computerSelection) + "\n"
    }
    return console.log(results);
}

game(5);