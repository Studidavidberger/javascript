/* Exercice 1 : Ecrire un algorithme qui demande à l'utilisateur de saisir un nombre 
                         et qui affiche son carré    /

// MON PSEUDO CODE DAVID BERGER
* initier a zero le premeir nombre
* initier a zero le deuxieme nombre
* 
* verifier quel operation est a calculer
* 
* recuperer l'element du premier nombre
* recuperer l'element du deuxieme nombre
* 
* appliquer la valeure aux deux variable lors 
* de l'evement click
* 
* faire le calcul
* 
* faire apparaitre un element resultat avec le resultat
* * */



// DECLARER LES DEUX BOUTONS
const button1 = document.getElementById('mario');
const button2 = document.getElementById('luigi');

// DECLARER LE BOUTON RESULTAT
const result = document.getElementById('result');

// DECLARER LES DEUX VARIABLES
let value1 = document.getElementById('mario').value;
let value2 = document.getElementById('luigi').value;

// DECLARER LA VARIABLES RESULT
let _result = 0;

// RECUPERER LA VALUE DES DEUX VARIABLES
button1.addEventListener('change', function () {
// RECUPERER PREMIER NOMBRE
    value1 = document.getElementById('mario').value;
    console.log("Tu viens d'ecrire", value1);
})
button2.addEventListener('change', function () {
// RECUPERER DEUXIEME NOMBRE
    value2 = document.getElementById('luigi').value;
    console.log("Tu viens d'ecrire", value2);
})

// Faire le calcul choisi on click.
const math = document.getElementById('msg');
math.addEventListener('click', function () {
    {
        _result = mario * mario;
        alert(`
        result
        
        `)
    }

    // AFFICHER RESULTAT
    result.classList.remove('hide');
    document.getElementById("result").innerHTML=_result;
})

// AFFICHER LES VARIABLES
const debug = document.getElementById('debug');
debug.addEventListener('click', function () {
    alert(`
    premiere valeure=${value1}
    deuxieme valeure=${value2}\n
    resultat=${_result}
    `)
})
