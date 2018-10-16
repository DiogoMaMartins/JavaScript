# JavaScript
var everyPossiblePair = function(array) {
    var novaArray=array;
    let ne1=new Array;
    let ne2=new Array;
    for (x = novaArray.length -1; x >= 1;x--){
    for(i=0;i<novaArray.length -1;i++){ 
          let ne3 = new Array;
        if (novaArray[i]!== novaArray[x]) {
        ne3.push(novaArray[i],novaArray[x]);
        ne1.push(ne3);
    }
    ne2=ne1.map(elem => elem.sort());  
}
