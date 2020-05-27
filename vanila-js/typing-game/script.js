const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game');
const settingBtn = document.getElementById('setting');
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

addWordToDom()

//Event listeners
text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if(insertedText === randomWord) {      
        e.target.value = "";
        addWordToDom();
        updateScore();
    }
})
