class Weapon {
    constructor(weaponName, minLevel, weaponDammage, maxUse, price, icon) {
        this.weaponName = weaponName;
        this.minLevel = minLevel;
        this.weaponDammage = weaponDammage;
        this.maxUse = maxUse;
        this.price = price;
        this.icon = icon;
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



let SwordIcon = "../sword.png";
let ennemyWeapon = new Weapon("EnnemyWeapon", 0 , 50, 0, 0)
let blade = new Weapon("Blade", Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10000) + 1, SwordIcon);
let blunt = new Weapon("Blunt", Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10000) + 1, SwordIcon);
let katana = new Weapon("Katanna", Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10000) + 1, SwordIcon);
let sword = new Weapon("Sword", Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10000) + 1, SwordIcon);
let axe = new Weapon("Axe", Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10000) + 1, SwordIcon);
let weaponNameList = [blade, blunt, katana, sword, axe];
let RandomizeObject1 = weaponNameList[Math.floor(Math.random() * weaponNameList.length)];