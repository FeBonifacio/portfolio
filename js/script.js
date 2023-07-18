function ativaLetra(element) {
    const arrText = element.innerHTML.split('');
    element.innerText = '';
    arrText.forEach((letra, i)=>{
        setTimeout(() => {
            element.innerHTML += letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.typing');

ativaLetra(titulo)

