const resultado = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

function soma(num1, num2){
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

const resul = resultado(soma, 1, 2);

console.log(resul);

