const btnAddTransaction = document.querySelector('.add-transaction')
const btnDeleteAll = document.querySelector('.delete-all')
const btnSave = document.querySelector('.save')
const btnDeleteOne = document.querySelector('.delete')
const btnCancel = document.querySelector('.cancel')
const btnDarkMode = document.querySelector('.dark')
const btnLightMode = document.querySelector('.light')


const expensesArea = document.querySelector('.expenses-area')
const transaction = document.querySelector('.transaction')
const transactionName = document.querySelector('.transaction-name')
const transactionAmount = document.querySelector('.transaction-amount')
const incomeArea = document.querySelector('.income-area')
const availableMoney = document.querySelector('.available-money')
const addTransactionPanel = document.querySelector('.add-transaction-panel')


const nameInput = document.querySelector('#name')
const amountInput = document.querySelector('#amount')
const categorySelect = document.querySelector('#category')

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];

const showPanel = () => {
    addTransactionPanel.style.display = "flex"
}

const shadowPanel = () => {
    addTransactionPanel.style.display = "none"
    clearForm()

}

const checkForm = () => {
    if (nameInput.value !== '' && amountInput.value !== '' && categorySelect.value !== 'none') {
        createNewTransaction()
    } else {
        alert('Wypełnił wszystkie pola')
    }
}

const clearForm = () => {
    categorySelect.value = 'none'
    amountInput.value = ''
    nameInput.value = ''
}

const createNewTransaction = () => {
    const newTransaction = document.createElement('div')
    newTransaction.classList.add('transaction')
    newTransaction.setAttribute('id', ID);
    checkCategory(selectedCategory)
    newTransaction.innerHTML = `
        <p class="transaction-name">
        ${categoryIcon} ${nameInput.value}
        </p>
        <p class="transaction-amount">
        ${amountInput.value}zł 
        <button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button>
        </p>
    `;
    if (amountInput.value > 0) {
        incomeArea.appendChild(newTransaction)
        newTransaction.classList.add('income')
    } else {
        expensesArea.appendChild(newTransaction)
        newTransaction.classList.add('expense')
    }
    moneyArr.push(parseFloat(amountInput.value))
    sumMoney(moneyArr)
    shadowPanel()
    ID++
    clearForm()
}

const selectCategory = () => {
    selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
}

const checkCategory = transaction => {
    switch (transaction) {
        case '[ + ] Przychód':
            categoryIcon = '<i class="fas fa-money-bill-wave"></i>'
            break;
        case '[ - ] Zakupy':
            categoryIcon = '<i class="fas fa-cart-arrow-down"></i>'
            break;
        case '[ - ] Jedzenie':
            categoryIcon = '<i class="fas fa-hamburger"></i>'
            break;
        case '[ - ] Kino':
            categoryIcon = '<i class="fas fa-film"></i>'
            break;
    }
}

const sumMoney = money => {
    const newMoney = money.reduce((a, b) => a + b)
    availableMoney.textContent = `${newMoney}zł`
}

const deleteTransaction = id => {
    const transactionToDelete = document.getElementById(id)
    const transactionAmount = parseFloat(transactionToDelete.childNodes[3].innerText)
    const indexOfTransaction = moneyArr.indexOf(transactionAmount)

    moneyArr.splice(indexOfTransaction, 1)

    if (transactionToDelete.classList.contains('income')) {
        incomeArea.removeChild(transactionToDelete)
    } else {
        expensesArea.removeChild(transactionToDelete)
    }
    sumMoney(moneyArr)
}

const deleteAll = () => {
    incomeArea.innerHTML = `<h3>Przychód:</h3>`;
    expensesArea.innerHTML = `<h3>Wydatki:</h3>`;
    availableMoney.textContent = '0zł';
    moneyArr = [0];
}

const lightMode = () => {
    root.style.setProperty('--first-color','#F9F9F9')
    root.style.setProperty('--second-color','#14161F')
    root.style.setProperty('--border-color','rgba(0, 0, 0, .2)')
}

const darkMode = () => {
    root.style.setProperty('--first-color','#14161F')
    root.style.setProperty('--second-color','#F9F9F9')
    root.style.setProperty('--border-color','rgba(255,255,255,.4)')
}



btnAddTransaction.addEventListener('click', showPanel)
btnCancel.addEventListener('click', shadowPanel)
btnSave.addEventListener('click', createNewTransaction)
btnDeleteAll.addEventListener('click', deleteAll)
btnLightMode.addEventListener('click', lightMode)
btnDarkMode.addEventListener('click', darkMode)