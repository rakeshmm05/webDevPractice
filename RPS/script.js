let score = 0;
let choice = ['Rock', 'Paper', 'Scissors'];

const result = document.getElementById("Result");

const user = document.getElementById("yourChoice");

const comp = document.getElementById("computerChoice");

const scoreText = document.getElementById("Score");

function playGame(playerChoice){

    let computerChoice = choice[Math.floor(Math.random() * 3)];
    user.textContent = `You chose: ${playerChoice}`;
    comp.textContent = `Computer chose: ${computerChoice}`;

    if(playerChoice == computerChoice){
        result.textContent = "Tie!";
    }
    else if(playerChoice == 'Rock' && computerChoice == 'Scissors' ||
            playerChoice == 'Paper' && computerChoice == 'Rock' ||
            playerChoice == 'Scissors' && computerChoice == 'Paper'
    ){
        result.textContent = `Player Wins!`;
        score++;
    }
    else{
        result.textContent = 'Computer Wins!';
    }
    scoreText.textContent = `Score : ${score}`;
}

function reset(){
    result.textContent = "Choose your weapon!";
    user.textContent = "You chose: -";
    comp.textContent = "Computer chose: -";
    score = 0;
    scoreText.textContent = "Score : 0";
}
