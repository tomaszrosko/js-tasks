const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const img = document.querySelector('.pictureOne')


const showPic = () => {
    img.classList.toggle('hide');

    if(img.classList.contains('hide')) {
        arrowIcon.style.transform = 'rotate(180deg)'
    } else {
        arrowIcon.style.transform = 'rotate(0'
    }
}

arrowBtn.addEventListener('click',showPic);




