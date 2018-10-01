console.log("______________________");
console.log("Exercices : Objets");
console.log("______________________");

console.log("------------------------");
console.log("Exercice 1 : PNJ (Personnage non-joueur)");
console.log("------------------------");

let character = {
    name : "Seven",
    age : 25,
    items_to_give : [],
    giveItem : function (){
        let itemlist = ["Sword", "Bow", "Arrow", "Shield"];
        let item_random = itemlist [Math.floor(Math.random()*itemlist.length)];
        character.items_to_give.push(item_random);
    }

}
for (let key in character){
    console.log(character[key]);
    
}

character.giveItem();

console.log("------------------------");
console.log("Exercice 2 : Shop");
console.log("------------------------");



let sword = {
    title : "Epee",
    physic : 150,
    magic : 1,
    minLevel : 10,
    available : true
}

let bow = {
    title : "Arc",
    physic : 12,
    magic : 1,
    minLevel : 7,
    available : false
}

let staff = {
    title : "Baton",
    physic : 1,
    magic : 150,
    minLevel : 1,
    available : true
}

let arr = [sword, bow, staff];

function afficher_tout(){
    for (let key in arr){
        console.log(arr[key])
    }    
}

function is_available (){
    for (let key in arr){
        if (arr[key].available == true){
            console.log(arr[key].title);
        } else {
        }
    }
}

function afficher_level10(){
    for (let key in arr){
        if (arr[key].minLevel >= 10){
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

class Character {
    constructor (name, level, life) {
        this.name = name;
        this.level = level;
        this.life = life;
        this.weapon = {
            name : "",
            dammage : 2
        }
    }
    attack(attacker){
        const dommage = this.weapon.dammage * this.level;
        console.log(this.name + " attaque " + attacker.name + " avec " + this.weapon.name + " et lui inflige : " + dommage);
    }

    recieveDammage (){
        const dommage = this.weapon.dammage * this.level;
        let lifeCalcul = this.life - dommage;
        console.log (this.name + " recois " + dommage + " il lui reste " + lifeCalcul);
    }

    
}

let perso = new Character("Flo", 5, 10000);
perso.weapon.name = "Axe";
perso.weapon.dammage = 10;

let ennemy = new Character("Skeleton", 2, 10000);
ennemy.weapon.name = "Sword";
ennemy.weapon.dammage = 10;

perso.attack(ennemy);
perso.recieveDammage(ennemy.life);