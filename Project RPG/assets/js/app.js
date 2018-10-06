let interval;

class Weapon {
    constructor(weaponName, minLevel, weaponDammage, maxUse, price) {
        this.weaponName = weaponName;
        this.minLevel = minLevel;
        this.weaponDammage = weaponDammage;
        this.maxUse = maxUse;
        this.price = price
    }

    maxUsechecker() {
        let charge;
        if (this.maxUse != 0) {
            if (this.maxUse > 1) {
                charge = " charges";
            } else {
                charge = " charge";
            }
            this.maxUse--;
            console.log("Vous avez perdu une charge " + "Il vous reste " + this.maxUse + charge);
        } else {
            console.log("Votre " + this.weaponName + " plus de charge");
        }
    }

    levelChecker(level) {

        if (level >= this.minLevel) {
            console.log("Vous utilisez un " + this.weaponName);
        } else {
            console.log("Vous n'avez pas le niveau pour utilister " + this.weaponName + " le niveau requis est du : " + this.minLevel);
        }
    }
}

class Pnj {

    constructor(name, level, life, weapon, xppoint, alive, mygold) {
        this.name = name;
        this.level = level;
        this.life = life;
        this.weapon = weapon;
        this.xppoint = xppoint;
        this.alive = alive;
        this.mygold = mygold;
    }

    fonctionRecievedammageEnnemy(calculDommage, mainCharacter) {
        this.life -= calculDommage;
        if (this.life < 0) {
            this.alive = false;
            this.life = 0;
            mainCharacter.fonctionCalculxp();
            isAlive = false;
            clearInterval(interval);
            let fight = document.querySelector("#fight");
            let fightON = document.querySelector("#fightON");
            fight.style.visibility = "visible";
            fightON.style.visibility = "hidden";

        }
    }

    fonctionRecievedammageMain(calculEnnemyDommage) {
        this.life -= calculEnnemyDommage;
        if (this.life < 0) {
            this.life = 0;
            this.alive = false;
            console.log("Your are dead");
            clearInterval(interval);
            let fight = document.querySelector("#fight");
            let fightON = document.querySelector("#fightON");
            fight.style.visibility = "visible";
            fightON.style.visibility = "hidden";
        }
    }

    fonctionMainAttack(ennemyName, mainCharacter) {
        let calculDommage = this.level * this.weapon.weaponDammage;
        ennemyName.fonctionRecievedammageEnnemy(calculDommage, mainCharacter);
    }

    fonctionEnnemyAttack(mainCharacter) {
        
        let calculDommage = this.level * this.weapon.weaponDammage;
        mainCharacter.fonctionRecievedammageMain(calculDommage, mainCharacter, interval);
        mainCharacter.fonctionAfficherStat(this);
    }

    fonctionCalculxp() {
        let gainXP = Math.round(Math.random() * 1000) + 1;
        this.xppoint += gainXP
        console.log("Vous avez obtenu " + gainXP + " vous avez un total de " + this.xppoint + " XP");
        this.fonctionLevelUp();
    }

    fonctionLevelUp() {
        let levelingCalcul = this.level * 1000;
        if (this.xppoint >= 1000) {
            this.xppoint -= 1000;
            this.level++;
            console.log("Vous avez monter de niveau !");
            this.fonctionAfficherStat(ennemyName);
        } else {

        }
    }

    fonctionAfficherStat(ennemyName) {
        //Character
        let characterCalculDammage = this.weapon.weaponDammage * this.level;
        let characterName = document.querySelector("#name");
        characterName.innerHTML = "Name : " + this.name;
        let characterWeapon = document.querySelector("#weapon");
        characterWeapon.innerHTML = "Weapon : " + this.weapon.weaponName;
        let characterLevel = document.querySelector("#level");
        characterLevel.innerHTML = "Level : " + this.level;
        let characterLife = document.querySelector("#life");
        characterLife.innerHTML = "Life : " + this.life;
        let characterCharge = document.querySelector("#charge");
        characterCharge.innerHTML = "Charge : " + this.weapon.maxUse;
        let characterDammage = document.querySelector("#dammage");
        characterDammage.innerHTML = "Dammage : " + characterCalculDammage;

        //Ennemy 
        let ennemyNames = document.querySelector("#ennemyName");
        ennemyNames.innerHTML = "Name : " + ennemyName.name;
        let ennemyLevel = document.querySelector("#ennemyLevel");
        ennemyLevel.innerHTML = "Level : " + ennemyName.level;
        let ennemyLife = document.querySelector("#ennemyLife");
        ennemyLife.innerHTML = "Life : " + ennemyName.life;
        let ennemyDammage = document.querySelector("#ennemyDammage");
        ennemyDammage.innerHTML = "Dammage : " + ennemyName.weapon.weaponDammage;

        // XP Affichage XP
        let xp = document.querySelector(".xpPercent");
        let myXPtoPercent = this.xppoint / 10;
        xp.style.width = myXPtoPercent + "%";
        xp.innerHTML = (this.xppoint / 10) + "%";
        let characterXP = document.querySelector("#yourXP");
        characterXP.innerHTML = "Your XP : " + this.xppoint + "/1000";


    }
}

let randomInterval = Math.floor(Math.random() * 300 + 800)
let fight = document.querySelector("#fight");
let fightON = document.querySelector("#fightON");
let blueSquare = document.querySelector(".attacker");
let redSquare = document.querySelector(".ennemy");


function loadShop() {
    
    let objectInStock1 = document.querySelector("#objectInStock1");
    objectInStock1.innerHTML = "Weapon Name : " + RandomizeObject1.weaponName + " <br> Price : " + RandomizeObject1.price + 
    " <button onclick='fonctionBuyWeapon(RandomizeObject1)'>Buy</button>" + "<br> Weapon Dammage :" + RandomizeObject1.weaponDammage
    + "<br> Charge : " + RandomizeObject1.maxUse + "<br><button onclick='reloadShop()';>Reload</button>";
    perso.fonctionAfficherStat(ennemy);
    
}

function reloadShop(){
    RandomizeObject1 = weaponNameList[Math.floor(Math.random() * weaponNameList.length)];
    perso.fonctionAfficherStat(ennemy);
    loadShop();
}

function fonctionBuyWeapon(requireWeapon) {
    if (perso.mygold >= requireWeapon.price) {
        perso.weapon = requireWeapon;
        perso.fonctionAfficherStat(ennemy);
        reloadShop();
        loadShop();
    } else {
        alert("Not Money");
    }

}

function startGame() {
    let characterAlive = perso.alive;
    let ennemyAlive = ennemy.alive;
    let weaponCharge = perso.weapon.maxUse;
    let weaponLevel = perso.weapon.minLevel;
    let characterLevel = perso.level;
    let level = perso.level;
    if(ennemyAlive != false){

    
    if (characterAlive != false) {
        if (weaponCharge != 0) {
            if (characterLevel > weaponLevel) {

                blueSquare.classList.add("blueAnimation");
                redSquare.classList.add("redAnimation");
                ennemyAttack();
                fight.style.visibility = "hidden";
                fightON.style.visibility = "visible";

                perso.weapon.levelChecker(level);
                perso.fonctionAfficherStat(ennemy);
            } else {
            }
        } else {
            console.log("Your Weapon is empty !")
        }
    } else {
        console.log("You are dead !");
    }
}
}
let isAlive = true;
function characterAttack(isAlive) {
    if (ennemy.alive == true) {
        perso.fonctionMainAttack(ennemy, perso);
        perso.weapon.maxUsechecker();
        perso.fonctionAfficherStat(ennemy);

        // perso.fonctionAliveChecker();
    }

    if (isAlive == false) {
        console.log(ennemy.name + " est mort !");
        perso.fonctionAfficherStat(ennemy);
        perso.fonctionCalculxp(ennemy);
        isAlive = true;
    }

}

function ennemyAttack() {
    interval = setInterval("ennemy.fonctionEnnemyAttack(perso)", randomInterval);

}


let ennemyWeapon = new Weapon("EnnemyWeapon", 0 , 50, 0, 0)
let blade = new Weapon("Blade", Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10000) + 1);
let blunt = new Weapon("Blunt", Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10000) + 1);
let katana = new Weapon("Katanna", Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10000) + 1);
let sword = new Weapon("Sword", Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10000) + 1);
let axe = new Weapon("Axe", Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10000) + 1);
let weaponNameList = [blade, blunt, katana, sword, axe];
let RandomizeObject1 = weaponNameList[Math.floor(Math.random() * weaponNameList.length)];
let ennemy = new Pnj("Skeleton", 2, 80, ennemyWeapon, 0, true);
let perso = new Pnj("Pseudo_Perso", 10, 5000, sword, 526, true, 50000);