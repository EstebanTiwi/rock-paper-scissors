const box_rock = document.querySelector('.rock');
const box_paper = document.querySelector('.paper');
const box_scissors = document.querySelector('.scissors');

const close_btn = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');

// rock, paper, scissors
const arrayElements = ['Rock', 'Paper', 'Scissors'];

let userPoints = 0;
let computerPoints = 0;
let state, text;
let userChoice;
let computerChoice;

box_rock.addEventListener('click', function() {playRound(arrayElements[0])});
box_paper.addEventListener('click', function() {playRound(arrayElements[1])});
box_scissors.addEventListener('click', function() {playRound(arrayElements[2])});

close_btn.addEventListener('click', function() {
    popup.classList.remove('active');
})

function playRound(user) {
    userChoice = user;
    popup.classList.add('active');

    computerChoice = arrayElements[Math.floor(Math.random()*3)];

    if(userChoice == computerChoice) 
    {
        state = 'Draw!';
        text = `${userChoice} is tied against ${computerChoice}`;
    } else
    if(userChoice == arrayElements[0] && computerChoice == arrayElements[2]) 
    {
        playerWins()
    } else 
    if(userChoice == arrayElements[1] && computerChoice == arrayElements[0])
    {
        playerWins()
    } else 
    if(userChoice == arrayElements[2] && computerChoice == arrayElements[1]) 
    {
        playerWins()
    } else {
        state = 'You Lose!';
        text = `${computerChoice} beats ${userChoice}`;
        computerPoints++;
    }

    render();
}

function render() {
    const h1 = document.querySelector('.state');
    const p1 = document.querySelector('.text1');
    const p2 = document.querySelector('.text2');
    const p3 = document.querySelector('.points');

    h1.textContent = state;
    p1.textContent = `You chose ${userChoice} and the Computer chose ${computerChoice}`;
    p2.textContent = text;
    p3.textContent = `You: ${userPoints} Computer: ${computerPoints}`;
}

function playerWins() {
    state = 'You Win!';
    userPoints++;
    text = `${userChoice} beats ${computerChoice}`;
}