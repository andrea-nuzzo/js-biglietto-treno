// Chiedere all'utente il numero di chilometri da percorrere (Controllo dati in input)
const kilometres = parseFloat(prompt('Inserisci i chilometri da percorrere'));

if (isNaN(kilometres)) {
    alert("Il numero inserito non è un numero")
}

// Chiedere l'età del passeggero (Controllo dati in input)
const age = parseInt(prompt("Inserisci l'età del passeggero."));

if (isNaN(age)) {
    alert("Il numero inserito non è un numero")
}

// Calcolare il costo del biglietto (0.21 a km)
let price = 0.21 * kilometres;

// Sconto 20% se minorenne
if (age < 18){
    discount = (price) * 20 / 100;
    price -= discount
    // Sconto 40% se over 65
} else if (age > 65){
    discount = (price) * 40 / 100;
    price -= discount
}

price = parseFloat(price.toFixed(2));
// Output con due decimali

document.getElementById('price_ticket').innerHTML = price;