const retornaNome = function() {
    return this.nome;
};

let enthony = retornaNome.bind({nome: 'Enthony'});

console.log(enthony());