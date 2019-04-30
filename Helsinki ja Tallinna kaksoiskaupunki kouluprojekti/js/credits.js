'use strict';

let samuliKuva = document.getElementById('samuli-kuva');
let emilKuva =  document.getElementById('emil-kuva');
let kimmoKuva = document.getElementById('kimmo-kuva');

let samuliAudio = new Audio();
let samuliFirst = 0;
let emilFirst = 0;
let kimmoFirst = 0;

samuliKuva.addEventListener('click', function(){
  spin('samuli');});
emilKuva.addEventListener('click', function(){
  spin('emil');});
kimmoKuva.addEventListener('click', function(){
  spin('kimmo');});

samuliKuva.style.WebkitTransition = "all 2s";
samuliKuva.style.transition = "all 2s";

emilKuva.style.WebkitTransition = "all 2s";
emilKuva.style.transition = "all 2s";

kimmoKuva.style.WebkitTransition = "all 2s";
kimmoKuva.style.transition = "all 2s";




function rotateSamuli() {
  samuliKuva.style.transform = "rotate(380deg)";
  setTimeout(rotateSamuliBack, 2000);
}

function rotateSamuliBack() {
  samuliKuva.style.transform = "rotate(340deg)";
  setTimeout(rotateSamuli, 2000);
}

function rotateEmil() {
  emilKuva.style.transform = "rotate(380deg)";
  setTimeout(rotateEmilBack, 2000);
}

function rotateEmilBack() {
  emilKuva.style.transform = "rotate(340deg)";
  setTimeout(rotateEmil, 2000);
}

function rotateKimmo() {
  kimmoKuva.style.transform = "rotate(380deg)";
  setTimeout(rotateKimmoBack, 2000);
}

function rotateKimmoBack() {
  kimmoKuva.style.transform = "rotate(340deg)";
  setTimeout(rotateKimmo, 2000);
}

function spin(henkilo) {


  switch (henkilo) {
    case 'samuli':

      samuliFirst++;
      console.log(samuliFirst);
      samuliAudio.src = 'media/audio/samuli-audio.mp3';
      samuliAudio.play();
      if(samuliFirst === 1) {
        samuliKuva.style.transform = "rotate(360deg)";
        setTimeout(rotateSamuli, 3000);
      }
      break;

    case 'emil':

      emilFirst++;
      if(emilFirst === 1) {
        emilKuva.style.transform = "rotate(360deg)";
        setTimeout(rotateEmil, 3000);
      }
      break;

    case 'kimmo':

      kimmoFirst++;
      if(kimmoFirst === 1) {
        kimmoKuva.style.transform = "rotate(360deg)";
        setTimeout(rotateKimmo, 3000);
      }
      break;
  }
}