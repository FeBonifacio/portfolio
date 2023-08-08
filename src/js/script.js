

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

escrevendoLetra();


function menuMobol() {
    const menu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .nav-primary');


        menu.addEventListener('click', () => {
        menu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });
}

function sobreMin() {

    const divEducation = document.querySelectorAll('.education-content div');
    const liEducation = document.querySelectorAll('.education-content ul li');


    divEducation[0].classList.add('ativo');
    liEducation[0].classList.add('ativo');

    function slideShow(index) {
    divEducation.forEach((div) => {
        div.classList.remove('ativo');
    });

    liEducation.forEach((button) => {
        button.classList.remove('ativo');
    });

    divEducation[index].classList.add('ativo');
    liEducation[index].classList.add('ativo');
    }


    liEducation.forEach((e, index) => {
        e.addEventListener('click', () => {
        slideShow(index);
        });
    });
}

sobreMin();

const listAll = document.querySelectorAll('.projects-storage ul li');
const buttonGeral = document.querySelectorAll('.projects-models ul li');
const buttonAll = document.querySelector('.projects-models .all');

function removeClick(index) {
    buttonGeral.forEach((item) => {
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo');
}


buttonGeral.forEach((event, index) => {
    event.addEventListener('click', () => {
        removeClick(index)
    })
})

function showLista(lista, buttom = "web") {
    lista.forEach((item) => {
        item.classList.remove('ativo');
    })

    if (buttom == 'web') {
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }

    if (buttom == 'mobile') {
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }

    if (buttom == 'all') {
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains("all")){
            showLista(listAll);

        } if(currentButton.classList.contains("web")){
            showLista(listAll, "web")
        }

        if(currentButton.classList.contains("mobile")){
            showLista(listAll, "mobile")
        }
    });
});