function calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)\n \n Se quiser cancelar, digite 0 ou clique em "Cancelar"'));
    console.log(operacao);
    let resultado;

    function novaOperacao() {
        let opcao = Number(prompt('Deseja fazer outra operação? \n 1 - SIM\n 2 - NÃO'));

        switch (opcao) {
            case 1:
                calculadora();
            break;
            
            case 2:
                alert('Obrigado, até mais!');
            break;

            default:
                alert('Digite uma das opcões do menu!!!');
                novaOperacao();
        }
    }

    if (operacao === 1 || operacao === 2 || operacao === 3 || operacao === 4 || operacao === 5 || operacao === 6) {
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));

        switch (operacao) {
            case 1:
                function soma(){
                    resultado = n1 + n2;
                    alert(`${n1} + ${n2} = ${resultado}`);
                }
                soma();
                break;
    
            case 2:
                function subtracao(){
                    resultado = n1 - n2;
                    alert(`${n1} - ${n2} = ${resultado}`);
                }
                subtracao();
                break;
    
            case 3:
                function multiplicacao(){
                    resultado = n1 * n2;
                    alert(`${n1} x ${n2} = ${resultado}`);
                }
                multiplicacao();
                break;
    
            case 4:
                function divisaoReal(){
                    resultado = n1/n2;
                    alert(`${n1} / ${n2} = ${resultado.toFixed(3)}`);
                }
                divisaoReal();
                break;
    
            case 5:
                function divisaoInteira(){
                    resultado = n1%n2;
                    alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
                }
                divisaoInteira();
                break;
    
            case 6:
                function potenciacao(){
                    resultado = n1**n2;
                    alert(`${n1}^${n2} = ${resultado}`);
                }
                potenciacao();
                break;
        }

        novaOperacao();

    } else if (operacao === 0){
        alert('Obrigado, Até mais!');
        console.log(operacao);
       
    } else {
        alert('Operação Inválida!!!');
        calculadora();
    }

    
}

calculadora();