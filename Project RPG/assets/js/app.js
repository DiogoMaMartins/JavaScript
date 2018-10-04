class Arme {
    constructor(weaponName, minLevel, minDammage, maxUse) {
        this.weaponName = weaponName;
        this.minLevel = minLevel;
        this.minDammage = minDammage;
        this.maxUse = maxUse;
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

    constructor(name, level, life, weapon, xppoint) {
        this.name = name;
        this.level = level;
        this.life = life;
        this.weapon = weapon;
        this.xppoint = xppoint;
    }

    fonctionRecievedammageEnnemy(calculDommage) {
        // let calculDommage = this.level * this.weapon.minDammage;
        this.life -= calculDommage;

        console.log("life: ", this.life)

    }

    fonctionRecievedammageMain(calculEnnemyDommage, ennemyName) {
        this.life -= calculEnnemyDommage;
        if (this.life == 0) {
            console.log("Your are dead");
            clearInterval(interval);
        } else {
            
        }
        console.log("life: ", this.life)
    }

    fonctionMainAttack(ennemyName, mainCharacter) {
        let calculDommage = this.level * this.weapon.minDammage;
        ennemyName.fonctionRecievedammageEnnemy(calculDommage, mainCharacter);
    }

    fonctionEnnemyAttack(mainCharacter, ennemyName) {
        let calculDommage = this.level * this.weapon.minDammage;
        mainCharacter.fonctionRecievedammageMain(calculDommage, mainCharacter);
        mainCharacter.fonctionAfficherStat(this);


    }




    fonctionCalculxp(ennemyName) {
        if (ennemyName.life == 0) {
            let gainXP = Math.round(Math.random() * 1000) + 1;
            this.xppoint += gainXP
            console.log("Vous avez obtenu " + gainXP + " vous avez un total de " + this.xppoint + " XP");
            this.fonctionLevelUp();
            this.fonctionAfficherStat(ennemyName);

        } else {
        }


    }
    fonctionLevelUp() {
        if (this.xppoint >= 1000) {
            this.xppoint -= 1000;
            this.level++;
            console.log("Vous avez monter de niveau !");
            this.fonctionAfficherStat(ennemyName);
        } else {

        }
    }
    fonctionAfficherStat(ennemyName) {

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

        //Ennemy 
        let ennemyNames = document.querySelector("#ennemyName");
        ennemyNames.innerHTML = "Name : " + ennemyName.name;

        let ennemyLevel = document.querySelector("#ennemyLevel");
        ennemyLevel.innerHTML = "Level : " + ennemyName.level;
        let ennemyLife = document.querySelector("#ennemyLife");
        ennemyLife.innerHTML = "Life : " + ennemyName.life;

        // XP Affichage XP
        let xp = document.querySelector(".xpPercent");
        let myXPtoPercent = this.xppoint / 10;
        xp.style.width = myXPtoPercent + "%";
        xp.innerHTML = (this.xppoint / 10) + "%";
        let characterXP = document.querySelector("#yourXP");
        characterXP.innerHTML = "Your XP : " + this.xppoint + "/1000";


    }
}

let interval;
let randomInterval = Math.floor(Math.random() * 300 + 800)

function startGame() {
    let characterLife = perso.life;
    let weaponCharge = perso.weapon.maxUse;
    let weaponLevel = perso.weapon.minLevel;
    let characterLevel = perso.level;
    let fight = document.querySelector("#fight");
    let fightON = document.querySelector("#fightON");
    let blueSquare = document.querySelector(".attacker");
    let redSquare = document.querySelector(".ennemy");

    if (characterLife != 0) {
        if (weaponCharge != 0) {
            if (characterLevel > weaponLevel) {
                blueSquare.classList.add("blueAnimation");
                redSquare.classList.add("redAnimation");
                ennemyAttack();
                fight.style.visibility = "hidden";
                fightON.style.visibility = "visible";
                let level = perso.level;
                perso.weapon.levelChecker(level);

                console.log("life", characterLife);

                console.log("weapon charge", weaponCharge);

                perso.fonctionAfficherStat(ennemy);
            } else {
            }
        } else {
            console.log("Your Weapon is empty !")
        }
    } else {
        console.log("You are dead !")
    }
}

function characterAttack() {
    let ennemyLife = ennemy.life;

    if (ennemyLife > 0) {
        perso.fonctionMainAttack(ennemy, perso);
        perso.weapon.maxUsechecker();
    } else {
        console.log(ennemy.name + " est mort !");
        perso.fonctionCalculxp(ennemy);
        ennemy.life = -1;
    }


}

function ennemyAttack() {
    interval = setInterval("ennemy.fonctionEnnemyAttack(perso)", randomInterval);

}

let sword = new Arme("Sword", 5, 25, 150);
let blunt = new Arme("blunt", 10, 15, 10);

let ennemy = new Pnj("Skeleton", 2, 800, blunt);
let perso = new Pnj("Pseudo_Perso", 10, 50, sword, 526);
