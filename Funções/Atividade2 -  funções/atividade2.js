const pessoa1 = {
    nome: 'Enthony',
    idade: 25
}

const pessoa2 = {
    nome: 'Maria',
    idade: 30
}

const animal = {
    nome: 'Merry',
    idade: 1
}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(pessoa2,5));

console.log(calculaIdade.apply(pessoa1,[5]));


