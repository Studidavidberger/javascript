// Creer un evenement on click qui change la source du fichier JS

// creer une variable string contenant le fichier JS
// recuperer l'element div "prochain exercice"
// recuperer l'element script
// modifier le contenu de l'ement script src lors d'un on click


// Attendre que le DOM est complement chargé
document.addEventListener("DOMContentLoaded", function() {
    
    // Declarer les elements HTML exercices, et script
    const exercices = document.getElementById('exercices');
    const script = document.getElementById('script');
    let calc = "aucun exercice choisi"

    // Declarer la variable num exercice
    let exercice = 1;
    
    // Ecouter les changement d'exercice
    exercices.addEventListener("change", function() {
        
        // CHANGER LE NUMERO OD'EXERCICE
        exercice = Number(exercices.value);
        calc = document.getElementById('calc').innerHTML;

        // CHANGER DE REPERTOIRE
        document.getElementById('script').src = `js/exo_${exercice}.js`;
        document.getElementById('opensource').src = `js/exo_${exercice}.js`;
        
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

            console.log(`
                bouton calc = ${ calc }
                type du bouton calc = ${ typeof calc }\n
                numero de l'exercice = ${ exercice }
                type du numero de l'exerice = ${ typeof exercice }
        `)
    })
})