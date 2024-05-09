function imprimirValorEnIndice(array, indice) {
   
    if (indice >= 1 && indice <= array.length) {
        
        console.log(array[indice - 1]);
    } else {
        console.log("El índice está fuera de los límites del array.");
    }
}


var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 7;
imprimirValorEnIndice(array, index); 