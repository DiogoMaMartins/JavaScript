
function reste(premier, deuxieme) {
    premier = document.getElementById("premier_nombre").value;
    deuxieme = document.getElementById("deuxieme_nombre").value;
    return premier % deuxieme;
    

}

function validate(){
    console.log(reste());

}