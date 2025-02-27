// Creer un evenement on click qui change la source du fichier JS
// dans l'element div

// creer une variable string contenant le fichier JS
// recuperer l'element div "prochain exercice"
// recuperer l'element script
// modifier le contenu de l'ement script src lors d'un on click

const exo_button = document.getElementById('exo_button');
const next = document.getElementById('next');

let exo_number = document.getElementById('exo_number');
let source = document.getElementById('script')
exo_button.addEventListener('change', function () {
    exo_number = exo_button.value;
    document.getElementById('script').src=`js/exo_${exo_number}.js`
})
console.log("numero d'exercice", exo_number);
console.log("element bouton exercice", exo_button);
console.log("afficher la source", source);

let source2 = document.getElementById('source2');
console.log("affichier src", source2.src);

// Ajouter une classe a un element
//box.classList.add('rond');

// Modifier l'attribut src a un element
//document.getElementById('script').src="js/exo_02.js"
