console.log("______________________");
console.log("Exercices : Logique");
console.log("______________________");

console.log("------------------------");
console.log("Exercice 1 : Langues");
console.log("------------------------");

var langue = "fr";
var message = "";

if (langue == "fr"){
    message = "Bonjour tout le monde !";
} else if (langue == "es"){
    message = "Hola Mundo";
} else {
    message = "Hellow World !"
}
console.log(message);

console.log("------------------------");
console.log("Exercice 2 : Affichage des scores");
console.log("------------------------");

var score = 10;
var rank = "";
if (score >= 90){
    rank = "A";
} else if (score < 90){
    rank = "B";
} else {
    rank = "undefined";
}
if (score <= 50){
    rank = "C";
}
console.log(rank);

console.log("------------------------");
console.log("Exercice 3 : Mettre au pluriel");
console.log("------------------------");

var singulier = "chat";
var nb_chat = 1;
var result_pluriel = "";
if (nb_chat <= 1) {
    result_pluriel = "Je possède " + nb_chat + " chat"; 
} else {
    result_pluriel = "Je possède " + nb_chat + " chats"; 
}
console.log(result_pluriel);







