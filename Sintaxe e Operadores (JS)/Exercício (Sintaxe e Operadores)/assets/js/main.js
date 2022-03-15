function verificarNumeros(n1, n2) {
    var soma = n1+n2;
    var maiorMenor1, maiorMenor2, igualDiferente;

    if (n1 === n2) {
        igualDiferente = 'são iguais';

        if( (soma>10) && (soma<20) ) {
            maiorMenor1 = 'maior';
            maiorMenor2 = 'menor';
        } 
    
        if (soma<10) {
            maiorMenor1 = 'menor';
            maiorMenor2 = 'menor';
        }

        if (soma>20) {
            maiorMenor1 = 'maior';
            maiorMenor2 = 'maior';
        }
    } else {
        igualDiferente = 'não são iguais';
        
        if( (soma>10) && (soma<20) ) {
            maiorMenor1 = 'maior';
            maiorMenor2 = 'menor';
        } 
        
        if (soma<10) {
            maiorMenor1 = 'menor';
            maiorMenor2 = 'menor';
        }

        if (soma>20) {
            maiorMenor1 = 'maior';
            maiorMenor2 = 'maior';
        }
    }

    console.log(`Os números ${n1} e ${n2} ${igualDiferente}. Sua soma é ${soma}, que é ${maiorMenor1} que 10 e ${maiorMenor2} que 20.`)
}

verificarNumeros(1, 2);