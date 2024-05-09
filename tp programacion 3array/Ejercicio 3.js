function imprimirNumeroMasBajo(array) {
   if (array.length === 0) {
       console.log("El array está vacío.");
       return;
   }
   var min = array[0];
   for (var i = 1; i < array.length; i++) {
       if (array[i] < min) {
           min = array[i];
       }
   }
   console.log("El número más bajo en el array es: " + min);
}


var numeros = [10, 2, 28, 1, 45];
imprimirNumeroMasBajo(numeros);
 