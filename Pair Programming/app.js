let array = [];
let array2 = [];
let word = prompt("Entrez un mot : ").toUpperCase();
array = word.split("");

let keep = true;
let faux = 0;
// console.log(a);
function guessLetter(lettre) {
    let letterFound = false;
    for (let index = 0; index < array.length; index++) {
        if (lettre == array[index]) {
            array2[index] = lettre.toUpperCase();
            letterFound = true;
            console.log(array2);
            

        }
    }
    if (letterFound == false) {
        faux++;
        console.log(faux);
    }
}

while (keep == true) {
    lettre = prompt("Entrez une lettre").toUpperCase();
    guessLetter(lettre);
    if (array.toString() == array2.toString()) {
        keep = false;
    }
}


// Juste Prix
// let message = console.log("");

        // let mini = 20;
        // let max = 80;
        // let tryNb = 0;
        // let keepPlaying = true;
        // let theRandom = randomNb(max, mini);
        // let enter = prompt("Entrez un chiffre");
        // let enterToInteger = parseInt(enter);
        // function randomNb(max, mini) {
        //      return  Math.round(Math.random() * max) + mini;
        // }

        // function checkEnter() {
        //     if (enterToInteger === theRandom) {
        //         tryNb++;
        //         message = console.log("C'est juste tu as trouvé en " + tryNb);
        //     } else if (enterToInteger < theRandom) {
        //         tryNb++;
        //         message = console.log("En dessou ! " + tryNb);
        //     } else if (enterToInteger > theRandom) {
        //         message = console.log("Au Dessu ! " + tryNb);
        //     } else {

        //     }

        // }

        // while (keepPlaying == true) {
        //     enter = prompt("Entrez un chiffre");
        //     enterToInteger = parseInt(enter);
        //     checkEnter();
        //     // console.log(randomize)
        //     if (enterToInteger === randomNb()) {
        //         keepPlaying = false;
        //     }
        // }