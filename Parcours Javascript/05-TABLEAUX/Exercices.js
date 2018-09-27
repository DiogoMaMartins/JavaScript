console.log("______________________");
console.log("Exercices : Tableaux");
console.log("______________________");

console.log("------------------------");
console.log("Exercice 1 : addition");
console.log("------------------------");

let numbers = ["1","2","3","4","5","6","7","8","9"];

for (let i = 0; i < numbers.length; i++){
    let count = numbers[i];
    console.log(count);
}

console.log("------------------------");
console.log("Exercice 2 : Vos meilleurs choix");
console.log("------------------------");

let acteur = ["Stalone", "Vin Diesel", "Bruce Lee"];
let position = ["Premier", "Deuxieme", "Troisieme"];

for (let i = 0; i < acteur.length; i++) {
    let liste = acteur[i];
    console.log('le numero ' + i + ' est ' + liste + '.');

    for (let e = 0; e < position.length; e++){

        let acteuretposition = position[e];
        console.log("le " + acteuretposition + " est " + liste + ".");
    }
    
}

console.log("------------------------");
console.log("Exercice 3 : clone");
console.log("------------------------");

let nintendo = ["Mario", "Luigi", "Peach"];
nintendo.push("Bowser");

for (let i = 0; i < nintendo.length; i++){
    let personnages = nintendo[i];
    console.log(personnages);
}
