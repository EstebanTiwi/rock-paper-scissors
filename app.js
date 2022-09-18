const box_rock = document.querySelector('.rock');
const box_paper = document.querySelector('.paper');
const box_scissors = document.querySelector('.scissors');

const close_btn = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');

const arrayElements = ['rock', 'paper', 'scissors'];

box_rock.addEventListener('click', function() {playRound(arrayElements[0])});
box_paper.addEventListener('click', function() {playRound(arrayElements[1])});
box_scissors.addEventListener('click', function() {playRound(arrayElements[2])});

close_btn.addEventListener('click', function() {
    popup.classList.remove('active');
})

function playRound(userChoice) {
    popup.classList.add('active');
}