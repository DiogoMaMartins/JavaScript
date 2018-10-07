let randomInterval = Math.floor(Math.random() * 300 + 800)



function loadShop() {

    let objectInStock1 = document.querySelector("#objectInStock1");
    objectInStock1.innerHTML = "<img src ='" + RandomizeObject1.icon + "' width ='50px' hight='50px'><br>" + "Weapon Name : " + RandomizeObject1.weaponName + " <br> Price : " + RandomizeObject1.price +
        "<br> Weapon Dammage :" + RandomizeObject1.weaponDammage
        + "<br> Charge : " + RandomizeObject1.maxUse + "<br><button onclick='reloadShop()';>Reload</button><br><button onclick='fonctionBuyWeapon(RandomizeObject1)'>Buy</button>";
    perso.fonctionAfficherStat(ennemy);

}


function reloadShop() {
    RandomizeObject1 = weaponNameList[Math.floor(Math.random() * weaponNameList.length)];
    perso.fonctionAfficherStat(ennemy);
    loadShop();
}

function fonctionBuyWeapon(requireWeapon) {
    if (perso.mygold >= requireWeapon.price) {
        perso.mygold -= requireWeapon.price;
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
    if (ennemyAlive != false) {
        if (characterAlive != false) {
            if (weaponCharge != 0) {
                if (characterLevel > weaponLevel) {
                    let blueSquare = document.querySelector(".attacker");
                    let redSquare = document.querySelector(".ennemy");
                    let fight = document.querySelector("#fight");
                    let fightON = document.querySelector("#fightON");
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