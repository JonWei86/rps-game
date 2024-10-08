
playGame();

function playGame(){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let humanScore = 0
    let computerScore = 0
    let round = 1
    
    function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        console.group(`Round: ${round}`);
        console.log(`You chose: ${humanChoice}`)
        console.log(`Computer chose: ${computerChoice}`)
        console.log("It's a tie! Nobody wins!");
        console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`)
        console.groupEnd();
        round ++
    } else if (
        (humanChoice === "paper" && computerChoice === "scissors")||
        (humanChoice === "rock" && computerChoice === "paper")||
        (humanChoice === "scissors" && computerChoice === "rock")
            ){
                computerScore ++
                console.group(`Round: ${round}`);
                console.log(`You chose: ${humanChoice}`)
                console.log(`Computer chose: ${computerChoice}`)
                console.log(`You lose! ${computerChoice} beats ${humanChoice}. Try again...`)
                console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`)
                console.groupEnd()
                round ++
            }
    else if (
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "scissors" && computerChoice === "paper")
            ){
                humanScore ++
                console.group(`Round: ${round}`);
                console.log(`You chose: ${humanChoice}`)
                console.log(`Computer chose: ${computerChoice}`)
                console.log(`You win! ${humanChoice} beats ${computerChoice}. Nice job!`)
                console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`)
                console.groupEnd()
                round ++
            }
    }
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

function getHumanChoice(){
    let humanChoice = prompt("What will you choose? (choices: Rock, Paper, Scissors)");

    return humanChoice;
}

function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() *3) +1)
    
    if (computerChoice === 1){
        return computerChoice = "rock"
    }
    else if (computerChoice === 2){
        return computerChoice = "scissors"
    }
    else{
        return computerChoice = "paper"
    }
}