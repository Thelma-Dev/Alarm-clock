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


// Selections

const time = select('.time');
const date = new Date();

const day = 1000 * 60 * 60 * 24;

const displayTime = setInterval(() => {
  const second = date.getSeconds().toString().padStart(2, '0');;
  const minute = date.getMinutes().toString().padStart(2, '0');;
  const hour = date.getHours().toString().padStart(2, '0');;

  time.innerHTML = `${hour} : ${minute} : ${second}`;

}, 1000);