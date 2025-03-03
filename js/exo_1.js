/*
* Exercice 1 : Ecrire un algorithme qui calcule le carre d'un nombre donne
*
* PSEUDOCODE
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

// DECLARER LES ELEMENTS HTML
const button = document.getElementById('button');
const debug = document.getElementById('debug');
const output = document.getElementById('output');

// DECLARER LES VARIABLE number, et _result
let number = 0;
let result = 0;


// RECUPERER LA VALEURE DE LA VARIABLE
button.addEventListener('change', function () {
    number = document.getElementById('button').value;
    console.log("Tu viens d'ecrire", number);
})


// CALCULER LE CARRE.
output.addEventListener('click', function () {
    result = number * number;
    console.log(result);

    // AFFICHER LE RESULTAT
    result.classList.remove('hide');
    document.getElementById("result").innerHTML = result;
})


// AFFICHER LES VARIABLES
debug.addEventListener('click', function () {
    console.log(result);
})
