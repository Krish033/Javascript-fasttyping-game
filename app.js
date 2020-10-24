// select DOM 
const randomText = document.getElementById('randomText');
const gameInput = document.getElementById('gameInput');

// Array with random words
const gameArray = ['Hormonie', 'Document', 'Destruction', 'Machine', 'Hellicopter', 'Adopted', 'Technical', 'Montserrat',
  'RunAway', 'Elements', 'Developer', 'Javascript', 'construction', 'Weather', 'Insane', 'Walkingdead',
  'Furious', 'Operation', 'Django', 'Bethany'];

// select DOM
const scoreOutput = document.getElementById('score');
const timeLeft = document.getElementById('timeLeft');
const gameOutput = document.getElementById('game');


// variables
let time = 5;
let score = 0;
let isPlaying;

// EVENTS 

window.addEventListener('load', constructor);
gameInput.addEventListener('input', getInputText);


// Functions 

function constructor() {

  // update words
  getWords(gameArray);

  // check time 
  setInterval(getCurrentTime, 1000);

  // game finish
  setInterval(setGameStatus, 50);

}



// CHAGIND TEXT ON START
function getWords(array) {

  // generate a word
  var newArr = Math.floor(Math.random() * array.length);

  // changing Text
  randomText.innerText = array[newArr];
}


// GETTING INPUT TEXT
function getInputText() {
  // if playibg
  if (matchMaking()) {
    
    // playing 
    isPlaying = true;
    
    // it will be a second to load the new text
    time = 6;
    
    // generate new word
    getWords(gameArray);

    // incermenting score
    score++;
    
    // clearing input value
    gameInput.value = '';
}

  // Adding score to html
  scoreOutput.innerHTML = score;
}


// check if the player is playing
function matchMaking() {

  // check for match
  if (gameInput.value === randomText.innerText) {
    
    // if answer is correct
    gameOutput.innerText = 'Correct';
    return true;
    

  } else {
    
    // if wrong
    gameOutput.innerText = '';
    return false;
  }
}

// CURRENT TIMER
function getCurrentTime() {

  // checking the game time if not end
  if (time > 0) {
    
    // if true reduce time
    time--;
    
  } 
  
  if (time === 0) {
    
    // if time is 0 
    isPlaying = false;
    
    // clearing scores
    score = -1;
  }
  timeLeft.innerHTML = "0" + time;
}

// set game status
function setGameStatus() {

  // if player is not playing
  if (!isPlaying && time === 0) {
    gameOutput.innerText = 'Game Over';
  }
  
  // the game only starts when player enters the text
  if (score === -1) {
    
    // updating scores
    scoreOutput.innerText = 0;
  }
}