
/** FUNCTIONS
 **************************************************************
 ** @myFunction
 ** item wordt terug gegeven
 ** index is het getal wat gebruikt wordt voor de loop
 ** persoon is de naam van de array die gebruikt wordt.
 **
 ** @monthCalc
 ** Per maand word terug gegeven wanneer er een jaar voorbij
 ** is wordt er een jaar bij opgeteld
 **
 ************************************************************/
function myFunction(item, index, persoon) {
    persoon[index] = document.write("<br>" + item );
}

function monthCalc(amount){
    var savePerMonth = parseFloat((amount / 12).toFixed(2));
    var monthsPerYear = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    if(months < 12) {
        return "<td style='text-align: right'>" + savePerMonth + "</td><td>" + monthsPerYear[(months++)].toUpperCase() + "/" + year + "</td>";
    } else {
        months = 0;
        year =  year + 1;
        return "<td style='text-align: right'>" + savePerMonth + "</td><td>" + monthsPerYear[(months++)].toUpperCase() + "/" + year + "</td>";
    }
}
