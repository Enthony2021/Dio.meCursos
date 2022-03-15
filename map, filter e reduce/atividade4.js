const lista = [
    {
        name: 'Sabão em Pó',
        preco: 30
    },
    {
        name: 'Cereal',
        preco: 12
    },
    {
        name: 'Toalha',
        preco: 30
    }
]

const saldoDisponivel = 100;

function calculaSaldo(arr, saldo) {
    return arr.reduce((cont, item) =>cont - item.preco , saldo);
}

console.log(calculaSaldo(lista, saldoDisponivel));




// function somaNumeros(arr) {
//     return arr.reduce(function(prev, item) {
//         return prev + item;
//     }, 0);
// }

// const myArray = [1, 2];

// console.log(somaNumeros(myArray));


