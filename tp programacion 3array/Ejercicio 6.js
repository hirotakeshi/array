function imprimirRepetidos(array) {
    
    var frecuencia = {};
    
   
    for (var i = 0; i < array.length; i++) {
        var elemento = array[i];
        
        if (frecuencia[elemento]) {
            frecuencia[elemento]++;
        } else {
           
            frecuencia[elemento] = 1;
        }
    }
    
    
    for (var clave in frecuencia) {
        if (frecuencia[clave] > 1) {
            console.log(clave);
        }
    }
}


var array = [3,5,1,67,45,34,23,8,23,3,1,55,44,22,53,3,7,9,10,45,8];
imprimirRepetidos(array); 