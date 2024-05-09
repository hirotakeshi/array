function palabraMasLarga(frase) {
    
    var palabras = frase.split(" ");
    
    
    var longitudMaxima = 0;
    var palabraMasLarga = "";
    
    
    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        
        palabra = palabra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        
       
        if (palabra.length > longitudMaxima) {
            palabraMasLarga = palabra;
            longitudMaxima = palabra.length;
        }
    }
    
    return palabraMasLarga;
}


var x = "Victor Agustin ";
var palabraLarga = palabraMasLarga(x);
console.log(palabraLarga); 