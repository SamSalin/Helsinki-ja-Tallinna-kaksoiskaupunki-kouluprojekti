'use strict';

function nollanlisays(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function kello() {
  let clock = document.getElementById('kello');
  let d = new Date();
  let hours = nollanlisays(d.getHours());
  let minutes = nollanlisays(d.getMinutes());
  clock.innerHTML = hours + ":" + minutes;
}

const ticking = setInterval(kello, 500);