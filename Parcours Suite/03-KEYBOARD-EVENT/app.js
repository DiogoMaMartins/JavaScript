// Faire changer de couleur de fond a cette DIVà chaque fois qu'on appuie sur une numéro de 0 à 9 sur le clavier
let character = document.getElementById("character");
addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 96:
            character.style.backgroundColor = "blue";
            break;
        case 97:
            character.style.backgroundColor = "gray";
            break;
        case 98:
            character.style.backgroundColor = "yellow";
            break;
        case 99:
            character.style.backgroundColor = "green";
            break;
        case 100:
            character.style.backgroundColor = "orange";
            break;
        case 101:
            character.style.backgroundColor = "purple";
            break;
        case 102:
            character.style.backgroundColor = "cyan";
            break;
        case 103:
            character.style.backgroundColor = "Violet";
            break;
        case 104:
            character.style.backgroundColor = "Orchid";
            break;
        case 105:
            character.style.backgroundColor = "Fuchsia";
            break;
        default:
            break;
    }
});

// let up = document.getElementById("up");
// let down = document.getElementById("down");
// let right = document.getElementById("right");
// let left = document.getElementById("left");
// addEventListener("keydown", function (event) {
//     switch (event.keyCode) {

//         case 37:
//             left.classList.add('highlight');
//             break;

//         case 38:
//             up.classList.add('highlight');
//             break;

//         case 39:
//             right.classList.add('highlight');
//             break;

//         case 40:
//             down.classList.add('highlight');
//             break;
//     }
// })

// addEventListener("keyup", function (event) {
//     switch (event.keyCode) {

//         case 37:
//             left.classList.remove('highlight');
//             break;

//         case 38:
//             up.classList.remove('highlight');
//             break;

//         case 39:
//             right.classList.remove('highlight');
//             break;

//         case 40:
//             down.classList.remove('highlight');
//             break;
//     }
// })
