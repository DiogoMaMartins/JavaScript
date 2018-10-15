let interval;
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
            clearInterval(interval);
            let fight = document.querySelector("#fight");
            let fightON = document.querySelector("#fightON");
            fight.style.visibility = "visible";
            fightON.style.visibility = "hidden";
            ennemy = new Pnj("Skeleton", 2, 50000, ennemyWeapon, 0, true);

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
        let gainGold = Math.round(Math.random() * 1000) + 1;
        this.mygold += gainGold;
        let gainXP = Math.round(Math.random() * 1000) + 1;
        this.xppoint += gainXP
        this.fonctionLevelUp();
    }

    fonctionLevelUp() {
        if (this.xppoint >= 1000) {
            this.xppoint -= 1000;
            this.level++;
            let lvlUP = document.querySelector(".characterIcon");
            lvlUP.classList.add("levelUPEffect");
            // console.log("Vous avez monter de niveau !");
            this.fonctionAfficherStat(this);
        } else {

        }
    }

    fonctionAfficherStat(ennemyName) {
        //Character
        let characterCalculDammage = this.weapon.weaponDammage * this.level;
        // let characterName = document.querySelector("#name");
        // characterName.innerHTML = "Name : " + this.name;
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
        // let ennemyNames = document.querySelector("#ennemyName");
        // ennemyNames.innerHTML = "Name : " + ennemyName.name;
        // let ennemyLevel = document.querySelector("#ennemyLevel");
        // ennemyLevel.innerHTML = "Level : " + ennemyName.level;
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


let ennemy = new Pnj("Skeleton", 2, 50000, ennemyWeapon, 0, true);
let perso = new Pnj("Pseudo_Perso", 10, 5000, sword, 526, true, 50000);