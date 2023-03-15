let todoInput, errorInfo, addBtn, ulList, newTodo, popup, popupInfo, popupToEdit, popupInput, popupAddBtn, popupCloseBtn

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeToDoText)
    todoInput.addEventListener('keyup', enterKeyCheck)


}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        console.log(newTodo)
        createToolsArea()
        ulList.append(newTodo)
        todoInput.value = '';
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

const createToolsArea = () => {

    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deletBtn = document.createElement('button')
    deletBtn.classList.add('delete')
    deletBtn.innerHTML = '<i class="fas fa-times"</i>'

    toolsPanel.append(completeBtn, editBtn, deletBtn)
}

const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        editTodo(e)
    } else if (e.target.matches('.delete')) {
        deleteTodo(e)
    }
}

const editTodo = (e) => {
    toDoEdit = e.target.closest('li')
    popupInput.value = toDoEdit.firstChild.textContent
    popup.style.display = 'flex'
}
const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changeToDoText = () => {
    if (popupInput.value !== '') {
        toDoEdit.value = toDoEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'Musisz podać jakąś treść!'
    }
}

const deleteTodo = e => {
    e.target.closest('li').remove()
    const allTodo = ulList.querySelectorAll('li')

    if (allTodo.length ===0) {
        errorInfo.textContent = 'Brak zadań na liście.'
    }
}

const enterKeyCheck = e => {
    if(e.key === 'Enter') {
        addNewTodo()
    }
}


document.addEventListener('DOMContentLoaded', main)