// Exercice 1 - écriture d'une fonction
function PeriRectangle() {
    let hauteur = prompt("Definir la hauteur");
    let longueur = prompt("Definir la longueur");
    let calculPeri = parseInt(hauteur) + parseInt(longueur);
    let resultPeri = calculPeri * 2;
    alert(resultPeri);
}

let surfaceRectagle = function () {
    let hauteur = prompt("Definir la hauteur");
    let longueur = prompt("Definir la longueur");
    let calculSurface = hauteur * longueur;
    alert(calculSurface);
}

// Exercice 2 - écriture d'une fonction renvoyant une valeur

let functionRayon = function () {
    let demandeRayon = document.getElementById("rayon").value;
    let vsurface = demandeRayon * demandeRayon * 3.14;
    alert("surface du cercle : " + vsurface + " cm2");
}

// Exercice 3 - écriture d'une fonction avec arguments
let e = 3;
let c = 2;
let triple = function (x) {
    return x * 3;
}


let affiche = function () {
    alert(triple(e));
    alert(triple(c));

}

// Exercice 4 - utilisation d'un tableau
let tab = ["-1", "2", "4"];

function Additionne(y) {
    return y + 2;
}

function Affiche2() {
    for (i = 0; i < tab.length; i++) {
        let tableIndex = parseInt(tab[i]);

        alert(Additionne(tableIndex));
    }
}

// Exercice 5 - manipulation des opérateurs

function myFunction() {
    let b = 2;
    let a;
    a = b++;
    console.log(a);
    a = ++b;
    console.log(a);
    a = b--;
    console.log(a);
    a = --b;
    console.log(a);
    a += b++;
    console.log(a);
    a = 1; a += ++b;
    console.log(a);
    a = 1; a -= b++;
    console.log(a);
    a = 1; a -= ++b;
    console.log(a);
    a = 1; a += b--;
    console.log(a);
    a = 1; a += --b;
    console.log(a);
}

// Exercice 7 - utilisation de switch
function faireChoix() {
    let key = prompt("Faite un choix entre 1 et 3 : ");
    
    switch (key) {
        case "1":
            alert("1. Merci");
            break;
        case "2":
            alert("2. Bonjour");
            break;
        case "3":
            alert("3. Au revoir");
            break;
        default:
            alert("Pardon, que voulez-vous ?");
            break;
    }
}

// Exercice 8 - utilisation de switch et de l'objet date
function jourDeLaSemaine() {
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    alert(day)
}