/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email */
"use strict";
console.clear();
/* location.reload();
 */
const mail = prompt("Inserisci la tua Mail");
let utentiRegistrati = [
  "gigi@ciao.com",
  "pinolalavatrice@ciao.com",
  "adrianomicarrya@ciao.com",
];
let mailFound;

if (mail != null && mail.includes("@")) {
  for (let i = 0; i <= utentiRegistrati.length - 1; i++) {
    if (mail == utentiRegistrati[i]) {
      mailFound = true;
      break;
    } else {
      mailFound = false;
    }
  }
  if (mailFound) {
    console.log("trovata");
  } else {
    console.log("Non Trovata");
  }
} else {
  console.log("Mail non valida");
}
