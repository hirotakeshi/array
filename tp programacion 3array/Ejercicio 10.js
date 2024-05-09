function convertirPrimeraLetraMayuscula(cadena) {
    
    var palabras = cadena.split(" ");
    
    
    for (var i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    
  
    var cadenaConPrimeraMayuscula = palabras.join(" ");
    
    return cadenaConPrimeraMayuscula;
}


var x = "the god of war";
var cadenaConPrimeraMayuscula = convertirPrimeraLetraMayuscula(x);
console.log(cadenaConPrimeraMayuscula); 