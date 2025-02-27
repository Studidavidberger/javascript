// Creer un evenement on click qui change la source du fichier JS

// creer une variable string contenant le fichier JS
// recuperer l'element div "prochain exercice"
// recuperer l'element script
// modifier le contenu de l'ement script src lors d'un on click


// Attendre que le DOM est complement chargé
document.addEventListener("DOMContentLoaded", function() {
    
    // recuperer le bouton exercices
    const exercices = document.getElementById('exercices');

    // recuperer la zone de message msg
    
    // recuperer la valeur du bouton exercices
    let exercice = 1;
    let script = document.getElementById('script');

    // Récupere le nom du fichier JS.

    // Changer de fichier JS entre 1 2 3 4 etc a 20
    exercices.addEventListener("change", function() {

        // Initaliser la variable message qui contient le contenu du message
        const msg = document.getElementById("exercices");
        msg.innerHTML = "test reussi";
    exercices.addEventListener('click', function () {
        exercice = exercices.value;
        document.getElementById('script').src = `js/exo_${exercice}.js`;
        if ( exercice === 1 ) {msg.innerHTML = "calculer le carré";}
        if ( exercice === 2 ) {msg.innerHTML = "nombre pair";}
        if ( exercice === 3 ) {msg.innerHTML = "nombre premier";}
        if ( exercice === 4 ) {msg.innerHTML = "exo 4";}
        if ( exercice === 5 ) {msg.innerHTML = "exo 5";}
        if ( exercice === 6 ) {msg.innerHTML = "exo 6";}
        if ( exercice === 7 ) {msg.innerHTML = "exo 7";}
        if ( exercice === 8 ) {msg.innerHTML = "exo 8";}
        if ( exercice === '9' ) {msg.innerHTML = "exo 9";}

        alert(`
                Exercice ${exercice}\n
                script ${script.src}\n
                msg ${msg};
         `);
        console.log("msg", msg);
    })

    })
})
