/* Calcola la somma e la media dei primi 10 numeri. */
let n = 10;
let somma = 0;
let media = 0;

for (let i = 0; i < n; i++) {
  somma += i;
}
media = somma / n;
console.log(`somma: ${somma}`);
console.log(`media: ${media}`);
