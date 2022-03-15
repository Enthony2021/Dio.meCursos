var array = [2, 3, 5, 6, 4, 8, 9, 12];

function returnEvenValues(array) {
    var evenNums = [];
    
    for (var i=0; i < array.length; i++) {
        if (array[i]%2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);
        }
    }

    console.log("Os números pares são: ", evenNums);
}

returnEvenValues(array);
