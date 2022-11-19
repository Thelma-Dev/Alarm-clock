'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}


// Selections
const btn = select('.set');
const output = select('.output p');
const timeRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
const bell = select('.fa-solid');
const form = select('form');


// Function to validate input
function isValid(input) {
    if (Number.isInteger(input)) {
        return true;
    }

    return false;
}

function validateInput() {

    let time = select('.input').value.trim();
    let valid = true;

    if (time.length === 0) {
        output.innerText = 'choose a time';
        valid = false;
    } else if (!timeRegex.test(time)) {
        output.innerText = 'Invalid time';
        valid = false;
    } else {
        output.innerText = time;
        bell.style.display = 'block';
    }
}

// To display current time
const time = select('.time');

function displayTime() {
    const date = new Date();

    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();

    const hours = hour.toString().padStart(2, '0');
    const minutes = minute.toString().padStart(2, '0');
    const seconds = second.toString().padStart(2, '0');

    const clockTime = `${hours}: ${minutes}: ${seconds}`;
    time.innerHTML = clockTime;
   
    let setTime = select('.input').value.trim();
    if(setTime === `${hours}:${minutes}`) {
        alarmTone.play();
        audioStop();
        time.style.color = '#b41a15'
    } 
} 
setInterval(displayTime, 1000);


// To get set time to display in output
const submit = (event) => {
    event.preventDefault();
}
onEvent("submit", document.forms[0], submit);


// Set Alarm
const alarmTone = new Audio('./assets/audio/alarm-sound.wav');
alarmTone.type = 'audio/wav';


function audioStop(){
    alarmTone.muted = false;        
    setTimeout(() => {
        alarmTone.pause();
    }, 2000);
}
 
onEvent('click', btn, function() {
    validateInput();
});

window.addEventListener('load', () => {
    form.reset();
});