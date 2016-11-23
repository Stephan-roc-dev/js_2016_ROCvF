
// L01P02 - JavaScript
var naam = prompt("Wat is uw naam?");

alert("Beste " + naam + "! Alles gaat goed.");

var leeftijd = prompt("Wat is uw leeftijd?");

if(leeftijd < 18) {
    confirm("We noteren je adres maar we komen later bij je terug");
} else {
    confirm("We gaan alles in orde maken");
}

var adres = prompt("Waar woon je?");

var persoon = new Array();
persoon[0] = naam;
persoon[1] = leeftijd;
persoon[2] = adres;

document.write("<br><pre>" + persoon + "</pre>" );
persoon.forEach(myFunction);

// L02P02 - JavaScript
