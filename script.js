let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let round = 1;

let humanScoreEle = document.querySelector('.humanScoreEle');
let computerScoreEle = document.querySelector('.computerScoreEle');
let playerChoice = document.querySelector('.playerChoice');
let roundNum = document.querySelector('.roundNum');
let msg = document.querySelector('.msgEle');
let msgContainer = document.querySelector('.msgContainer');
let playRoundBtn = document.querySelector('#playRoundBtn');

[...document.querySelectorAll('.btn')].forEach(function (btn) {
    btn.addEventListener('click',function(e){
        humanChoice = e.target.id;
        playerChoice.textContent = `${humanChoice}`;
        return humanChoice
    })
})

let playRound_btn = document.querySelector('#playRoundBtn');
    
    playRound_btn.addEventListener('click', function(){
        getComputerChoice();
        playRound(humanChoice, computerChoice);
    })

function getComputerChoice() {
    computerChoice = Math.floor((Math.random() *3) +1)

    switch (computerChoice){
        case 1:
            return computerChoice = "rock"
        case 2:
            return computerChoice = "scissors"
        default:    
            return computerChoice = "paper"
    }
}

function playRound(humanChoice, computerChoice){
    if (round > 5) {
        let newMsg = document.createElement("p");
        newMsg.textContent = "The game's finished! Would you like to play again? If so, click the 'Restart' button above!";
        msgContainer.appendChild(newMsg);
        playRoundBtn.remove();
        return
    }
    if(humanChoice === computerChoice){
        roundNum.textContent = round
        let newMsg = document.createElement("p");
        newMsg.textContent = `Round ${round}: It's a tie! Nobody wins! You chose: ${humanChoice} the Computer chose: ${computerChoice}.`;
        msgContainer.appendChild(newMsg)
    } else if (
        (humanChoice === "paper" && computerChoice === "scissors")||
        (humanChoice === "rock" && computerChoice === "paper")||
        (humanChoice === "scissors" && computerChoice === "rock")
            ){
                computerScore ++
                roundNum.textContent = round
                computerScoreEle.textContent = computerScore
                let newMsg = document.createElement("p");
                newMsg.textContent= `Round ${round}: You lose! You chose: ${humanChoice} Computer chose: ${computerChoice} ${computerChoice} beats ${humanChoice}. Try again...`
                msgContainer.appendChild(newMsg)
            }
    else if (
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "scissors" && computerChoice === "paper")
            ){
                humanScore ++
                roundNum.textContent = round
                humanScoreEle.textContent = humanScore
                let newMsg = document.createElement("p");
                newMsg.textContent = `Round ${round}: You win! You chose: ${humanChoice} Computer chose: ${computerChoice} ${humanChoice} beats ${computerChoice}. Nice job!`
                msgContainer.appendChild(newMsg)
            }
            if (round < 5) round ++
            else {round ++; checkWinner();}
}

function checkWinner() {
    const restart = document.createElement('button');
        restart.addEventListener('click', function(){
            location.reload();
        });
        restart.textContent = "Restart";

    if (computerScore > humanScore) {
        let newMsg = document.createElement("p");
        newMsg.textContent = `You lose! The computer won ${computerScore} to ${humanScore}!`;
        msgContainer.appendChild(newMsg);
        return msgContainer.appendChild(restart);
    }
    else {
        let newMsg = document.createElement("p");
        newMsg.textContent = `You won! Nice job! You won ${humanScore} to ${computerScore}`;
        msgContainer.appendChild(newMsg);
        return msgContainer.appendChild(restart);
    }
}