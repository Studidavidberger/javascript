/* script JS qui gere les boutons HTML
* 
* Ne gere aucun calcul arithmetique !!
* 
* */

// Attendre que le DOM est complement chargé
document.addEventListener("DOMContentLoaded", function() {
    
    // Declarer les elements HTML
    // button, button2, exercice, debug, calc, et version
    const button = document.getElementById('button');
    const button2 = document.getElementById('button2');
    const exercices = document.getElementById('exercices');
    const debug = document.getElementById('debug');
    const calc = document.getElementById('calc');
    
    // Declarer la variable num exercice
    let exercice = "N/A";
    
    // RECUPERER LA VALEURE DE number
    button.addEventListener('change', function () {
        number = document.getElementById('button').value;
        console.log("Tu viens d'ecrire", number);
    })

    // RECUPERER LA VALEURE DE number2
    button2.addEventListener('change', function () {
        number2 = document.getElementById('button2').value;
        console.log("Tu viens d'ecrire", number2);
    })
    
    // Ecouter les changement d'exercice
    exercices.addEventListener("change", function() {
        
        // Actualiser le numero d'exercice
        exercice = Number(exercices.value);
        
        // CHANGER DE REPERTOIRE
        document.getElementById('script').src = `js/exo_${exercice}.js`;
        document.getElementById('opensource').src = `js/exo_${exercice}.js`;
        document.getElementById('version').innerHTML = document.getElementById('script').src;
        
        // CHANGER LE MESSAGE DESCRIPTIF
        if ( exercice === 1 ) {document.getElementById('calc').innerHTML = "1) calculer le carré";}
        if ( exercice === 2 ) {document.getElementById('calc').innerHTML = "2) afficher la somme";}
        if ( exercice === 3 ) {document.getElementById('calc').innerHTML = "3) nombre pairs";}
        if ( exercice === 4 ) {document.getElementById('calc').innerHTML = "4) nombre premier";}
        if ( exercice === 5 ) {document.getElementById('calc').innerHTML = "5) table de multiplication";}
        if ( exercice === 6 ) {document.getElementById('calc').innerHTML = "6) factorielle";}
        if ( exercice === 7 ) {document.getElementById('calc').innerHTML = "7) son inverse";}
        if ( exercice === 8 ) {document.getElementById('calc').innerHTML = "8) plus grand diviseur";}
        if ( exercice === 9 ) {document.getElementById('calc').innerHTML = "9) plus petit diviseur";}
        if ( exercice === 10 ) {document.getElementById('calc').innerHTML = "10) pgcd avec 10";}
        if ( exercice === 11 ) {document.getElementById('calc').innerHTML = "11) ppcm avec 10";}
        if ( exercice === 12 ) {document.getElementById('calc').innerHTML = "12) plus grand commun diviseur de ces deux nombres";}
        if ( exercice === 13 ) {document.getElementById('calc').innerHTML = "13) plus petit commun multiple de ces deux nombres";}
        if ( exercice === 14 ) {document.getElementById('calc').innerHTML = "14) suite de Fibonacci jusqu'à ce nombre";}
        if ( exercice === 15 ) {document.getElementById('calc').innerHTML = "15) suite de Syracuse jusqu'à ce nombre";}
        if ( exercice === 16 ) {document.getElementById('calc').innerHTML = "16) suite de Collatz jusqu'à ce nombre";}
        if ( exercice === 17 ) {document.getElementById('calc').innerHTML = "17) suite de Lucas jusqu'à ce nombre";}
        if ( exercice === 18 ) {document.getElementById('calc').innerHTML = "18) suite de Pell jusqu'à ce nombre";}
        if ( exercice === 19 ) {document.getElementById('calc').innerHTML = "19) suite de Fibonacci généralisée jusqu'à ce nombre";}
        if ( exercice === 20 ) {document.getElementById('calc').innerHTML = "20) suite de Lucas généralisée jusqu'à ce nombre";}
    })

    debug.addEventListener('click', function () {
        console.log(`
        exercice = ${ exercice }
        ${typeof exercice }\n
        bouton = ${ button.value }
        ${typeof button }\n
        bouton2 = ${ button2.value }
        ${typeof button2 }\n
        version = ${ version }
        ${typeof version }
        `)
    })

// CALCULER LE CARRE.
    calc.addEventListener('click', function () {
        result = number * number;
        console.log("Le resultat est", result);

        // AFFICHER LE RESULTAT
        output.classList.remove('hide');
        document.getElementById("output").innerHTML = result;
    })
})