const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const mudaImagem = document.querySelector('.muda-imagem');
const imgCat = document.querySelector('.cat-img');
const body = document.querySelector('body');


const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
        
    } catch(e) {
        console.log(e.message);
    }

};

const loadImg = async () => {
    imgCat.src = await getCats();
}

mudaImagem.addEventListener('click', loadImg);

loadImg();