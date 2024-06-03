/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/ 

function crazySum(x, y) {
    let sum = x + y;
    if ( x !== y) {
        return sum
    } else { 
        return sum * 3
    }
}
console.log(crazySum(3, 3));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(a) {
    if (a >= 20 && a <= 100) {
        return true
    } else if (a === 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(98));

//oppure si poteva fare 
function boundary2(b) {
    if (b >= 20 && b <= 100 || b === 400 ) {
        return true
    } else {
        return false
    }
}
console.log(boundary2(22));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reversString(string) {
    let x = string.split("").reverse().join("")
  return x
    
}
console.log(reversString("epicode"));

//oppure si poteva anche fare

function reverseString2(stringa) {
    return stringa.split("").reverse().join("");
}
console.log(reversString("ciao"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst (string2) {
    return string2.toUpperCase();
}
console.log(upperFirst("ciao"));

//nel primo caso sono tutte maiuscole, a me serve solo la prima lettera maiuscola di ogni parola:

function upperFirst2 (string3) {
    let words = string3.split(" ");
    console.log(words);
    for (let i = 0; i < words.length; i++) {        //ho inserito lo slice per attaccare il resto della parola che e' in minuscolo
        words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1);
        console.log(words[i]);
    }
}
upperFirst2("ciao come stai");

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom (n) {
    let array = [];
    for (let i = 0; i < n; i++) {  //il math random mi da un numero casuale tra 0 e 1, mentre il math floor me lo arrotonda
        array.push(Math.floor(Math.random() * 10));   
    }
    return array;
}
console.log(giveMeRandom(3));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2) {
    let area = l1 * l2;
    return area
}
console.log(area(10, 2));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
function crazyDiff(c) {
    
              // math.abs serve a convertire il numero se e' negativo in positivo
    let diff = Math.abs(c - 19);
    if (diff > 19) {
        return diff * 3;
    } else {
        return diff
    }
}
console.log(crazyDiff(52));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(str) {
    if (str.startsWith("code")) {
        return str;
    } else {
        return "code" + str
    }
}
console.log(codify("ciao"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(p) { //con Number.isInteger verifico se e' un numero intero o no
    if (p > 0 && Number.isInteger && p % 3 === 0 || p % 7 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(check3and7(15));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(strin) {
    return strin.slice(1, -1);
}
console.log(cutString("ciao"));
