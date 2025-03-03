/* Exercice 2 Ecrire un algorithme qui calcule le carré d'un nombre donné
* 
* PSEUDOCODE
* 
* START
* 
* Declarer les elements HTML button et button2, et calc
* 
* Declare les variables number, number2, et result
* 
* IF num button change
*   PRINT = "Vous avez choisi number"
* 
* IF num button2 change
*   PRINT = "Vous avez choisi number2"
* 
* IF output is clicked
*   PRINT = "le resultat est result"
*
* 
* * */

// DECLARER LE BOUTON D'ENTRÉE
const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const calc = document.getElementById('calc');

// DECLARER LES VARIABLES number, number2, et result
let number = 0;
let number2 = 0;
let result = 0;

// L'UTILSATEUR CHOISI LES DEUX VALEURES
button.addEventListener('change', function () {
    number = Number(document.getElementById('button').value);
    console.log("Tu viens d'ecrire", number);
})
button2.addEventListener('change', function () {
    number2 = Number(document.getElementById('button2').value);
    console.log("Tu viens d'ecrire", number2);
})

// LE PROGRAMME CALCULER LA SOMME.
calc.addEventListener('click', function () {
    result = number + number2;
    console.log(`
        valeure=${number}
        valeure=${number2}
        result=${result}        
        `)

    // AFFICHER LE RESUlTAT
    output.classList.remove('hide');
    document.getElementById("output").innerHTML = result;
})

// AFFICHER LES VARIABLES
const debug = document.getElementById('debug');
debug.addEventListener('click', function () {
    console.log(`
    premiere valeure=${number}
    deuxieme valeure=${number2}
    resultat=${result}
    `)
})
