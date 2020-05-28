const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingBtn = document.getElementById('setting-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

//  List of words for game 
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
  ];

//   Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

//set difficulty to value in ls or medium
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// Set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// Focus on text on start
text.focus();

//Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
    return words[Math.floor(Math.random() * (words.length))]
}

// Add word to DOM
function addWordToDom() {
    randomWord = getRandomWord()
    if(randomWord.length > 0) {
        word.innerText = randomWord;
    }
}

//Update score
function updateScore() {
    score++;
    scoreEl.innerText = score;
}

//Update time
function updateTime() {
    time--;
    timeEl.innerHTML = time +'s';

    if(time === 0) {
        clearInterval(timeInterval);
        //End game
        gameOver();
    }
}

// Game over, show end screen
function gameOver() {
    endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Reload</button>
    `;

    endgameEl.style.display ='flex';
}

addWordToDom()

//Event listeners

// Typing
text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if(insertedText === randomWord) {      
        e.target.value = "";
        addWordToDom();
        updateScore();

        if(difficulty === 'hard') {
            time += 2;
        }else if(difficulty === 'medium') {
            time += 3;
        }else {
            time += 5;
        }


        updateTime();
    }
})

// settings btn click
settingBtn.addEventListener('click', () => {
    settings.classList.toggle('hide');
})

settingsForm.addEventListener('change',e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
    
});
