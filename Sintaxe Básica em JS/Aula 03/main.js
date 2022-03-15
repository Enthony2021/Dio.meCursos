//vetores ou arrays

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array3']];

array.forEach( (valor, index) => console.log(valor, index) );

array.push(2);
console.log(array);

array.pop();
array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift('New Item');
console.log(array);

console.log(array.indexOf(true));

// console.log(array.splice(0,2));
// console.log(array);

let novoArray = array.slice(0,2);
console.log(novoArray);
console.log(array);

let objeto = {
    string: 'string', 
    numero: 2, 
    booleano: false, 
    array: ['flexa'], 
    objetointerno: objetoINterno = {propri: 'valor'}
};

const arrayinterno = objeto.array;
console.log(arrayinterno);