/*
* Exercice 1 : Ecrire un algorithme qui calcule le carre d'un nombre donne
*
* PSEUDOCODE EN JAVASCRIPT
*
* BEGIN
*
* Declarer les elements HTML button, debug et output
* Declare variables number, and result
*
* number = INPUT num "Entrez votre nombre"
*
* number = number * number
*
* OUTPUT number
*
* * */

// DECLARER LES ELEMENTS HTML button, calc, output, et debug
const button = document.getElementById('button');
const calc = document.getElementById('calc');
const output = document.getElementById('output');
const debug = document.getElementById('debug');

// DECLARER LES VARIABLES number, et _result
let number = 0;
let result = 0;


// RECUPERER LA VALEURE DE LA VARIABLE
button.addEventListener('change', function () {
    number = document.getElementById('button').value;
    console.log("Tu viens d'ecrire", number);
})


// CALCULER LE CARRE.
calc.addEventListener('click', function () {
    result = number * number;
    console.log("Le resultat est", result);

    // AFFICHER LE RESULTAT
    output.classList.remove('hide');
    document.getElementById("output").innerHTML = result;
})