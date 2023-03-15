const btnUp = document.querySelector('.sizeUp');
const btnDown = document.querySelector('.sizeDown');
const btnColor = document.querySelector('.color');

let i = 36
const fntUp = () => {
    const p = document.querySelector('p');
    if (i < 50) {
        p.style.fontSize = `${(i += 2)}px `;
    }
}

const fntDown = () => {
    const p = document.querySelector('p');
    if (i > 10) {
        p.style.fontSize = `${(i -= 2)}px `;
    }
}

const fntColor = () => {
    const text = document.querySelector('.text');
    const colorHex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    text.setAttribute('style', `color: ${colorHex}`)

}


btnUp.addEventListener('click', fntUp);
btnDown.addEventListener('click', fntDown);
btnColor.addEventListener('click', fntColor);