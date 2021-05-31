let calculadora = {
    sumar: function (numberA, numberB){
        return numberA + numberB},
    restar: function (numberA, numberB){
        return numberA - numberB},
    dividir: function (numberA, numberB){
        if (numberB == 0) {
            return "Imposible dividir por 0"
        } else {
            return numberA / numberB};
        },
    multiplicar:  function (numberA, numberB){
        return numberA * numberB},
}

module.exports = calculadora