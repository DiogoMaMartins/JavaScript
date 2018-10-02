

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
            if (this.maxUse >= 1){
                charge = " charges";
            } else {
                charge = " charge";
            }
            this.maxUse--;
            console.log("Vous avez perdu une charge");
            console.log("Il vous reste " + this.maxUse + charge);
        } else {
            
            console.log("Votre " + this.weaponName + " plus de charge");
            
        }
    }

    levelChecker (level){

        if (level == this.minLevel){
        
            console.log("Vous utilisez " + this.weaponName);
        } else {
            console.log("vous n'avez pas le niveau pour utilister " + this.weaponName + " le niveau requis est du : " + this.minLevel);
        }
    }

}

class Pnj {
    
    constructor(name, level, life, weapon) {
        
        this.name = name;
        this.level = level;
        this.life = life;
        this.weapon = weapon;
        
    }

    fonctionRecievedammage(calculDommage) {
        this.life -= calculDommage;
        console.log("il reste " + this.life + " de vie a " + this.name);
    }

    fonctionAttack(ennemyName) {

        let level = this.level;
        this.weapon.levelChecker(level);
        let calculDommage = this.level * this.weapon.minDammage;
        console.log(this.name + " attaque " + ennemyName.name + " avec " + this.weapon.weaponName + " et lui inflige " + calculDommage);
        ennemyName.fonctionRecievedammage(calculDommage);
        this.weapon.maxUsechecker();
        
    }
}


let blunt = new Arme("blunt", 10, 25, 50);
let ennemy = new Pnj("Skeleton", 2, 10000);
let perso = new Pnj("iSevenBe", 10, 1, blunt);

console.dir(perso)

perso.fonctionAttack(ennemy);