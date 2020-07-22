const msgEl = document.getElementById('msg');

const randomNum = getRundomNumber();

let count = 0;

console.log('Number:', getRundomNumber());

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition;

// Start recogniitoin and game
recognition.start();

//capture user speak
function onSpeak(e) {
    const msg = e.results[0][0].transcript;
    console.log(msg);
    
    writeMessage(msg);
    checkNumber(msg);
}

//Write what user speaks 
function writeMessage(msg) {
    msgEl.innerHTML = `
        <div>You said:</div>
            <span class="box">${msg}</span>
    `
}

//Check msg against number
function checkNumber(msg) {
    const num = +msg
    count++;
    // Check if valid number
    if(Number.isNaN(num)) {
        msgEl.innerHTML += '<div>That is not a valid Number</div>';
        return;
    }
    
    //Check in range
    if(num > 100 || num < 1) {
        msgEl.innerHTML += '<div>Number must be between 1 and 100</div>'
        return
    }
    
    //Check number
    if(num === randomNum) {
        document.body.innerHTML = `
            <h2>Congrats! You have guessed the number! <br><br>
            It was ${num}</h2>
            <p>You tried ${count} times</p>
            <button class="play-again" id="play-again">Play again</button>
        `
    } else if(num > randomNum) {
        msgEl.innerHTML += '<div>GO LOWER</div>'
    } else {
        msgEl.innerHTML += '<div>GO HIGHER</div>'
    }
}

// generate random number
function getRundomNumber() {
    return Math.floor(Math.random()* 100) + 1;
}

// Speak result
recognition.addEventListener('result', onSpeak);


// End SR service
recognition.addEventListener('end', () => recognition.start())

document.body.addEventListener('click', (e) => {
    if(e.target.id === "play-again") {
        window.location.reload();
    }
})
