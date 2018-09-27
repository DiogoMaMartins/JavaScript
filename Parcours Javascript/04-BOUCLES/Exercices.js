console.log("______________________");
console.log("Exercices : Boucles");
console.log("______________________");

console.log("------------------------");
console.log("Exercice 1 : Pair et impair");
console.log("------------------------");

var pair;
for (pair = 0; pair < 20; pair++){
    if (pair % 2){
        console.log(pair + " est impair"); 
    } else {
        console.log(pair + " est pair"); 
    } 
}

console.log("------------------------");
console.log("Exercice 2 : Multiplication Tables");
console.log("------------------------");

var multiplication;
for (multiplication = 0; multiplication < 10; multiplication++) {
    var table = 9;
    var result_table = multiplication * table;
    console.log(multiplication + " * " + table + " = " + result_table);
}

console.log("------------------------");
console.log("Exercice 3 : assigner des grades");
console.log("------------------------");

var grade_i;
var grade = "NoNe";
for (grade_i = 0; grade_i < 100; grade_i++){
    if (grade_i >= 90){
        grade = "A";
    } else if (grade_i >= 80){
        grade = "B";
    } else if (grade_i >= 70){
        grade = "C";
    } else if (grade_i >= 65){
        grade = "D";
    } else {
        grade = "F";
    }
    console.log("Pour " + grade_i + " points vous avez le grade " + grade);
}


console.log("------------------------");
console.log("Exercice 4 : pyramide");
console.log("------------------------");

var pyramide = "";
for (var pyramide_i = 0; pyramide_i < 5; pyramide_i++){
    console.log(pyramide += "*");
    
}