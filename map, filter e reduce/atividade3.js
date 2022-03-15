function impares(arr) {
    return arr.filter(item => item%2 !== 0);
}

function pares(arr) {
    return arr.filter(item => item%2 === 0);
}

const meuArray = [1, 23, 55, 67 ,30, 2, 4];

console.log(pares(meuArray));
console.log(impares(meuArray));