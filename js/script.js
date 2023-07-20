//Letra piscando
function escrevendoLetra () {
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
}

const menu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .nav-primary');


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
});
