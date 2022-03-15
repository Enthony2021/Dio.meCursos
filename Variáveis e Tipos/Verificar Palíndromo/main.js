//Solução 1

function verificaPalindromo(string) {
    if(!string) return 'Esta palavra não é uma string';

    return string.split('').reverse().join('') === string;
}

let palindromo = 'arara';
console.log(verificaPalindromo(palindromo));


//Solução 2
function verificaPalindromo(string) {
    if(!string) return 'Esta palavra não é uma string';

    for(let i=0; i < (string.length / 2); i++) {
        if( string[i] !== string[string.length -1 -i] ) {
            return false;
        }
    }
    return true;
}

let palindromo = 'amama';
console.log(verificaPalindromo(palindromo));