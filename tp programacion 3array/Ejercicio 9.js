function ordenarCadenaAlfabeticamente(cadena) {
    
    var caracteresFiltrados = cadena.replace(/[^a-zA-Z]/g, '');
    
    
    var caracteresOrdenados = caracteresFiltrados.split('').sort();
    
    
    var cadenaOrdenada = caracteresOrdenados.join('');
    
    return cadenaOrdenada;
}


var x = 'agustin';
var cadenaOrdenada = ordenarCadenaAlfabeticamente(x);
console.log(cadenaOrdenada); 