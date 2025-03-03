/*
*
* Exercice 3 affiche tous les nombres pairs compris entre 1 et ce nombre
*
* START
*
* declarer les boutons buttons, et calc.
*
* declarer les variables number, et result
*
* number  = INPUT = "Entrez votre nombre"
*
* IF calc is clicked
*   WHILE result is less than number
*   CREATE a new div
*   result = number
*
*
* * */
 
// Declarer les elements HTML
// button, button2, debug, calc.
const button = document.getElementById('button');
const debug = document.getElementById('debug');
const calc = document.getElementById('calc');
const version = document.getElementById('version');

// Déclarer les variables number, et result.
let number = 0;
let result = 0;
    
// RECUPERER LA VALEURE DE LA VARIABLE
    button.addEventListener('change', function () {
        number = document.getElementById('button').value;
        console.log("Tu viens d'ecrire", number);
        // Afficher le repertoire
        document.getElementById('version').innerHTML = document.getElementById('script').src;
    })
    
// CALCULER LE CARRE.
    calc.addEventListener('click', function () {
        result = number * number;
        console.log("Le resultat est", result);

        // AFFICHER LE RESULTAT
        output.classList.remove('hide');
        document.getElementById("output").innerHTML = result;
    })

// CALCULER LE CARRE.
    calc.addEventListener('click', function () {
        result = number * number;
        console.log("Le resultat est", result);

        // AFFICHER LE RESULTAT
        output.classList.remove('hide');
        document.getElementById("output").innerHTML = result;
    })

debug.addEventListener('click', function () {
    console.log(`
        bouton = ${ button.value }
        ${typeof button }\n
        `)
})
