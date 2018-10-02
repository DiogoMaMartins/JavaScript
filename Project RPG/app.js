

class Arme {
    constructor(weaponName, minLevel, minDammage, maxUse) {
        this.weaponName = weaponName;
        this.minLevel = minLevel;
        this.minDammage = minDammage;
        this.maxUse = maxUse;
    }

    maxUsechecker (){
        let charge;
        if (this.maxUse != 0){
            if (this.maxUse > 1){
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

    levelChecker (level){

        if (level >= this.minLevel){
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

    fonctionRecievedammage(calculDommage) {
        this.life -= calculDommage;
        console.log("il reste " + this.life + " de vie a " + this.name);
    }

    fonctionAttack(ennemyName) {

        if (this.weapon.maxUse != 0){
            if (ennemyName.life != 0){
                let level = this.level;
                this.weapon.levelChecker(level);
            
                let calculDommage = this.level * this.weapon.minDammage;
                console.log(this.name + " attaque " + ennemyName.name + " avec " + this.weapon.weaponName + " et lui inflige " + calculDommage);
                ennemyName.fonctionRecievedammage(calculDommage);
                this.weapon.maxUsechecker();
                
            } else {
                console.log(ennemyName.name + " est mort !");
                this.fonctionCalculxp(ennemyName);
            }
        } else {
            console.log("Vous n'avez plus de charge ! ");
        }
    }


    fonctionCalculxp(ennemyName){
        if (ennemyName.life == 0){
            let gainXP = Math.round(Math.random() * 1000) + 1;
            let totalXP = this.xppoint + gainXP;
            console.log("Vous avez obtenu " + gainXP + " vous avez un total de " + totalXP + " XP");
        } else {
            //Keep Farming
        }
    }
}

class Skills {
    constructor (id, name, power, manacost, requirelevel){
        this.skillID = id;
        this.name = name;
        this.power = power;
        this.manaCost = manacost;
        this.requireLevel = requirelevel;
    }
}

let sword = new Arme("Sword", 5, 25, 150);
let blunt = new Arme("blunt", 10, 25, 10);
let ennemy = new Pnj("Skeleton", 2, 2000);
let perso = new Pnj("iSevenBe", 10, 1, sword, 10);