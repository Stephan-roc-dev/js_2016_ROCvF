
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
var vandaag = new Date();
var months = vandaag.getMonth();
var year = vandaag.getFullYear();
var amount = parseFloat(prompt("Hoeveel geld wil je sparen?"));
var timeToSave = parseInt(prompt("Over hoeveel maanden hebt je het geld nodig"));

// Opdr 1.
document.write("<br>Vandaag: " + vandaag.getDate() + "/" +
                                 vandaag.getMonth() + "/" +
                                 vandaag.getFullYear() );

// Opdr 2.
if(vandaag.getDay() == 0 || vandaag.getDay() == 6){
    document.write("<br>Don't worry be happy!" );
} else {
    var daysTillWeekend = 6 - vandaag.getDay();
    document.write("<br>Nog " + daysTillWeekend + " dag(en) tot aan het weekend");
}

// Opdr 3.
if(vandaag.getHours() < 9 && vandaag.getHours() > 5) {
    document.write("<br>We maken ons klaar voor het ontbijt");
} else if (vandaag.getHours() > 9 && vandaag.getHours() < 13 ) {
    document.write("<br>Tijd voor de lunch");
} else if (vandaag.getHours() > 17 && vandaag.getHours() < 21) {
    document.write("<br>Time for Dinner!!");
} else {
    document.write("<br>" + "Snack time!!!!!!" );
}

// Opdr 4.
if (vandaag.getDate() < 25) {
 document.write("<br>Nog " + (25 - vandaag.getDate()) + " dag(en) om de huur te betalen!"  );
}

// Opdr 5.
document.write("<table class='table table-bordered table-hover'>" +
    "<th style='text-align: right'>Bedrag</th><th>Maand</th>");
for(var x = 0; x < timeToSave; x++){
    document.write("<tr>");
    document.write(monthCalc(amount) );
    document.write("</tr>")
}
document.write("</table>");

// Opdr 6 & 7.
document.write("<br>Jaar: " + vandaag.getFullYear() +
                "<br>JSON format: " + vandaag.toJSON());

