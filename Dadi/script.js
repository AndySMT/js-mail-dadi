/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

let userNum;
let pcNum;

function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

userNum = genRandomNum(1, 6);
pcNum = genRandomNum(1, 6);
console.log(
  `Il dado del giocatore e ${userNum} mentre il dado del computer e ${pcNum}`
);
if (userNum > pcNum) {
  console.log("Il giocatore ha vinto");
} else if (userNum < pcNum) {
  console.log("Il computer ha vinto");
} else {
  console.log("Pareggio");
}
