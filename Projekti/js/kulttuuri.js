'use strict';


let coll = document.getElementsByClassName('avautuva');
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }

  });
}

let patka = document.getElementById('video-container');
let video1 = document.getElementById('video');
let linkki = document.getElementById('linkki');

document.getElementById('over18').addEventListener('click', muuta);
linkki.addEventListener('click', paussaa);

function muuta() {
  if (patka.style.display === 'none') {
    patka.style.display = 'block';
    play();
    document.getElementById('over18').innerText = 'Piilota video';
  } else {
    patka.style.display = 'none';
    paussaa();
    document.getElementById(
        'over18').innerText = 'Näytä Suomalaisuus on lahja -video';
  }
}

function paussaa() {
  video1.pause();
}

function play() {
  video1.play();
}

/*Tapahtumahaku*/
let nappi = document.getElementById('hakunappi');
/*nappi.addEventListener('click', hakufunktio);*/
const ul = document.querySelector('ul');
const h1 = document.createElement('h1');

function hakufunktio() {
  tyhjenna();
  let hakusana = document.getElementById('valinta').value;
  ul.appendChild(h1);
  h1.innerText = "Ladataan tuloksia...";
  /*let hakusana = sana.charAt(0).toUpperCase() + sana.slice(1).toLowerCase();*/
  console.log(hakusana);
  fetch(
      'https://cors-anywhere.herokuapp.com/http://open-api.myhelsinki.fi/v1/events/?tags_search=' +
      hakusana).
      then(function(vastaus) {
        return vastaus.json();
      }).
      then(function(json) {
        naytaPaikka(json);
      }).
      catch(function(error) {
        console.log(error);
      });
}

function naytaPaikka(paikat) {
  for (let i = 0; i < paikat.meta.count; i++) {
    const li = document.createElement('li');
    li.setAttribute('id', i);
    const h4 = document.createElement('h4');
    const im = document.createElement('img');
    const p = document.createElement('p');
    const h3 = document.createElement('h3');
    const add = document.createElement('address');
    const a = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(h4);
    li.appendChild(im);
    li.appendChild(p);
    li.appendChild(h3);
    li.appendChild(add);
    li.appendChild(a);
    console.log('kierros' + (i + 1));
    h1.innerText = "";

    /* NIMI */
    let nimi = paikat.data[i].name.fi;
    console.log(nimi);
    document.getElementById(i).getElementsByTagName('h4')[0].innerText = nimi;

    /* KUVA */
    if (paikat.data[i].description.images.length === 0) {
      var kuva = '';
    } else {
      var kuva = paikat.data[i].description.images[0].url;
    }
    document.getElementById(i).getElementsByTagName('img')[0].src = kuva;

    /* TEKSTI */

    if (paikat.data[i].description.intro === null) {
      if (paikat.data[i].description.body === null) {
        var lyhkuvaus = '';
      } else {
        var lyhkuvaus = paikat.data[i].description.body;
      }
    } else {
      var lyhkuvaus = paikat.data[i].description.intro;
    }
    document.getElementById(i).
        getElementsByTagName('p')[0].innerHTML = lyhkuvaus;
    console.log(lyhkuvaus);

    /* AJANKOHTA */
    if (paikat.data[i].event_dates.starting_day === null) {
      document.getElementsByTagName('h3')[i].innerText = '';
    } else {
      let aika = paikat.data[i].event_dates.starting_day;
      let paiva = new Date(aika);
      document.getElementsByTagName(
          'h3')[i].innerText = paiva.toLocaleDateString('fi-FI') + ' ' +
          paiva.toLocaleTimeString('fi-FI');
    }

    /* OSOITE */
    if (paikat.data[i].location.address.street_address === null ||
        paikat.data[i].location.address.locality === null) {
      var osoite = '';
    } else {
      var osoite = paikat.data[i].location.address.street_address + '\n' +
          paikat.data[i].location.address.locality;
    }
    console.log(osoite);
    document.getElementsByTagName('address')[i].innerText = osoite;

    /* LINKKI */
    if (paikat.data[i].info_url === null) {
      var link = '';
      document.getElementById(i).getElementsByTagName('a')[0].innerText = '';
    } else if (paikat.data[i].info_url.startsWith('www.')) {
      var link = 'https://' + paikat.data[i].info_url;
      document.getElementById(i).
          getElementsByTagName('a')[0].innerText = 'Linkki';
    } else {
      var link = paikat.data[i].info_url;
      document.getElementById(i).
          getElementsByTagName('a')[0].innerText = 'Linkki';
    }
    console.log(link);
    document.getElementById(i).getElementsByTagName('a')[0].href = link;
    document.getElementById(i).getElementsByTagName('a')[0].target = '_blank';
  }
}

function tyhjenna() {
  let lista = document.getElementById('lista');
  while (lista.hasChildNodes()) {
    lista.removeChild(lista.firstChild);
  }
}