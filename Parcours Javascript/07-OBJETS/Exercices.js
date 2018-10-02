console.log("______________________");
console.log("Exercices : Objets");
console.log("______________________");

console.log("------------------------");
console.log("Exercice 1 : PNJ (Personnage non-joueur)");
console.log("------------------------");

let character = {
    name: "Seven",
    age: 25,
    items_to_give: [],
    giveItem: function () {
        let itemlist = ["Sword", "Bow", "Arrow", "Shield"];
        let item_random = itemlist[Math.floor(Math.random() * itemlist.length)];
        character.items_to_give.push(item_random);
    }

}
for (let key in character) {
    console.log(character[key]);

}

character.giveItem();

console.log("------------------------");
console.log("Exercice 2 : Shop");
console.log("------------------------");



let sword = {
    title: "Epee",
    physic: 150,
    magic: 1,
    minLevel: 10,
    available: true
}

let bow = {
    title: "Arc",
    physic: 12,
    magic: 1,
    minLevel: 7,
    available: false
}

let staff = {
    title: "Baton",
    physic: 1,
    magic: 150,
    minLevel: 1,
    available: true
}

let arr = [sword, bow, staff];

function afficher_tout() {
    for (let key in arr) {
        console.log(arr[key])
    }
}

function is_available() {
    for (let key in arr) {
        if (arr[key].available == true) {
            console.log(arr[key].title);
        } else {
        }
    }
}

function afficher_level10() {
    for (let key in arr) {
        if (arr[key].minLevel >= 10) {
            console.log(arr[key].title);
        } else {
        }
    }
}
afficher_level10();
afficher_tout();
is_available();

console.log("______________________");
console.log("Exercices : BONUS");
console.log("______________________");

console.log("------------------------");
console.log("Exercice : Adversaire");
console.log("------------------------");

class Arme {
    constructor(name, minLevel, minDammage) {
        this.name = name;
        this.minLevel = minLevel
        this.minDammage = minDammage;
    }

}

class Pnj {
    constructor(name, level, life) {
        this.name = name;
        this.level = level;
        this.life = life;
        this.weapon = {
            name: "",
            dammage: 2
        };
    }

    functionRecievedammage(calculDommage) {
        this.life -= calculDommage;
        console.log("il reste " + this.life + " de vie a " + this.name);
    }

    fonctionAttack(skelette) {
        let calculDommage = this.level * blunt.minDammage;
        console.log(this.name + " attaque " + skelette.name + " avec " + this.weapon.name + " et lui inflige " + calculDommage);
        skelette.functionRecievedammage(calculDommage);
    }




}

let perso = new Pnj("iSevenBe", 5, 1);
let blunt = new Arme("blunt", 10, 25);
perso.weapon.name = blunt.name;


let ennemy = new Pnj("Skeleton", 2, 10000);
ennemy.weapon.name = "Sword";
ennemy.weapon.dammage = 10;

// let ennemy2 = new Pnj("Blah", 2, 100);
// ennemy2.weapon.name = "Sword";
// ennemy2.weapon.dammage = 100;

perso.fonctionAttack(ennemy);