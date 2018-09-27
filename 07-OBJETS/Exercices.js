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
let objet_a_vendre = ["Sword", "Bow", "Arrow", "Shield"];


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

let character2 = {
    name : "",
    level : 0,
    life : 0,
    weapon : weapon = {
        name : "",
        dammage : 0
        
    },
    attack : function (){

    },
    recieveDamage : function (){

    }
}

let opponentCharacter = {
    name : "Monstre",
    level : 125,
    life : 50000,
    weapon : Sword = {
        name : "Sword",
        dammage : 25
        
    },
    attack : function (){

    },
    recieveDamage : function (){

    }
}

let Bow = {
    name : "Bow",
    dammage : 25
    
}

let mainCharacter = {
    name : "iSevenBe",
    level : 125,
    life : 50000,
    weapon : Bow,
    attack : function (){
        let calcul_dammage = mainCharacter.level * mainCharacter.weapon.dammage;
        let calcul_vie = opponentCharacter.life - calcul_dammage;
        console.log(mainCharacter.name + " Attaque " + opponentCharacter.name)
        console.log("Avec l'arme : " + mainCharacter.weapon.name);
        
        console.log("Et lui inflige : " + calcul_dammage);
        console.log(opponentCharacter.name + " a maintenant " + calcul_vie + " de vie");
    },
    recieveDamage : function (){

    }
}

mainCharacter.attack();


