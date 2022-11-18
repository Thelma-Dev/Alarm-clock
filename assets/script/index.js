'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}


function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const btn = select('.set');
const output = select('.output p');
const inputField = select('#input');
const timeRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

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
    }
}

onEvent('click', btn, function() {
    validateInput();
});


// Selections
const time = select('.time');
const date = new Date();

const displayTime = setInterval(() => {
  const second = date.getSeconds().toString().padStart(2, '0');;
  const minute = date.getMinutes().toString().padStart(2, '0');;
  const hour = date.getHours().toString().padStart(2, '0');;

  time.innerHTML = `${hour} : ${minute} : ${second}`;

}, 1000);



