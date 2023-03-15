const allPrice = document.querySelector('#allPrice');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');


const showBill = () => {
    if (allPrice.value == '' || people.value == '' || tip.value == 0) {
        error.textContent = 'Uzupełnij wszystkie pola!';
        costInfo.style.display = 'none';
    } else {
        error.textContent = '';
        countBill();
    }
};

const countBill = () => {
    const newPrice = parseFloat(allPrice.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);
    const sum = (newPrice + (newPrice * newTip)) / newPeople;

    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2);
};


countBtn.addEventListener('click', showBill);