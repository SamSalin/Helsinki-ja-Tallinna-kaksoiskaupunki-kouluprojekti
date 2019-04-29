var slider = document.getElementById("history-slider");
var output = document.getElementById("slider-year");
var tal = document.getElementById("tallinn-slider-text");
var img = document.getElementById('hist-img');

let vuosi1 = "Perustusvuosi";
let vuosi2 = "1700";
let vuosi3 = "1800";
let vuosi4 = "1900";
let vuosi5 = "2000";

output.innerHTML = vuosi1;

slider.oninput = function() {
  output.innerHTML = slider.value;

  if (slider.value == 1) {
    output.innerHTML = vuosi1;
    tal.innerHTML = tt1;
    img.src = 'images/talHist/talHistImg2.jpg';
  }
  if (slider.value == 2) {
    output.innerHTML = vuosi2;
    tal.innerHTML = tt2;
    img.src = 'images/talHist/talHistImg1.jpg';
  }
  if (slider.value == 3) {
    output.innerHTML = vuosi3;
    tal.innerHTML = tt3;
    img.src = 'images/talHist/talHistImg3.jpg';
  }
  if (slider.value == 4) {
    output.innerHTML = vuosi4;
    tal.innerHTML = tt4;
    img.src = 'images/talHist/talHistImg4.jpg';
  }
  if (slider.value == 5) {
    output.innerHTML = vuosi5;
    tal.innerHTML = tt5;
    img.src = 'images/talHist/talHistImg5.jpg';
  }
};

let tt1 = "Tallinna perustettiin ennen vuotta 1154. Kaupunki on syntynyt keskeisen Itämeren reitin varrelle. Kaupungin edustalla Naissaaren ja Porkkalan välissä on ainoa paikka jossa Suomenlahti on mahdollista ylittää niin että maata on koko matkan ajan näkyvissä. Reitti Tanskasta Tallinnaan on kuvattu 1200-luvulta säilyneessä tanskalaisessa itineraariossa. Toompeanmäellä on alun perin ollut virolaisten linnake, jolla ei kuitenkaan todennäköisesti ollut pysyvää asutusta tai varuskuntaa.Toompeanmäen pakolinnan lisäksi alueella on mahdollisesti sijainnut satamapaikka, joka oli mahdollisesti Rävälän ja Harjumaan ylimystön valvoma.";
let tt2 = "Tallinna siirtyi vuonna 1561 Ruotsille ja edelleen Venäjän keisarikunnalle 1721. Tallinna oli Venäjän vallan aikana Viron kuvernementin keskus, ja kuten muukin Viro, säilytti saksalaisen hallinnon ja instituutiot Venäjän vallan loppupuolelle asti.";
let tt3 = "1800-luvulla Tallinan asukasluku nousi 64 572 asukkaaseen vuoteen 1897 mennessä. Tallinna ja Viro olivat silti Venäjän vallan alla. Viro itsenäistyisi vasta myöhemmin 1900-luvun alussa.";
let tt4 = "Vuonna 1918 Viro julistautui itsenäiseksi saksalaisten hyökättyä Latviasta Viron kautta kohti Pietaria Brest-Litovskin rauhanneuvotteluiden juututtua Neuvosto-Venäjän passiiviseen vastarintaan. Toisessa maailmansodassa Viro oli vaihtelevasti osa Neuvostoliittoa ja Natsi-Saksaa. Sodan loputtua Viro oli osa Neuvostoliittoa. Vuonna 1989 Tallinnassa oli jo runsaat 482 000 asukasta, mutta Viron uudelleenitsenäistymisen jälkeen runsaasti venäläisasukkaita on lähtenyt kaupungista. Tallinnasta tuli jälleen itsenäisen Viron pääkaupunki vuonna 1991, Neuvostoliiton hajoamisen myötä.";
let tt5 = "Tallinna (vir. Tallinn [ˈtɑlʲˑinˑ], venäjäksi Таллин, aikaisemmin saks. Reval eli suom. Rääveli, vanhassa suomessa joskus Kesoniemi tai Kesoi) on Viron pääkaupunki ja maan pääasiallinen portti merelle. Kaupungin väkiluku on 440 112 (18.2.2016) ja se on Viron suurin asutuskeskus. Vuoden 2011 väestönlaskennan mukaan kaupungin asukkaista oli virolaisia 52,5 prosenttia, venäläisiä 38,5 prosenttia, ukrainalaisia 3,7 prosenttia ja valkovenäläisiä 2,0 prosenttia. Äidinkielenään viroa puhui 50,1 prosenttia ja venäjää 46,7 prosenttia. Tallinnan pormestari on Mihhail Kõlvart, joka valittiin virkaan 12. huhtikuuta 2019.";
tal.innerHTML = tt1;