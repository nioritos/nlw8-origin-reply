function onScroll() {
    const body = document.querySelector("body").clientHeight;
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const strongTitle = document.querySelector(".logo-title strong");
    const btToggle = document.querySelector(".bt-toggle");
        if (scrollY > header.clientHeight) {
        header.classList.add('turn')
        nav.classList.add('turn')
        strongTitle.classList.add('colored');
        btToggle.innerHTML = '<img src="./assets/svg/Icon-light.svg" alt="icone para mostrar o menu mobile" class="icon-menu">'
    } else {
        return false
    }
};
const menu = [...document.querySelectorAll('#get-element')]
const elementsMenu = [...document.querySelectorAll('#get-element li, #get-element a')];


Modal = {
    toggleVisible: () => {

        menu.forEach(item => {
            item.classList.add('toggled')
        })


        elementsMenu.forEach(item => {
            item.classList.add('showed')
        })
    },

    toggleNone: () => {
        menu.forEach(item => {
            item.classList.remove('toggled')

            elementsMenu.forEach(item => {
                item.classList.remove('showed')
            })
        })

    }

};
