/* Crea un array vuoto.
Chiedi per 6 volte all utente di inserire un numero,
se e dispari inseriscilo nell array */
"use strict";
console.clear();

let odd = [];
let i = 0;

for (i = 0; i == 6; i++) {
  let n = parseInt(prompt("Inserisci un numero"));
  if (n % 2 !== 0) {
    odd.push(n);
  }
}
console.log(odd);
