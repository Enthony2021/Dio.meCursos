function arrayModificado(array) {
    if(array.length === 0) return -1;

    for(let i=0; i<array.length; i++) {
        if( (array[i] !== 0) && (array[i] % 2 === 0) ) {
            array[i] = 0;
        }
    }
    return array;
}

let arrayComPares = [1, 3, 4, 6, 80, 33, 23, 90];

console.log(arrayModificado(arrayComPares));