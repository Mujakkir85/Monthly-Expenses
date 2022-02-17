
function getIputField(inputField, erroMessage) {

    const inputValue = parseFloat(document.getElementById(inputField).value);
    //console.log(!isNaN(inputValue))
    if (isNaN(inputValue)) {
        erroMessage.style.display = 'block';
    }
    else {
        return inputValue;
    }
}

document.getElementById('calculate').addEventListener('click', function () {

    const erroMessage = document.getElementById('error-msg')
    const erroMessage2 = document.getElementById('error-msg-two')

    const incomeField = getIputField('income-field', erroMessage);
    const foodField = getIputField('food-field', erroMessage);
    const rentField = getIputField('rent-field', erroMessage);
    const clothesField = getIputField('clothes-field', erroMessage);

    const totalExpenses = foodField + rentField + clothesField;
    const balance = incomeField - totalExpenses;

    if (totalExpenses < incomeField) {
        document.getElementById('total-expenses').innerText = totalExpenses;
        document.getElementById('total-balance').innerText = balance;
    }
    else if (!isNaN(totalExpenses) && !isNaN(incomeField)) {
        erroMessage2.style.display = 'block';
    }

})