'use strict';

let apiCallHelsinki = 'https://citynature.eu/api/wp/v2/places?cityid=5';
let apiCallTallinna = 'https://citynature.eu/api/wp/v2/places?cityid=5045';

let helsinginLuontoreitit;
let tallinnanLuontoreitit;

let kartta = L.map('mapid').setView([59.831694, 24.847083], 9);
let merkkiryhmä = L.featureGroup().addTo(kartta);
let kartanKlikkaus = L.popup();

let hakuNappi = document.getElementById('filter-button');
hakuNappi.addEventListener('click', suodataKaupungit);

let tallinnaValittu = document.getElementById('tallinna-nappi');
tallinnaValittu.addEventListener('click', piilotaValinta);

// Haetaaan Helsingin luontoreitit

fetch(apiCallHelsinki).then(function(vastaus) {
  return vastaus.json();
}).then(function(json) {
  tallennaHelsinkiJSON(json);
}).catch(function(error) {
  console.log(error);
});

function tallennaHelsinkiJSON(data) {
  helsinginLuontoreitit = data;
}

//Haetaan Tallinnan luontoreitit

fetch(apiCallTallinna).then(function(vastaus) {
  return vastaus.json();
}).then(function(json) {
  tallennaTallinnaJSON(json);
}).catch(function(error) {
  console.log(error);
});

function tallennaTallinnaJSON(data) {
  tallinnanLuontoreitit = data;
}

//Luodaan sivun karttanäkymä ja laitetaan käytäjän sijanti kartalle jos
// mahdollista

navigator.geolocation.getCurrentPosition(sijaintiSuccess, sijaintiFail);

function luoKartta() {
  L.tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
      {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoic2Ftc2FsaW4iLCJhIjoiY2p1emg1eXY4MHIyczN6bXhvbnVsMDMzMiJ9.0JS0bWSFshOVFsR7-_8ayg',
      }).addTo(kartta);
}

// Kun käyttäjä klikkaa kartaa, hän saa pienen ilmoituksen klikkaamastaan
// kohdasta

function onMapClick(e) {
  kartanKlikkaus.setLatLng(e.latlng).
      setContent('Klikkasit karttaa koordinaateista ' + e.latlng.toString()).
      openOn(kartta);
}

kartta.on('click', onMapClick);

// Jos käyttäjän sijainnin haku onnistuu

function sijaintiSuccess(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;

  luoKartta();

  //Custom-ikoni käytäjän sijainnille

  let customTalo = L.icon({
    iconUrl: 'images/talo-ikoni.png',

    iconSize: [30, 30], // size of the icon
    iconAnchor: [15, 5], // point of the icon which will correspond to
    // marker's location
    popupAnchor: [0, 0], // point from which the popup should open
    // relative to the iconAnchor
  });

  // Lisätään käyttäjän sijainti kartalle

  L.marker([latitude, longitude], {icon: customTalo}).
      addTo(kartta).
      bindPopup('<b>Olet täällä!</b><br>Sijaintisi kartalla.').
      openPopup();
}

// Jos sijainnin haku epäonnistuu

function sijaintiFail() {
  luoKartta();
  alert('Käyttäjän sijaintia ei voitu määrittää!');
}

/*
Määritellään minkä kaupungin luontoreiteistä käyttäjä haluaa tietoa
 */

function suodataKaupungit() {
  document.getElementById('map-filter-valinnat').style.display = 'none';
  hakuNappi.removeEventListener('click', suodataKaupungit);
  hakuNappi.addEventListener('click', uusiHaku);
  hakuNappi.innerText = 'Uusi haku';

  document.getElementById('luontoreitti-lista-helsinki').innerHTML = '';
  document.getElementById('luontoreitti-lista-tallinna').innerHTML = '';
  document.getElementById('loydetyt-luontoreitit').style.display = 'block';

  let helsinkiNappiValittu = document.getElementById('helsinki-nappi').checked;
  let tallinnaNappiValittu = document.getElementById('tallinna-nappi').checked;

  if ((helsinkiNappiValittu === true) && (tallinnaNappiValittu === true)) {

    tulostaHelsinginLuontoreitit();
    tulostaTallinnanLuontoreitit();

  } else if ((helsinkiNappiValittu === false) &&
      (tallinnaNappiValittu === false)) {
    document.getElementById('loydetyt-luontoreitit').style.display = 'none';
    alert('Et valinnut suodattimia!');
    uusiHaku();
  } else if ((helsinkiNappiValittu === true) &&
      (tallinnaNappiValittu === false)) {
    tulostaHelsinginLuontoreitit();
  } else if ((helsinkiNappiValittu === false) &&
      (tallinnaNappiValittu === true)) {
    tulostaTallinnanLuontoreitit();
  }
}

// Tulostetaan Helsingin kaupungin luontoreiteistä lista

function tulostaHelsinginLuontoreitit() {

  let otsikko = document.getElementById('luontoreitti-lista-helsinki');
  let li = document.createElement('li');
  li.id = 'Otsikko-Helsinki';
  li.style.fontWeight = 'bold';
  li.style.textDecoration = 'underline';
  let text = document.createTextNode('Helsinki');
  li.appendChild(text);
  otsikko.appendChild(li);

  for (let i = 0; i < helsinginLuontoreitit.length; i++) {
    let reitti = document.getElementById('luontoreitti-lista-helsinki');
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.href = '#esittely';
    li.id = 'Helsinki-' + i;
    let text = document.createTextNode(helsinginLuontoreitit[i].title);
    a.appendChild(text);
    li.appendChild(a);
    reitti.appendChild(li);

    li.addEventListener('click', function() {
      lisaaLuontoReittiHelsinki(i);
    });
  }
}

// Tulostetaan Tallinnan kaupungin luontoreiteistä lista

function tulostaTallinnanLuontoreitit() {

  let otsikko = document.getElementById('luontoreitti-lista-tallinna');
  let li = document.createElement('li');
  li.id = 'Otsikko-Tallinna';
  li.style.fontWeight = 'bold';
  li.style.textDecoration = 'underline';
  let text = document.createTextNode('Tallinna');
  li.appendChild(text);
  otsikko.appendChild(li);

  for (let i = 0; i < tallinnanLuontoreitit.length; i++) {
    let reitti = document.getElementById('luontoreitti-lista-tallinna');
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.href = '#esittely';
    li.id = 'Tallinna-' + i;
    let text = document.createTextNode(tallinnanLuontoreitit[i].title);
    a.appendChild(text);
    li.appendChild(a);
    reitti.appendChild(li);

    li.addEventListener('click', function() {
      lisaaLuontoReittiTallinna(i);
    });
  }
}

// Lisätään valittuu Helsingin luontoreitti kartalle

function lisaaLuontoReittiHelsinki(indeksi) {
  let piilotaMarkkeritValittu = document.getElementById(
      'piilota-nappi').checked;

  let vari = 0;
  merkkiryhmä.clearLayers();

  for (let i = 0; i <
  helsinginLuontoreitit[indeksi].routes.features.length; i++) {

    let reitti = helsinginLuontoreitit[indeksi].routes.features[i].geometry;
    let tyyli;

    switch (vari) {
      case 0:
        tyyli = {
          'color': '#ea3ae1',
          'weight': '2',
          'opacity': '1',
        };
        break;

      case 1:
        tyyli = {
          'color': '#5bef10',
          'weight': '2',
          'opacity': '1',
        };
        break;

      case 2:
        tyyli = {
          'color': '#fcfc4b',
          'weight': '2',
          'opacity': '1',
        };
        break;

      case 3:
        tyyli = {
          'color': '#2dfff1',
          'weight': '2',
          'opacity': '1',
        };
        break;

      default:
        tyyli = {
          'color': '#fff6f8',
          'weight': '2',
          'opacity': '1',
        };
        break;
    }

    vari++;

    L.geoJSON(reitti, {
      style: tyyli,
    }).addTo(merkkiryhmä);
  }

  if (piilotaMarkkeritValittu !== true) {

    for (let i = 0; i < helsinginLuontoreitit[indeksi].points.length; i++) {

      let lat = helsinginLuontoreitit[indeksi].points[i].locationPoint.lat;
      let lng = helsinginLuontoreitit[indeksi].points[i].locationPoint.lng;
      let info = helsinginLuontoreitit[indeksi].points[i].locationPoint.pointInfo;

      L.marker([lat, lng]).bindPopup(info).addTo(merkkiryhmä);
      merkkiryhmä.addTo(kartta);

    }
  }

  kartta.fitBounds(merkkiryhmä.getBounds());
}

// Lisätään valittuu Tallinnan luontoreitti kartalle

function lisaaLuontoReittiTallinna(indeksi) {

  merkkiryhmä.clearLayers();

  for (let i = 0; i < tallinnanLuontoreitit[indeksi].points.length; i++) {

    let lat = tallinnanLuontoreitit[indeksi].points[i].locationPoint.lat;
    let lng = tallinnanLuontoreitit[indeksi].points[i].locationPoint.lng;
    let info = tallinnanLuontoreitit[indeksi].points[i].locationPoint.pointInfo;

    L.marker([lat, lng]).bindPopup(info).addTo(merkkiryhmä);
    merkkiryhmä.addTo(kartta);
  }

  kartta.fitBounds(merkkiryhmä.getBounds());
}

function uusiHaku() {
  document.getElementById('map-filter-valinnat').style.display = 'block';
  hakuNappi.removeEventListener('click', uusiHaku);
  hakuNappi.addEventListener('click', suodataKaupungit);
  hakuNappi.innerText = 'Päivitä';

  merkkiryhmä.clearLayers();

  document.getElementById('loydetyt-luontoreitit').style.display = 'none';
  document.getElementById('luontoreitti-lista-helsinki').innerHTML = '';
  document.getElementById('luontoreitti-lista-tallinna').innerHTML = '';
}

function piilotaValinta() {
  if (tallinnaValittu.checked) {
    document.getElementById('piilota-markkerit').style.display = 'none';
  } else {
    document.getElementById('piilota-markkerit').style.display = 'block';
  }
}