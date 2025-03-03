// il existe trois facon de creer une variable

// Il a 6 type de données principales
// string
// tableau
// boolean
// constante
// entiere
// flottante

let age = 34;

const PI = 3.14;

var nom = "Jean"

fuck = age + PI;
console.log("le nom", nom);
console.log("l'age", age);
console.log("PI", PI);
console.log("addition", fuck);

console.log(nom);
// String chaine de character
let texte1 = "bonjour"
let texte2 = "monde"

// Concatener deux chaines de character

// un literal template est simplement une chaine de charactere entouré
// par un double backtick
let template_01 = `${texte1} ${texte2} j'espere que va ca ?`
console.log("template literale", template_01);

// concatenation en appelant les noms des variables.
let template_02 = texte1 + texte2;
console.log("concatenation avec le +", template_02)

// guillements double
let quote_01 = "<div id=\"simediv\"></div>";
console.log("guillement double ", quote_01);

// guillement simple
let quote_02 = "<div id=\'simediv\'></div>";
console.log("guillemets simple ", quote_02);

// Chaine de charactere multi-ligne literal
let paragraph = `retour a la ligne
literalement`
console.log(paragraph);

// retour a la ligne avec le character d'chapement \n
let char_n = "charactere n -> \n <-"
console.log(char_n);

let char_0 = "charactere 0 = \0"
console.log(char_0);

// afficher des dessins en Unicode
const test_hex = '\u2764' // ❤️ en Unicode
console.log(test_hex);

// Faire un tableau
let fruits = ['pomme', 'banane', 'orange'];
console.log(fruits[]);