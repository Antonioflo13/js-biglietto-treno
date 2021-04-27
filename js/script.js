var name = prompt ("Ciao, qual'è il tuo nome?");
var surname = prompt ("Ciao, qual'è il tuo cognome?");
var km = (parseInt(prompt ("Ciao, quanti km dovrai percorrere in viaggio?")));
var eta = (parseInt(prompt("Ciao, quanti anni hai?")));
var priceKm = (km * 0.21);

document.getElementById ("name") .innerHTML = (name);
document.getElementById ("surname") .innerHTML = (surname);
document.getElementById ("km") .innerHTML = (km + " km");
document.getElementById ("eta") .innerHTML = (eta);

if (eta < 18) {
    sale = (priceKm - (priceKm / 100 * 20).toFixed(2));
    document.getElementById ("sale") .innerHTML = ("Sei under 18, il prezzo del biglietto è stato scontato del 20%, il totale del biglietto è " + sale);
} else if (eta > 65) {
    sale = (priceKm - (priceKm / 100 * 40).toFixed(2));
    console.log(sale);
    document.getElementById ("sale") .innerHTML = ("Sei over 65, il prezzo del biglietto è stato scontato del 40%, il totale del biglietto è  " + sale);
}

document.getElementById ("price") .innerHTML = ("Il totale del prezzo del biglietto è " + priceKm);