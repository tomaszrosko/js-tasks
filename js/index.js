const addBtn = document.querySelector('.add')
const deleteBtn = document.getElementsByClassName('.delete-note')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteAllBtn = document.querySelector('.delete-all')

const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const cartCategory = document.querySelector('#category')
const textarea = document.querySelector('#text')
const error = document.querySelector('.error')
let selectedValue;

let cardID = 0;

const openPanel = () => {
    notePanel.style.display = 'flex'
}

const closePanel = () => {
    notePanel.style.display = 'none'
    error.style.visibility = 'hidden'
    textarea.value = '';
    category.selectedIndex = 0;
}

const addNote = () => {
    if (textarea.value !== '' && category.value !== '0') {
        createNote();
        error.style.visibility = 'hidden'
    } else {
        error.style.visibility = 'visible'
    }
}

const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID)
    newNote.innerHTML = `
            <div class="note-header">
                <h3 class="note-title">${selectedValue}</h3>
                <button class="delete-note" onclick="deleteNote(${cardID})">
                    <i class="fas fa-times icon"></i>
                </button>
            </div>
            <div class="note-body">
                ${textarea.value}
            </div>`
    noteArea.appendChild(newNote);
    cardID++;
    textarea.value = '';
    category.selectedIndex = 0;
    notePanel.style.display = 'none';
    checkColor(newNote)
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

const checkColor = note => {
    switch (selectedValue) {
        case 'Zakupy':
            note.style.backgroundColor = 'green'
            break;
        case 'Praca':
            note.style.backgroundColor = 'blue'
            break;
        case 'Inne':
            note.style.backgroundColor = 'red'
            break;
    }
}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete)
}

const  deleteAllNotes = () => {
    noteArea.textContent = ''
}


addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAllNotes)






