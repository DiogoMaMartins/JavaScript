
class Arme {
    constructor(weaponName, minLevel, minDammage, maxUse) {
        this.weaponName = weaponName;
        this.minLevel = minLevel;
        this.minDammage = minDammage;
        this.maxUse = maxUse;
    }

    maxUsechecker (){
        // let charge;
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

    levelChecker (){
       // Recuperer le nom de l'arme ici
        if (Pnj.level == this.minLevel){

            console.log("Vous utilisez " + this.weaponName);
        } else {
            console.log("vous n'avez pas le niveau pour utilister " + this.weaponName);
        }
    }

}

class Pnj {

    constructor(name, level, life, weapon) {

        this.name = name;
        this.level = level;
        this.life = life;
        this.weapon = Arme;

    }

    functionRecievedammage(calculDommage) {
        this.life -= calculDommage;
        console.log("il reste " + this.life + " de vie a " + this.name);
    }

    fonctionAttack(ennemyName, nameOfweapon) {
        // this.weapon = Arme;
        levelChecker(nameOfweapon);

        let calculDommage = this.level * blunt.minDammage;
        console.log(this.name + " attaque " + ennemyName.name + " avec " + blunt.weaponName + " et lui inflige " + calculDommage);
        ennemyName.functionRecievedammage(calculDommage);
        // Arme.maxUsechecker();

    }
}
let blunt = new Arme("blunt", 10, 25, 1);
let perso = new Pnj("iSevenBe", 10, 1, blunt);
console.dir(perso)
let emptyWeapon = new Arme()


let ennemy = new Pnj("Skeleton", 2, 10000);
// ennemy.weapon.name = "Sword";
// ennemy.weapon.dammage = 10;
perso.fonctionAttack(ennemy);