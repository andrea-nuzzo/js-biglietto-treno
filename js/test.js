function promptMe(){
    const kilometres = parseFloat(prompt('Inserisci i chilometri da percorrere'));
    if(isNaN(kilometres)){
        alert("I Chiolmetri devono essere inseriti in un formato numerico")
    }

    const age = parseInt(prompt("Inserisci l'età del passeggero."));
    if (isNaN(age)) {
    alert("L'età deve essere inserita in un formato numerico")
    }
    
    let price = 0.21 * kilometres;

    if (age < 18){
        discount = (price) * 20 / 100;
        price -= discount
    } else if (age > 65){
        discount = (price) * 40 / 100;
        price -= discount
    }

    price = parseFloat(price.toFixed(2));

    document.getElementById('price_ticket').innerHTML = price;
}




