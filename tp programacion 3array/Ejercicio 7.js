function unirColores(array) {
    
    var coloresEspañol = array.map(function(color) {
        switch(color) {
            case "Red":
                return "Rojo";
            case "Green":
                return "Verde";
            case "White":
                return "Blanco";
            case "Black":
                return "Negro";
            default:
                return color; 
        }
    });
    
    
    var cadena = coloresEspañol.join(", ");
    return cadena;
}


var myColor = ["Red", "Green", "White", "Black"];
var cadenaColores = unirColores(myColor);
console.log(cadenaColores); 