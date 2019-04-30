var slider = document.getElementById('history-slider');
var output = document.getElementById('slider-year');
var hel = document.getElementById('helsinki-slider-text');
var img = document.getElementById('hist-img');

let vuosi1 = 'Perustusvuosi';
let vuosi2 = '1700';
let vuosi3 = '1800';
let vuosi4 = '1900';
let vuosi5 = '2000';

output.innerHTML = vuosi1;

slider.oninput = function() {
  output.innerHTML = slider.value;

  if (slider.value == 1) {
    output.innerHTML = vuosi1;
    hel.innerHTML = ht1;
    img.src = 'images/helHist/HelHist2-edited.jpg';
  }
  if (slider.value == 2) {
    output.innerHTML = vuosi2;
    hel.innerHTML = ht2;
    img.src = 'images/helHist/HelHist1-edited.jpg';
  }
  if (slider.value == 3) {
    output.innerHTML = vuosi3;
    hel.innerHTML = ht3;
    img.src = 'images/helHist/HelHist3-edited.jpg';
  }
  if (slider.value == 4) {
    output.innerHTML = vuosi4;
    hel.innerHTML = ht4;
    img.src = 'images/helHist/HelHist5-edited.jpg';
  }
  if (slider.value == 5) {
    output.innerHTML = vuosi5;
    hel.innerHTML = ht5;
    img.src = 'images/helHist/HelHist4-edited.jpg';
  }
};

let ht1 = 'Helsinki perustettiin Tallinnan kilpailijaksi Vantaanjoen suulle vuonna 1550 ja siirrettiin nykyiselle paikalleen vuonna 1640. Helsingistä tuli Suomen suuriruhtinaskunnan pääkaupunki vuonna 1812 ja Suomen pääkaupunki maan itsenäistyessä vuonna 1917.';
let ht2 = 'Helsinki oli pitkään lähinnä vain pienikokoinen Uudenmaan ja Hämeen läänin maaherran hallintokaupunki, mutta sen merkitys alkoi kasvaa, kun kaupungin edustalle ryhdyttiin vuonna 1748 rakentamaan Suomenlinnan linnoitusta. Linnoitustyöt toivat lisää asukkaita ja varuskunta vilkastutti kaupungin seuraelämää, kaupankäyntiä ja laivaliikennettä. Helsingin väkiluku oli 1800-luvun alussa kohonnut neljään tuhanteen asukkaaseen.';
let ht3 = 'Suomen sodan aikana 1808 venäläiset valtasivat Helsingin, ja samana vuonna suuri tulipalo hävitti kaupunkia. Helsingistä tuli Suomen suuriruhtinaskunnan pääkaupunki vuonna 1812. Turun palon jälkeen vuonna 1827 myös yliopisto siirrettiin Helsinkiin. Helsingistä kehkeytyi hallinto-, yliopisto- ja varuskuntakaupunki, ja se kasvoi maan todelliseksi teollisuuskeskukseksi. Vuonna 1840 kaupungin väkiluku oli noussut noin 20 000:een asukkaaseen.';
let ht4 = 'Helsingistä tuli itsenäisen Suomen pääkaupunki joulukuussa 1917. Suomen sisällissota puhkesi tammikuussa 1918. Toisen maailmansodan aikana Helsinki joutui useaan Neuvostoliiton suurpommitukseen, mutta selvisi tehokkaan ilmapuolustuksen ansiosta suhteellisen pienin vaurioin. Esimerkiksi Helsingin suurpommitukset helmikuussa 1944 torjuttiin melko pienin tappioin. Vuonna 1952 pidettiin Helsingin olympialaiset ja vuonna 1975 Euroopan turvallisuus- ja yhteistyökonferenssin (ETYK) huippukokous. Vuonna 1982 avattiin Helsingin metro. Vuonna 2000 Helsinki oli yksi Euroopan kulttuuripääkaupungeista.';
let ht5 = 'Helsinki (ruots. Helsingfors) on Suomen pääkaupunki ja Uudenmaan maakuntakeskus. Se sijaitsee Suomenlahden pohjoisrannalla Uudenmaan maakunnan keskiosassa. Helsingin naapurikunnat ovat lännessä Espoo, pohjoisessa Vantaa ja idässä Sipoo. Kaupungissa on 650 033 asukasta. Helsingin keskustaajama ulottuu usean naapurikunnan alueelle, kuten Espooseen ja Vantaalle. Laajemmalla Helsingin seudun metropolialueella on 1 572 928 asukasta.';
hel.innerHTML = ht1;