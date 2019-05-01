'use strict';

let coll = document.getElementsByClassName("avautuva");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

  });
}


let patka = document.getElementById('video-container');
let video1 = document.getElementById('video');

document.getElementById('over18').addEventListener('click', muuta);

function muuta() {
  if (patka.style.display === 'none') {
    patka.style.display = 'block';
    play();
    document.getElementById('over18').innerText = 'Piilota video';
  } else {
    patka.style.display = "none";
    paussaa();
    document.getElementById('over18').innerText = 'Näytä video';
  }
}

function paussaa() {
  video1.pause();
}
function play() {
  video1.play();

}