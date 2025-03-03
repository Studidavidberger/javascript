/*
* PSEUDOCODE
* Exercice 1 : Ecrire un algorithme qui calcule le carré d'un nombre donné
*
* BEGIN
*
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
const button = document.getElementById('input');
const result = document.getElementById('result');
const message = document.getElementById('msg');
const debug = document.getElementById('debug');

// DECLARER LA VARIABLE
let number = 0;
// DECLARER LA VARIABLES RESULT
let _result = 0;


// RECUPERER LA VALEURE DE LA VARIABLE
button.addEventListener('change', function () {
    number = document.getElementById('input').value;
    console.log("Tu viens d'ecrire", number);
})


// CALCULER LE CARRÉ.
message.addEventListener('click', function () {
        _result = number * number;
        console.log(_result);

    // AFFICHER LE RESULTAT
    result.classList.remove('hide');
    document.getElementById("result").innerHTML=_result;
})


// AFFICHER LES VARIABLES
debug.addEventListener('click', function () {
    console.log(_result);
})
