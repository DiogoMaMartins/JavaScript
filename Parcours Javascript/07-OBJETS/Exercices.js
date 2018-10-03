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

class Shop {
    constructor (title, physic, magic, minLevel, available){
        this.title = title;
        this.physic = physic;
        this.magic = magic;
        this.minLevel = minLevel;
        this.available = available;
    }
}

let sword = new Shop("Sword", 10,0,15,true);
let bow = new Shop("Bow", 10,0,15,false);
let staff = new Shop("Staff", 10,50,15,true);

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
