// PROBLEMA

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65. L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// 1- chiedere all'utente il numero di km che vuole percorrere 
// 2- chiedere all'utente l'età del passeggero
// 3- calcolare prezzo totale del viaggio
//    3.1- calcolare prezzo del biglietto in base ai km
//    3.2- calcolare lo sconto in base all'età
//    3.3- sottrarre al prezzo del biglietto lo sconto
// 4- l'output del prezzo 


// 1- chiedere all'utente il numero di km che vuole percorrere 
let km = parseInt(prompt("Km che si desidera percorrere"));
// 2- chiedere all'utente l'età del passeggero
let eta = parseInt(prompt("Età del passeggero"));


// 3- calcolare prezzo totale del viaggio

//    3.1- calcolare prezzo del biglietto in base ai km
let price_train = (km * 0.21).toFixed(2);
// console.log(price_train)

//    3.2- calcolare lo sconto in base all'età

let discount
let road 
let final_price

if (eta <= 18) {
    discount= (20 / 100) 
}


else if (eta >= 65) {
    discount= (40 / 100)
}

else {
    discount = 0
}

road = (price_train * discount).toFixed(2);
final_price = (price_train - road).toFixed(2);

console.log(final_price) 
