var slider = document.getElementById('history-slider');
var output = document.getElementById('slider-year');
var hel = document.getElementById('helsinki-slider-text');
var tal = document.getElementById('tallinn-slider-text');

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
    tal.innerHTML = tt1;
  }
  if (slider.value == 2) {
    output.innerHTML = vuosi2;
    hel.innerHTML = ht2;
    tal.innerHTML = tt2;
  }
  if (slider.value == 3) {
    output.innerHTML = vuosi3;
    hel.innerHTML = ht3;
    tal.innerHTML = tt3;
  }
  if (slider.value == 4) {
    output.innerHTML = vuosi4;
    hel.innerHTML = ht4;
    tal.innerHTML = tt4;
  }
  if (slider.value == 5) {
    output.innerHTML = vuosi5;
    hel.innerHTML = ht5;
    tal.innerHTML = tt5;
  }
};

let ht1 = 'Helsinki perustettiin Tallinnan kilpailijaksi Vantaanjoen suulle vuonna 1550 ja siirrettiin nykyiselle paikalleen vuonna 1640. Helsingistä tuli Suomen suuriruhtinaskunnan pääkaupunki vuonna 1812 ja Suomen pääkaupunki maan itsenäistyessä vuonna 1917.';
let tt1 = 'Tallinna perustettiin ennen vuotta 1154. Kaupunki on syntynyt keskeisen Itämeren reitin varrelle. Kaupungin edustalla Naissaaren ja Porkkalan välissä on ainoa paikka jossa Suomenlahti on mahdollista ylittää niin että maata on koko matkan ajan näkyvissä. Reitti Tanskasta Tallinnaan on kuvattu 1200-luvulta säilyneessä tanskalaisessa itineraariossa. Toompeanmäellä on alun perin ollut virolaisten linnake, jolla ei kuitenkaan todennäköisesti ollut pysyvää asutusta tai varuskuntaa.Toompeanmäen pakolinnan lisäksi alueella on mahdollisesti sijainnut satamapaikka, joka oli mahdollisesti Rävälän ja Harjumaan ylimystön valvoma.';
let ht2 = 'Helsinki oli pitkään lähinnä vain pienikokoinen Uudenmaan ja Hämeen läänin maaherran hallintokaupunki, mutta sen merkitys alkoi kasvaa, kun kaupungin edustalle ryhdyttiin vuonna 1748 rakentamaan Suomenlinnan linnoitusta. Linnoitustyöt toivat lisää asukkaita ja varuskunta vilkastutti kaupungin seuraelämää, kaupankäyntiä ja laivaliikennettä. Helsingin väkiluku oli 1800-luvun alussa kohonnut neljään tuhanteen asukkaaseen.';
let tt2 = 'Tallinna siirtyi vuonna 1561 Ruotsille ja edelleen Venäjän keisarikunnalle 1721. Tallinna oli Venäjän vallan aikana Viron kuvernementin keskus, ja kuten muukin Viro, säilytti saksalaisen hallinnon ja instituutiot Venäjän vallan loppupuolelle asti.';
let ht3 = 'Suomen sodan aikana 1808 venäläiset valtasivat Helsingin, ja samana vuonna suuri tulipalo hävitti kaupunkia. Helsingistä tuli Suomen suuriruhtinaskunnan pääkaupunki vuonna 1812. Turun palon jälkeen vuonna 1827 myös yliopisto siirrettiin Helsinkiin. Helsingistä kehkeytyi hallinto-, yliopisto- ja varuskuntakaupunki, ja se kasvoi maan todelliseksi teollisuuskeskukseksi. Vuonna 1840 kaupungin väkiluku oli noussut noin 20 000:een asukkaaseen.';
let tt3 = '1800-luvulla Tallinan asukasluku nousi 64 572 asukkaaseen vuoteen 1897 mennessä. Tallinna ja Viro olivat silti Venäjän vallan alla. Viro itsenäistyisi vasta myöhemmin 1900-luvun alussa.';
let ht4 = 'Helsingistä tuli itsenäisen Suomen pääkaupunki joulukuussa 1917. Suomen sisällissota puhkesi tammikuussa 1918. Toisen maailmansodan aikana Helsinki joutui useaan Neuvostoliiton suurpommitukseen, mutta selvisi tehokkaan ilmapuolustuksen ansiosta suhteellisen pienin vaurioin. Esimerkiksi Helsingin suurpommitukset helmikuussa 1944 torjuttiin melko pienin tappioin. Vuonna 1952 pidettiin Helsingin olympialaiset ja vuonna 1975 Euroopan turvallisuus- ja yhteistyökonferenssin (ETYK) huippukokous. Vuonna 1982 avattiin Helsingin metro. Vuonna 2000 Helsinki oli yksi Euroopan kulttuuripääkaupungeista.';
let tt4 = 'Vuonna 1918 Viro julistautui itsenäiseksi saksalaisten hyökättyä Latviasta Viron kautta kohti Pietaria Brest-Litovskin rauhanneuvotteluiden juututtua Neuvosto-Venäjän passiiviseen vastarintaan. Toisessa maailmansodassa Viro oli vaihtelevasti osa Neuvostoliittoa ja Natsi-Saksaa. Sodan loputtua Viro oli osa Neuvostoliittoa. Vuonna 1989 Tallinnassa oli jo runsaat 482 000 asukasta, mutta Viron uudelleenitsenäistymisen jälkeen runsaasti venäläisasukkaita on lähtenyt kaupungista. Tallinnasta tuli jälleen itsenäisen Viron pääkaupunki vuonna 1991, Neuvostoliiton hajoamisen myötä.';
let ht5 = 'Helsinki (ruots. Helsingfors) on Suomen pääkaupunki ja Uudenmaan maakuntakeskus. Se sijaitsee Suomenlahden pohjoisrannalla Uudenmaan maakunnan keskiosassa. Helsingin naapurikunnat ovat lännessä Espoo, pohjoisessa Vantaa ja idässä Sipoo. Kaupungissa on 650 033 asukasta. Helsingin keskustaajama ulottuu usean naapurikunnan alueelle, kuten Espooseen ja Vantaalle. Laajemmalla Helsingin seudun metropolialueella on 1 572 928 asukasta.';
let tt5 = 'Tallinna (vir. Tallinn [ˈtɑlʲˑinˑ], venäjäksi Таллин, aikaisemmin saks. Reval eli suom. Rääveli, vanhassa suomessa joskus Kesoniemi tai Kesoi) on Viron pääkaupunki ja maan pääasiallinen portti merelle. Kaupungin väkiluku on 440 112 (18.2.2016) ja se on Viron suurin asutuskeskus. Vuoden 2011 väestönlaskennan mukaan kaupungin asukkaista oli virolaisia 52,5 prosenttia, venäläisiä 38,5 prosenttia, ukrainalaisia 3,7 prosenttia ja valkovenäläisiä 2,0 prosenttia. Äidinkielenään viroa puhui 50,1 prosenttia ja venäjää 46,7 prosenttia. Tallinnan pormestari on Mihhail Kõlvart, joka valittiin virkaan 12. huhtikuuta 2019.';
hel.innerHTML = ht1;
tal.innerHTML = tt1;