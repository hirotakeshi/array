function invertirNumero(numero) {
    var numeroString = numero.toString();
    var numeroInvertidoString = numeroString.split('').reverse().join('');
    var numeroInvertido = parseInt(numeroInvertidoString);
    return numeroInvertido;
}
var x = 32443;
console.log(invertirNumero(x)); 