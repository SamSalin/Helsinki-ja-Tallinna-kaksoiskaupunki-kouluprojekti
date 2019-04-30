'use strict';

setInterval(lock, 1000);

let helsinkiVaakunaImg = document.getElementById('helsinki-vaakuna');
let tallinnaVaakunaImg = document.getElementById('tallinna-vaakuna');

helsinkiVaakunaImg.addEventListener('mouseenter', glowHelsinkiEnter);
tallinnaVaakunaImg.addEventListener('mouseenter', glowTallinnaEnter);

function glowHelsinkiEnter() {
  helsinkiVaakunaImg.src = 'images/vaakunat/helsinki_vaakuna-glow.png';
  helsinkiVaakunaImg.removeEventListener('mouseenter', glowHelsinkiEnter);
  helsinkiVaakunaImg.addEventListener('mouseleave', glowHelsinkiExit);
}

function glowTallinnaEnter() {
  tallinnaVaakunaImg.src = 'images/vaakunat/tallinna_vaakuna-glow.png';
  tallinnaVaakunaImg.removeEventListener('mouseenter', glowTallinnaEnter);
  tallinnaVaakunaImg.addEventListener('mouseleave', glowTallinnaExit);
}

function glowHelsinkiExit() {
  helsinkiVaakunaImg.src = 'images/vaakunat/helsinki_vaakuna.png';
  helsinkiVaakunaImg.removeEventListener('mouseleave', glowHelsinkiExit);
  helsinkiVaakunaImg.addEventListener('mouseenter', glowHelsinkiEnter);
}

function glowTallinnaExit() {
  tallinnaVaakunaImg.src = 'images/vaakunat/tallinna_vaakuna.png';
  tallinnaVaakunaImg.removeEventListener('mouseleave', glowTallinnaExit);
  tallinnaVaakunaImg.addEventListener('mouseenter', glowTallinnaEnter);
}

function lock() {
  window.scroll(0, 150);
}


