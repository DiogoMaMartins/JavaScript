/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length
}
var remplaceECar = function (texte) {
    return texte.replace("Ce", "C ");
}
var concatString = function (texte1, texte2) {
    return texte1 + texte2;
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.substr(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    if (texte = typeof "string") {
        return true;
    } else {
        return false;
    }
}

var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
var NombreEspaceString = function (texte) {
    return texte.match(/[ ]/g).length;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {

    let array2 = new Array();
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let absolute = Math.abs(element);
        array2[index] = absolute;
    }
    return array2;
}
var sufaceCercle = function (rayon) {
    return Math.round(rayon * Math.PI * rayon);
}
var hypothenuse = function (ab, ac) {
 return Math.hypot(ab , ac)  
}
var calculIMC = function (poids, taille) {
 return poids / (taille * taille)
}
