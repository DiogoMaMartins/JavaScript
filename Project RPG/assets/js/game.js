let randomInterval = Math.floor(Math.random() * 300 + 800)



function loadShop() {

    let objectInStock1 = document.querySelector("#objectInStock1");
    objectInStock1.innerHTML = "<img src ='" + randomizeObject1.icon + "' width ='50px' hight='50px'><br>" + "Weapon Name : " + randomizeObject1.weaponName + " <br> Price : " + randomizeObject1.price +
        "<br> Weapon Dammage :" + randomizeObject1.weaponDammage
        + "<br> Charge : " + randomizeObject1.maxUse + "<br><button onclick='reloadShop()';>Reload</button><br><button onclick='fonctionBuyWeapon(randomizeObject1)'>Buy</button>";
    perso.fonctionAfficherStat(ennemy);

}


function reloadShop() {
    randomizeObject1 = new Weapon("Sword", Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 100) + 10, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 10000) + 1, SwordIcon);
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
        alert("No Money");
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
                    ennemy = new Pnj("Skeleton", 2, 50000, ennemyWeapon, 0, true);
                    let blueSquare = document.querySelector(".attacker");
                    let redSquare = document.querySelector(".ennemy");
                    blueSquare.classList.add("blueAnimation");
                    redSquare.classList.add("redAnimation");
                    

                    ennemyAttack();
                    let fight = document.querySelector("#fight");
                    let fightON = document.querySelector("#fightON");
                    fight.style.visibility = "hidden";
                    fightON.style.visibility = "visible";

                    let lvlUP = document.querySelector(".characterIcon");
                    lvlUP.classList.remove("levelUPEffect");

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
    } else {
        
    }
}

let isAlive = true;
function characterAttack(isAlive) {
    if (ennemy.alive == true) {
        
        animateBattle();
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

function animateBattle (){
        let blue = document.querySelector('.blueAnimation');
        blue.style.animation = 'none';
        blue.offsetHeight; /* trigger reflow */
        blue.style.animation = null; 

        //
}

function animateEnnemyAttack(){
    let red = document.querySelector('.redAnimation');
        red.style.animation = 'none';
        red.offsetHeight; /* trigger reflow */
        red.style.animation = null; 
}

// document.documentElement.onclick = function () {
//     var joe = document.createElement('div');
//     joe.innerHTML = 'yo!';
//     joe.className = 'joe';
//     document.body.appendChild(joe);
// }


function ennemyAttack() {
    interval = setInterval("ennemy.fonctionEnnemyAttack(perso), animateEnnemyAttack()", randomInterval);

}