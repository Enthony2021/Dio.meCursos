var corpo = document.querySelector('body');
var botaoModo = document.getElementById('mode-selector');
var rodape = document.querySelector('footer');
var titulo = document.getElementById('page-title');

function darkOrLightMode() {
    botaoModo.addEventListener('click', function() {
        botaoModo.classList.toggle('dark-mode');
        corpo.classList.toggle('dark-mode');
        rodape.classList.toggle('dark-mode');

        if (titulo.innerHTML === 'Light Mode ON') {
            titulo.innerHTML = '';
            botaoModo.innerHTML = '';
            titulo.innerHTML = 'Dark Mode ON';
            botaoModo.innerHTML = 'Light Mode';
        } else if (titulo.innerHTML === 'Dark Mode ON') {
            titulo.innerHTML = '';
            botaoModo.innerHTML = '';
            titulo.innerHTML = 'Light Mode ON';
            botaoModo.innerHTML = 'Dark Mode';
        }

    });
}

darkOrLightMode();

//botaoModo.style.backgroundColor = 'black';
// corpo.style.backgroundColor = 'black';

