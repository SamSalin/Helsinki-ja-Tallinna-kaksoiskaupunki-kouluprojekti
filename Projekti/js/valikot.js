'use strict';

let helsinkiLogoImg = document.getElementById('logo1');
let tallinnaLogoImg = document.getElementById('logo2');

helsinkiLogoImg.addEventListener('mouseenter', shadowHelsinkiEnter);
tallinnaLogoImg.addEventListener('mouseenter', shadowTallinnaEnter);

function shadowHelsinkiEnter() {
  helsinkiLogoImg.src = 'images/logot/helsinki_logo-shadow.png';
  helsinkiLogoImg.removeEventListener('mouseenter', shadowHelsinkiEnter);
  helsinkiLogoImg.addEventListener('mouseleave', shadowHelsinkiExit);
}

function shadowTallinnaEnter() {
  tallinnaLogoImg.src = 'images/logot/tallinn_logo-shadow.png';
  tallinnaLogoImg.removeEventListener('mouseenter', shadowTallinnaEnter);
  tallinnaLogoImg.addEventListener('mouseleave', shadowTallinnaExit);
}

function shadowHelsinkiExit() {
  helsinkiLogoImg.src = 'images/logot/helsinki_logo.png';
  helsinkiLogoImg.removeEventListener('mouseleave', shadowHelsinkiExit);
  helsinkiLogoImg.addEventListener('mouseenter', shadowHelsinkiEnter);
}

function shadowTallinnaExit() {
  tallinnaLogoImg.src = 'images/logot/tallinn_logo.png';
  tallinnaLogoImg.removeEventListener('mouseleave', shadowTallinnaExit);
  tallinnaLogoImg.addEventListener('mouseenter', shadowTallinnaEnter);
}


