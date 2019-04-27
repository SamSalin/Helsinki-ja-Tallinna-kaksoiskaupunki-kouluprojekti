'use strict';

let apiCallHelsinki = 'https://citynature.eu/api/wp/v2/places?cityid=5';
let apiCallTallinna = 'https://citynature.eu/api/wp/v2/places?cityid=5045';

let helsinginLuontoreitit;
let tallinnanLuontoreitit;

let kartta = L.map('mapid').setView([59.831694, 24.847083], 9);

// Haetaaan Helsingin luontoreitit

fetch(apiCallHelsinki).then(function(vastaus) {
  return vastaus.json();
}).then(function(myJsonHelsinki) {
  helsinginLuontoreitit = (JSON.stringify(myJsonHelsinki));
  //console.log(helsinginLuontoreitit);
}).catch(function(errorHelsinki) {
  console.log(errorHelsinki);
});

//Haetaan Tallinnan luontoreitit

fetch(apiCallTallinna).then(function(vastaus) {
  return vastaus.json();
}).then(function(myJsonTallinna) {
  tallinnanLuontoreitit = (JSON.stringify(myJsonTallinna));
  //console.log(tallinnanLuontoreitit);
}).catch(function(errorTallinna) {
  console.log(errorTallinna);
});

//Luodaan sivun karttanäkymä ja laitetaan käytäjän sijanti kartalle jos
// mahdollista

navigator.geolocation.getCurrentPosition(sijaintiSuccess, sijaintiFail)

function listaaLuontoreitit() {
  if (helsinginLuontoreitit.length === 0 || tallinnanLuontoreitit.length ===
      0) {
    alert('Luontoreittien haussa tapahtui virhe!');
  } else {
    console.log('Hello world!');
  }
}

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

function sijaintiSuccess(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;

  luoKartta();

  // Lisätään käyttäjän sijainti kartalle

  L.marker([latitude, longitude]).addTo(kartta).bindPopup("<b>Olet täällä!</b><br>Sijaintisi kartalla.").openPopup();
}

function sijaintiFail() {
  luoKartta();
  alert('Käyttäjän sijaintia ei voitu määrittää!');
}