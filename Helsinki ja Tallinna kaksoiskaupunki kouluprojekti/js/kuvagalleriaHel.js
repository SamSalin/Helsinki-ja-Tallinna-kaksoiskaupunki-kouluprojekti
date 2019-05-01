'use strict';

let url;
let sivu = 1;
let annetutTagit = [];
let tarvittavatKuvat = 0;
let edellisetSivut = [];

let korkeinSivuNumero = 1;

let i = 0;

let edellinenSivuButton = document.getElementById('edellinen-sivu');
let seuraavaSivuButton = document.getElementById('seuraava-sivu');
let tagiButton = document.getElementById('tagId');

edellinenSivuButton.disabled = true;
edellinenSivuButton.addEventListener('click', edellinenSivu);
seuraavaSivuButton.addEventListener('click', seuraavaSivu);
tagiButton.addEventListener('click', tagiAnnettu);

haeJSON();

function haeJSON() {

  let yhdistettyTagi = annetutTagit.join();

  url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=648819e8a1b8d9bf86ef0f3a005a4007&tags=helsinki,' +
      yhdistettyTagi +
      '&tag_mode=all&safe_search=1&sort=interestingness-desc&page='
      + sivu +
      '&extras=original_format,o_dims&content_type=1&media=photos&format=json&nojsoncallback=1';

  fetch(url).then(function(vastaus) {
    return vastaus.json();
  }).then(function(json) {
    tallennaArrayKuvat(json);
  }).catch(function(error) {
    console.log(error);
  });

}

function tallennaArrayKuvat(kuvat) {
  paivitaKuvat(kuvat);
}

function paivitaKuvat(kuvat) {

  console.log(kuvat.photos.photo);
  if (kuvat.photos.photo.length === 0) {
    document.getElementById('sisalto').style.display = 'none';
    document.getElementById('virheilmoitus').style.display = 'block';
    document.getElementById('virheilmoitus').innerHTML =
        '<h2>Hups! Näyttää siltä, että sisältöä ei löytynyt. Parhaiden' +
        ' tulosten varmistamiseksi kokeile tagien vähentämistä tai niiden' +
        ' rajausta!</h2>';
  } else {
    i = 0;
    tarvittavatKuvat = 0;

    while (tarvittavatKuvat < 20) {

      let secret = kuvat.photos.photo[i].secret;
      let originalsecret = kuvat.photos.photo[i].originalsecret;
      let originalformat = kuvat.photos.photo[i].originalformat;
      let farm = kuvat.photos.photo[i].farm;
      let serverid = kuvat.photos.photo[i].server;
      let id = kuvat.photos.photo[i].id;
      let title = kuvat.photos.photo[i].title;

      if (originalformat !== undefined) {

        let isoKuva = 'https://farm' + farm + '.staticflickr.com/' + serverid +
            '/' + id + '_' + originalsecret + '_o.' + originalformat;

        let pikkuKuva = 'https://farm' + farm + '.staticflickr.com/' +
            serverid +
            '/' + id + '_' + secret + '.jpg';

        let ul = document.getElementById('kuva-lista');

        ul.innerHTML += '<li id="Sivu-' + sivu + '-' + i + '"><a' +
            ' href="' + isoKuva +
            '" data-lightbox="Galleriakuva" data-title="' + title +
            '"><img src="' + pikkuKuva + '" alt="Flickr-kuva"></a></li>';

        tarvittavatKuvat++;
      }
      if (i === (kuvat.photos.photo.length - 1)) {
        if (i !== 99) {
          seuraavaSivuButton.disabled = true;
          break;
        } else {
          i = 0;
          haeJSON();
        }
      } else {
        i++;
      }
    }
  }
}

function seuraavaSivu() {
  sivu++;

  edellinenSivuButton.disabled = false;

  if (sivu > korkeinSivuNumero) {
    korkeinSivuNumero = sivu;
    alert('Korkein sivu!');
    edellisetSivut.push(document.getElementById('kuva-lista').innerHTML);
    document.getElementById('kuva-lista').innerHTML = '';
    document.getElementById('helsinki-kuvina').
        scrollIntoView({behavior: 'smooth', block: 'center'});
    haeJSON();
  } else {
    document.getElementById('kuva-lista').innerHTML = edellisetSivut[sivu - 1];
    document.getElementById('helsinki-kuvina').
        scrollIntoView({behavior: 'smooth', block: 'center'});
  }
}

function edellinenSivu() {
  if (sivu === korkeinSivuNumero) {
    alert('Tallennettu!');
    edellisetSivut.push(document.getElementById('kuva-lista').innerHTML);
  }
  sivu--;

  if (sivu === 1) {
    edellinenSivuButton.disabled = true;
  }

  document.getElementById('helsinki-kuvina').
      scrollIntoView({behavior: 'smooth', block: 'center'});
  seuraavaSivuButton.enabled = true;
  document.getElementById('kuva-lista').innerHTML = edellisetSivut[sivu - 1];
}

function tagiAnnettu() {
  let annettuTagi = document.getElementById('textAreaId').value;
  annettuTagi = annettuTagi.replace(/\s/g, '').trim().toLowerCase();

  annetutTagit.push(annettuTagi);

  let ul = document.getElementById('tagi-lista');
  let li = document.createElement('li');
  let p = document.createElement('p');
  let pText = document.createTextNode(annettuTagi);

  let button = document.createElement('button');
  let buttonText = document.createTextNode('Poista');
  button.class = 'delete-button';

  p.appendChild(pText);
  li.appendChild(p);
  button.appendChild(buttonText);
  li.appendChild(button);
  ul.appendChild(li);
  li.addEventListener('click', function() {
    poistaTagi(annetutTagit.length - 1);
  });

  document.getElementById('textAreaId').value = '';
  alert('Tagi lisätty!');

  document.getElementById('kuva-lista').innerHTML = '';
  document.getElementById('sisalto').style.display = 'block';
  document.getElementById('virheilmoitus').style.display = 'none';

  haeJSON();

}

function poistaTagi(indeksi) {
  console.log(indeksi);
  let uusiArray = [];
  uusiArray.push('helsinki');
  console.log(annetutTagit);

  for (let i = 1; i < annetutTagit.length; i++) {
    if (indeksi !== i) {
      uusiArray.push(annetutTagit[i]);
    } else {
      console.log(document.getElementsByTagName('li')[i]);
    }
  }

  annetutTagit = uusiArray;
  console.log(uusiArray);

}