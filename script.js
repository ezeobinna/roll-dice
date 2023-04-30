'use strict';


let currentScore1 = 0;
let currentScore2 = 0;
let scoreNumber1 = 0;
let scoreNumber2 = 0;
const current_score1 = document.querySelector('#current--0');
const current_score2 = document.querySelector('#current--1');
const dice = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const holdBtn = document.querySelector('.btn--hold');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');

const newGame = document.querySelector('.btn--new');

score1.textContent = 0;
score2.textContent = 0;
let playing = true;
dice.classList.add('hidden');




const playerinput1 = document.querySelector("#player1");
const playerinput2 = document.querySelector("#player2");
const startbtn = document.querySelector(".submit");
const name1 = document.querySelector("#name--0");
const name2 = document.querySelector("#name--1");
const gamepage = document.querySelector(".gamepage");
const homepage = document.querySelector(".homepage");

startbtn.addEventListener("click", function () {
    gamepage.classList.remove("hiddengamepage");
    homepage.classList.add("hiddengamepage");
    name1.textContent = playerinput1.value;
    name2.textContent = playerinput2.value;
});

const changelogo = function() {
    let dicelogo = document.querySelector(".rolldicelogo");
    let dicelogos = [
        "dice-1.png",
        "dice-2.png",
        "dice-3.png",
        "dice-4.png",
        "dice-5.png",
        "dice-6.png",
    ];

    const logo = dicelogos[Math.floor(Math.random() * dicelogos.length)];
    dicelogo.src = logo;

}
setInterval(changelogo, 500)

btnRoll.addEventListener('click', function() {
    if (playing) {
        let rollDice = Math.trunc(Math.random() * 6) + 1;
        dice.classList.remove('hidden');
        if (rollDice !== 1) {
        
            if (player0.classList.contains('player--active')){
                currentScore1 = currentScore1 + rollDice;
                current_score1.textContent = currentScore1;
                dice.src = `dice-${rollDice}.png`;

            } else {
                currentScore2 = currentScore2 + rollDice;
                current_score2.  textContent = currentScore2;
                dice.src = `dice-${rollDice}.png`;
            };
        
        } else {
            dice.src = 'dice-1.png';
            if (player0.classList.contains('player--active')) {
                player0.classList.remove('player--active');
                player1.classList.add('player--active');
                currentScore1 = 0;
                current_score1.textContent = currentScore1;
            } else {
                player1.classList.remove('player--active');
                player0.classList.add('player--active');
                currentScore2 = 0;
                current_score2.textContent = currentScore2;
            }
        }
    }
});

holdBtn.addEventListener('click', function() {

    if (playing) {
        if (player0.classList.contains('player--active')) {
            scoreNumber1 += currentScore1;
            score1.textContent = scoreNumber1;
            currentScore1 = 0;
            current_score1.textContent = currentScore1;
            if (scoreNumber1 >= 100) {
                playing = false;
                player0.classList.add('player--winner');
                player0.classList.remove('player--active');
                dice.classList.add('hidden');
            } else {
                player0.classList.remove('player--active');
                player1.classList.add('player--active');
            }
        } else {
            scoreNumber2 += currentScore2;
            score2.textContent = scoreNumber2;
            currentScore2 = 0;
            current_score2.textContent = currentScore2;
            if (scoreNumber2 >= 100) {
                playing = false;
                player1.classList.add('player--winner');
                player1.classList.remove('player--active');
                dice.classList.add('hidden');
            } else {
                player1.classList.remove('player--active');
                player0.classList.add('player--active');
            }
        }
    };
})

newGame.addEventListener('click', function(){
    dice.classList.add('hidden');
    playing = true;
    currentScore1 = 0;
    current_score1.textContent = currentScore1;
    currentScore2 = 0;
    current_score2.textContent = currentScore2;
    scoreNumber1 = 0;
    scoreNumber2 = 0;
    score1.textContent = scoreNumber1;
    score2.textContent = scoreNumber2;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
})



const guideButton = document.querySelector('.guidebutton');
const guide1 = document.querySelector('.guide1');
const close = document.querySelector('.fa-circle-xmark');

guideButton.addEventListener('click', function(){
    guide1.classList.remove('hiddenguide');
})
close.addEventListener('click', function() {
    guide1.classList.add('hiddenguide');
})
guide1.addEventListener('click', function() {
    guide1.classList.add('hiddenguide')
})


