const burgerBtn = document.querySelector('.burger')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-times')
const nav = document.querySelector('nav ul')
const menuItems = document.querySelectorAll(".menuItem");



const handle = () => {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    xIco.classList.toggle('hide')
    barsIco.classList.toggle('hide')
}


for (const elementA of menuItems) {
    elementA.addEventListener("click", handle);
}


burgerBtn.addEventListener('click', handle);


