// Creer un evenement on click qui change la source du fichier JS

// creer une variable string contenant le fichier JS
// recuperer l'element div "prochain exercice"
// recuperer l'element script
// modifier le contenu de l'ement script src lors d'un on click


// Attendre que le DOM est complement chargé
document.addEventListener("DOMContentLoaded", function() {
    
    // recuperer le bouton exercices
    const exercices = document.getElementById('exercices');
    
    // recuperer la valeur du bouton exercices
    let exercice = 1;
    let script = document.getElementById('script');
    
    // Ecouter les changement d'exercice
    exercices.addEventListener("change", function() {
        
        document.getElementById('msg').innerHTML = "test reussi";

        // Initaliser la variable message
        let msg = document.getElementById("exercices").innerHTML;

        // Modifier le repertoire script.
        exercice = Number(exercices.value);
        document.getElementById('script').src = `js/exo_${exercice}.js`;
        
        // Changer le nom du message
        if ( exercice === 1 ) {document.getElementById('msg').innerHTML = "calculer le carré";}
        if ( exercice === 2 ) {document.getElementById('msg').innerHTML = "afficher la somme";}
        if ( exercice === 3 ) {document.getElementById('msg').innerHTML = "nombre pairs";}
        if ( exercice === 4 ) {document.getElementById('msg').innerHTML = "nombre premier";}
        if ( exercice === 5 ) {document.getElementById('msg').innerHTML = "table de multiplication";}
        if ( exercice === 6 ) {document.getElementById('msg').innerHTML = "factorielle";}
        if ( exercice === 7 ) {document.getElementById('msg').innerHTML = "son inverse";}
        if ( exercice === 8 ) {document.getElementById('msg').innerHTML = "plus grand diviseur";}
        if ( exercice === 9 ) {document.getElementById('msg').innerHTML = "plus petit diviseur";}
        if ( exercice === 10 ) {document.getElementById('msg').innerHTML = "pgcd avec 10";}
        if ( exercice === 11 ) {document.getElementById('msg').innerHTML = "ppcm avec 10";}
        if ( exercice === 12 ) {document.getElementById('msg').innerHTML = "plus grand commun diviseur de ces deux nombres";}
        if ( exercice === 13 ) {document.getElementById('msg').innerHTML = "plus petit commun multiple de ces deux nombres";}
        if ( exercice === 14 ) {document.getElementById('msg').innerHTML = "suite de Fibonacci jusqu'à ce nombre";}
        if ( exercice === 15 ) {document.getElementById('msg').innerHTML = "suite de Syracuse jusqu'à ce nombre";}
        if ( exercice === 16 ) {document.getElementById('msg').innerHTML = "suite de Collatz jusqu'à ce nombre";}
        if ( exercice === 17 ) {document.getElementById('msg').innerHTML = "suite de Lucas jusqu'à ce nombre";}
        if ( exercice === 18 ) {document.getElementById('msg').innerHTML = "suite de Pell jusqu'à ce nombre";}
        if ( exercice === 19 ) {document.getElementById('msg').innerHTML = "suite de Fibonacci généralisée jusqu'à ce nombre";}
        if ( exercice === 20 ) {document.getElementById('msg').innerHTML = "suite de Lucas généralisée jusqu'à ce";}
        alert(`
                Exercice ${exercice}\n
                script ${script.src}\n
                msg ${msg};
                
         `);
        // PROBLEME 1
        // dans la condition IF, exercice n'est pas un entier
        // SOLUTION 1
        // voir le type de variable
        // console.log( typeof exercice );
        // puis convertir exercice en un entier
        
            console.log(`
                msg= ${ msg }
                msg typeof = ${ typeof msg }\n
                exercice = ${ exercice }
                exercice typeof = ${ typeof exercice }
               
        `)

    })
    // ON CLICK LISTENER
})
//DOM LOADED