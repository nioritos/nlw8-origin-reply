function onScroll() {
    const header = document.querySelector("header");
    const body = document.querySelector("body").clientHeight;
    if (scrollY > header.clientHeight) {
        header.classList.add('turn')
        console.log(true);
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
