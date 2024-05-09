function imprimirNumeroMasBajo(array) {
    if (array.length === 0) {
        console.log("El array está vacío.");
        return;
    }
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    console.log("El número más alto en el array es: " + max);
 }
 
 
 var numeros = [10, 2, 28, 1, 45];
 imprimirNumeroMasBajo(numeros);
 