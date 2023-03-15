const img = document.querySelector('.ball-img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answerArr = ['Tak!', 'Nie.', 'Może.', 'Ciężko powiedzieć...', 'Nie chcesz znać odpowiedzi na to pytanie... :/']

const click = () => {
    img.classList.add("shake-animation")
    const remove = () => {
        img.classList.remove('shake-animation');
    }
    setTimeout(remove, 1000);

    const checkMark = () => {
        input.endsWith('?')
    }
    const check = () => {
        if (input.value !== '') {
            if (input.value.endsWith('?')) {
                error.textContent = ''
                const showRandom = () => {
                    const number = Math.floor(Math.random() * answerArr.length)
                    answer.textContent = `${answerArr[number]}`
                }
                showRandom()

            } else  {
                error.textContent = ''
                answer.textContent = 'Prosze uzupełnij ??'
            }
        } else {
            answer.textContent = ''
            error.textContent = 'Wpisz pytanie'
        }
    }
    check()
}

img.addEventListener('click', click)




