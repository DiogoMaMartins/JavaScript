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

// Exercice 9 - utilisation de la boucle while
let testWhile = function () {
    let lettreP = prompt("Ajouter la lettre P");
    while (lettreP != "p") {
        lettreP = prompt("Ajouter la lettre P");

    }
}

// Exercice 10 - utilisation de la boucle for

function somme() {
    let sommefinal = 0;
    for (let index = 0; index < 3; index++) {
        newNb = prompt("Entrez un chiffre");
        newNbToFloat = parseFloat(newNb)
        sommefinal += newNbToFloat;
        alert("Votre résultat : ", sommefinal)
    }
}

// Exercice 11 - utilisation des boucles et tests
let sommeFinal2 = 0;
let enterValue = 0;
function calculMoyenne() {
    let nbEntier = prompt("Entrez un nombre entier");
    let nbEntertoInt = parseFloat(nbEntier);

    if (Number.isInteger(nbEntertoInt)) {
        if (nbEntertoInt > 0) {
            sommeFinal2 += nbEntertoInt;
            console.log(sommeFinal2);
            enterValue++;
            calculMoyenne();

        } else {
            sommeFinal2 /= enterValue;
            alert("La moyenne : " + sommeFinal2)
        }
    } else {
        alert(nbEntertoInt + " is not integer");
        calculMoyenne();
    }

}
// Exercice 12 - Conversion de température Celsius, Fahrenheit et Kelvin
let fahrenheit = 0;
let celcius = 0;
let kelvin = 0;

function showTemperaturList() {
    let convertionShow = document.querySelector(".listConvertion");
    convertionShow.style.visibility = "visible";
}
function endList() {
    let convertionShow = document.querySelector(".listConvertion");
    convertionShow.style.visibility = "hidden";
}

function celiciusToFahrenheit() {
    celcius = prompt("Entrez un degres Celcius")
    fahrenheit = (celcius * 9 / 5) + 32;
    alert(fahrenheit);
}

function celiciusToKelvin() {
    celcius = prompt("Entrez un degres Celcius");
    kelvin = celcius + 273.15;
    alert(kelvin);
}

function fahrenheitToCelcius() {
    fahrenheit = prompt("Entrez un degres Celcius")
    celcius = (fahrenheit * 1.8) + 32;
    alert(celcius);
}

function fahrenheitToKelvin() {
    fahrenheit = prompt("Entrez un degres Celcius")
    kelvin = (fahrenheit + 459, 67) / 1, 8;
    alert(kelvin);
}

function kelvinToCelcius() {
    kelvin = prompt("Entrez un degres Celcius")
    celcius = kelvin - 273, 15;
    alert(celcius);
}

function kelvinToFahrenheit() {
    kelvin = prompt("Entrez un degres Celcius")
    fahrenheit = (kelvin * 1, 8) - 459, 67;
    alert(fahrenheit);
}

// Exercice 13 - Calcul de l'IMC
function calculIMC() {
    let poids = prompt("Entrez votre poid");
    let taille = prompt("entrez votre taille");
    let calculIMCvar = poids / (taille * taille);
    console.log(calculIMCvar)
    if (calculIMC < 16.5) {
        alert("dénutrition ou famine");
    } else if (calculIMCvar <= 16.5 && calculIMCvar < 18.5) {
        alert("maigreur");
    } else if (calculIMCvar <= 18.5 && calculIMCvar < 25) {
        alert("corpulence normale");
    } else if (calculIMCvar <= 25 && calculIMCvar < 30) {
        alert("surpoids");
    } else if (calculIMCvar <= 30 && calculIMCvar < 35) {
        alert("obésité modérée");
    } else if (calculIMCvar <= 35 && calculIMCvar < 40) {
        alert("obésité modérée");
    } else if (calculIMCvar > 40) {
        alert("obésité morbide");
    }
}