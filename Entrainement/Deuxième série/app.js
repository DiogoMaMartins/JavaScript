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
let a = 3;
let b = 2;
let triple = function (x){
    return x * 3;
}


let affiche = function (){
    alert(triple(a));
    alert(triple(b));
    
}

// Exercice 4 - utilisation d'un tableau
let tab = ["-1", "2", "4"];

function Additionne(y){
    return y + 2;
}

function Affiche2(){
    for (i=0 ; i < tab.length; i++){
        let tableIndex = parseInt(tab[i]);

        alert(Additionne(tableIndex));
    } 
}