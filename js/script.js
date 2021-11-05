// Chiedere all'utente il numero di chilometri da percorrere (Controllo dati in input)
let kilometres = parseFloat(prompt('Inserisci i chilometri da percorrere'));

// Chiedere l'età del passeggero (Controllo dati in input)
let age = parseInt(prompt("Inserisci l'età del passeggero."));


// Calcolare il costo del biglietto (0.21 a km)
const price = 0.21 * kilometres;
console.log(price);


// Sconto 20% se minorenne

// Sconto 40% se over 65

// Output con due decimali