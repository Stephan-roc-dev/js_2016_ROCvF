
// // L01P02 - JavaScript
// var naam = prompt("Wat is uw naam?");
//
// alert("Beste " + naam + "! Alles gaat goed.");
//
// var leeftijd = prompt("Wat is uw leeftijd?");
//
// if(leeftijd < 18) {
//     confirm("We noteren je adres maar we komen later bij je terug");
// } else {
//     confirm("We gaan alles in orde maken");
// }
//
// var adres = prompt("Waar woon je?");
//
// var persoon = new Array();
// persoon[0] = naam;
// persoon[1] = leeftijd;
// persoon[2] = adres;
//
// document.write("<br><pre>" + persoon + "</pre>" );
// persoon.forEach(myFunction);

// L02P02 - JavaScript

/**
 *
 * uitleg Said over tijd en &&
 */
var dag = new Date();
document.write("<br>" + dag.getHours() );

if(dag.getHours() > 6 && dag.getHours() < 10 ) {
    // voor ontbijt
    document.write("<br>" + "Lekker ontbijten" );
} else if(dag.getHours() > 10 && dag.getHours() < 13) {
    // De lunch
    document.write("<br>" + "Tijd voor lunch" );
} else if(dag.getHours() > 13 && dag.getHours < 17) {
    // tussendoor
    document.write("<br>" + "Tijd voor tussendoortje" );
} else if(dag.getHours() > 17 && dag.getHours < 20) {
    // diner
    document.write("<br>" + "Tijd voor diner" );
}  else {
    //snack
    document.write("<br>" + "Snack time" );
}
dag.setMonth(3,30)
document.write("<br>" + dag );
var day = new Date();
day.setMonth(10, 20);
document.write("<br>" + day);