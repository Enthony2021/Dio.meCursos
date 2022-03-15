var numeroAtual = document.querySelector(".numero-atual");
var contador = 0;
var diminuir = document.querySelector(".diminuir");
var almentar = document.querySelector(".almentar");
 
numeroAtual.innerHTML = contador;

almentar.addEventListener('click', function() {
    contador++;
    if (contador<=10) {
        numeroAtual.innerHTML = '';
        numeroAtual.innerHTML = contador;

        if (contador>0) {
            numeroAtual.style.color = "blue";
        }

        if (contador === 0) {
            numeroAtual.style.color = 'black';
        }

    } else {
        contador--;
        alert('Número Máximo!!! ' + contador);
    }
    

});

diminuir.addEventListener('click', function() {
    contador--;
    if (contador>-11) {
        numeroAtual.innerHTML = '';
        numeroAtual.innerHTML = contador;
        
        if (contador<0) {
            numeroAtual.style.color = "red";
        }

        if (contador===0) {
            numeroAtual.style.color = "black";
        }
    } else {
        contador++;
        alert('Número Mínimo!!! ' + contador);
    }  
});