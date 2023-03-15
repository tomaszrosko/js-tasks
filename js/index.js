const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const msg = () => {
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.textContent = 'Masz bardzo mocne hasło'
        p.style.color = 'green';
    } else  if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.textContent = 'Masz dobre hasło'
        p.style.color = 'orange';
    } else {
        p.textContent = 'Masz słabe hasło'
        p.style.color = 'red';
    }
}

const checkPass = () => {
    if (pass.value !== '') {
        msg()
    } else {
        p.textContent = 'Nie podałeś hasła...'
        p.style.color = ''
    }
}


pass.addEventListener('keyup', checkPass);