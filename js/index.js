const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');


// T(°F) = T(°F) * 1.8 + 32
// T(°C) = T(°C) - 32 / 1.8

const change = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
        result.textContent = ``
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
        result.textContent = ``
    }
}

const fahrCel = () => {
    let fahrenheit
    fahrenheit = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
    converter.value = ''
}
const celFahr = () => {
    let celsius
    celsius = (converter.value - 32) / 1.8
    result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
    converter.value = ''
}

const empty = () => {
    if (converter.value === '') {
        result.textContent = `Wpisz jakąś liczbę`;
    }
}

const con = () => {
    if (converter.value !== '') {
        if (one.textContent === '°C') {
            fahrCel()
        } else {
            celFahr()
        }
    } else {
        empty()
    }
}

const res = () => {
    result.textContent = ``
    converter.value = ``
}

changeBtn.addEventListener('click', change);
convBtn.addEventListener('click', con)
resetBtn.addEventListener('click', res)