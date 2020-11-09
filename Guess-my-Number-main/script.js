'use strict';

// Define UI VARS
let number = Math.trunc(Math.random() * 20 ) + 1; 
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
let score = 20; 
let highScore = 0;

// Load all event listeners
loadEventListeners();

// Load all event functions
function loadEventListeners() {
  // Check! Button
  checkButton.addEventListener('click', checkBtn);
  // Again button 
  againButton.addEventListener('click', againBtn);
  //Score Tracker

}

// grabs class = message 
const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
}
// grabs the body and changes the background color. 
const bgColor = (color) => {
  document.body.style.background = color; 
}
// Fn grabs class score from index.html 
const UIscore = (scoreNum) => {
  document.querySelector('.score').textContent = scoreNum;
}

// check button 
function checkBtn(e) {
  const guessInput = Number(document.querySelector('.guess').value);
   // if input has no value 
  if(!guessInput) {
    bgColor ("brown");
    displayMessage("Add a number!");  
     // input number matches the correct value
  } else if (guessInput === number) {
    bgColor("green");
    displayMessage("Congrats!"); 
    document.querySelector('.number').textContent = number;
    score++;
    UIscore(score);
    // checks for highscore
    if(score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // input number needs to be higher
  } else if (guessInput !== number) {
   bgColor(guessInput > number ? "blue" : "red");
   displayMessage( guessInput > number ? "Lower!" : "Higher"); 
   score--;
   UIscore(score);
  } 
}

// again button restarts the game. 
function againBtn() {

 document.querySelector('.guess').value = '';
 
 number = Math.trunc(Math.random() * 20 ) + 1; 

 score = 20; 

 displayMessage("Start guessing...");

 UIscore(score); 

 bgColor("#222");

 document.querySelector('.number').textContent = "?";
}




