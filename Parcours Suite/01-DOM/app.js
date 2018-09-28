
// EXERCICE 1 : Manipulation de classes

let selectBody = document.querySelector("body");
selectBody.classList.remove("bg-aqua");
selectBody.classList.add("bg-olive");

let selectPara = document.getElementById("first-paragraph");
selectPara.classList.remove("bg-lime", "gray");
selectPara.classList.add("aqua")

let selectosClass = document.querySelector(".bg-silver");
selectosClass.classList.add("bg-teal");
selectosClass.classList.remove("bg-silver");

let selectBlock = document.querySelector("blockquote");
selectBlock.classList.add("bg-white");


// EXERCICE 2 : Selecteurs CSS
let table = document.querySelector("#my-table");
table.classList.add("bg-purple");

let paracontain = document.querySelectorAll(".container > p");

for (let i = 0 ; i < paracontain.length; i++) {
    let paracontainIndex = paracontain[i];
    paracontainIndex.classList.add("shadow");
}

// EXERCICE 3
let pre = document.querySelectorAll("pre");
for (let i = 0 ; i < pre.length; i++) {
    let prei = pre[i];
    prei.style.color = "blue";
    prei.style.backgroundColor = "yellow";
    prei.style.borderTop = "3px solid red";
    prei.style.borderBottom = "3px solid red";
}

let selectH3 = document.querySelector("h3");
selectH3.innerHTML = "<em>Itelic title ! yeah !</em>";

let selectH2 = document.querySelector("h2");
selectH3.innerHTML = "<strong>HTML doens't work !</strong>";


// EXERCICE 4 : Création d'éléments
let elementSelectionner = document.querySelector("ul");
let creer = document.createElement("li");
elementSelectionner.appendChild(creer);
creer.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
let selectLink = document.querySelector("li > a:link");
selectLink.style.color = "red";

// EXERCICE 4 : Création et suppression de plusieurs éléments


let olSelecteur = document.querySelector("ol");

while (olSelecteur.firstChild) {
    olSelecteur.removeChild(olSelecteur.firstChild);
}

let tableauA = ["Silent Teacher","Code Monkey", "CodeCombat"];

for (let i = 0; i < tableauA.length; i++) {
    const element = tableauA[i];
    let olSelecteur = document.querySelector("ol");
    let creer2 = document.createElement("li");
    olSelecteur.appendChild(creer2);
    creer2.innerHTML = element;
    
}


