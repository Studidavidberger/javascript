// EXO 1 CALCULER LE CARRE

/* Exercice 1 : Ecrire un algorithme qui calcule 
    le carré d'un nombre donné
    
// MON PSEUDO CODE DAVID BERGER
*
* recuperer le bouton value 
* initialiser la variable number a zero
* faire le calcul on click
* 
* * */



// DECLARER LE BOUTON D'ENTRÉE
const button = document.getElementById('mario');
const button2 = document.getElementById('luigi');

// DECLARER LA VARIABLE
let number = document.getElementById('mario').value;
let number2 = document.getElementById('luigi').value;

// DECLARER LE BOUTON RESULTAT
const result = document.getElementById('result');

// DECLARER LA VARIABLES RESULT
let _result = 0;


// RECUPERER LA VALEURE DE LA VARIABLE
button.addEventListener('change', function () {
    number = Number(document.getElementById('mario').value);
    console.log("Tu viens d'ecrire", number);
})
button2.addEventListener('change', function () {
    number2 = Number(document.getElementById('luigi').value);
    console.log("Tu viens d'ecrire", number2);
})

// Faire le calcul choisi on click.
const math = document.getElementById('msg');
math.addEventListener('click', function () {
    _result = number + number2;
    console.log(`
        valeure=${number}
        valeure=${number2}
        result=${_result}
        
        `)

    // AFFICHER RESULTAT
    result.classList.remove('hide');
    document.getElementById("result").innerHTML=_result;
})

// AFFICHER LES VARIABLES
const debug = document.getElementById('debug');
debug.addEventListener('click', function () {
    alert(`
    premiere valeure=${number}
    resultat=${_result}
    `)
})
