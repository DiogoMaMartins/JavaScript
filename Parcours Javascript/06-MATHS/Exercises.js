console.log("______________________");
console.log("Exercice : Minimum et maximum");
console.log("______________________");

console.log("------------------------");
console.log("Exercice 1 : Math");
console.log("------------------------");

let minimal = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
let maximal = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
let egal = minimal + maximal;

console.log(egal);

console.log("------------------------");
console.log("Exercice 2 : Aléatoire 1");
console.log("------------------------");

let floatBateau = 10.4;
let voleBateau = Math.floor(floatBateau);
let couleBateau = Math.ceil(floatBateau);

// Je me suis poser la question de la concaténation si je devais utiliser la méthode "Sale" avec des espace et des "" vide
console.log(voleBateau + " " + couleBateau + " " + floatBateau);


// Ou Utiliser la méthode de conversion des int en STR
console.log(voleBateau.toString() + couleBateau.toString() + floatBateau.toString());

console.log("------------------------");
console.log("Exercice 3 : Aléatoire 2");
console.log("------------------------");

let random_var = Math.floor((Math.random() * 100) + 1);
let random_var2 = Math.random();
let random_var3 = Math.floor((Math.random() * 10) + 1);
console.log(random_var);

console.log("------------------------");
console.log("Exercice 4 : Aléatoire 3");
console.log("------------------------");

let random3 = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
let item = random3[Math.floor(Math.random()*random3.length)];

console.log(item);

