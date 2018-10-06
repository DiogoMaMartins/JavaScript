class Moule {
    constructor(age, prenom, nom){
        this.age = age;
        this.prenom = prenom;
        this.nom = nom;
    }

    age(){
        this.age = 12;
        consol.log(this.age)
    }
}

console.dir(Moule)