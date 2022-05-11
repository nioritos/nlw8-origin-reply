function onScroll() {
    const body = document.querySelector("body").clientHeight;
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const strongTitle = document.querySelector(".logo-title strong");
    const btToggle = document.querySelector(".bt-toggle");
    const home = document.querySelector("#home");
    const services = document.querySelector("#services").clientHeight;
    const btScroll = document.querySelector(".scroll-to-home");

    if (scrollY > header.clientHeight) {
        var imgInner = '<img src="./assets/svg/Icon-light.svg" alt="icone para mostrar o menu mobile" class="icon-menu">';
        header.classList.add('turn')
        nav.classList.add('turn')
        strongTitle.classList.add('colored');
        btToggle.innerHTML = `${imgInner}`;
     }else if (scrollY < home.clientHeight){
        header.classList.remove('turn')
        nav.classList.remove('turn')
        strongTitle.classList.remove('colored');
        btToggle.innerHTML = '<img src="./assets/svg/Icon-dark.svg" alt="icone para mostrar o menu mobile" class="icon-menu">'
        btScroll.classList.remove('showed-bt')
    }else if (scrollY > services) {
        btScroll.classList.remove('none-bt');
        btScroll.classList.add('showed-bt');
   }else {
        return false
    }
};

function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    };


const menu = [...document.querySelectorAll('#get-element')]
const elementsMenu = [...document.querySelectorAll('#get-element li')];
const btNone = [...document.querySelectorAll("#get-button ")];


Modal = {
    toggleVisible: () => {

        menu.forEach(item => {
            item.classList.add('toggled')
        })


        elementsMenu.forEach(item => {
            item.classList.add('showed')
        })

        btNone.forEach(item => {
            item.classList.add('showed')
        })
    },

    toggleNone: () => {
        menu.forEach(item => {
            item.classList.remove('toggled')

        })
        elementsMenu.forEach(item => {
            item.classList.remove('showed')
        })

        btNone.classList.remove('showed');


    }

};
