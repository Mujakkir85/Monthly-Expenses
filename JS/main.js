
function getIputField(inputField, erroMessage) {

    const inputValue = parseFloat(document.getElementById(inputField).value);
    //console.log(!isNaN(inputValue))
    if (isNaN(inputValue) || inputValue < 0) {
        erroMessage.style.display = 'block';
    }
    else {
        return inputValue;
    }
}

function Subtraction(firstValue, secondValue) {
    return firstValue - secondValue;
}


document.getElementById('calculate').addEventListener('click', function () {

    //get errormessage input field
    const erroMessage = document.getElementById('error-msg')
    const erroMessage2 = document.getElementById('error-msg-two')

    //get input field value
    const incomeField = getIputField('income-field', erroMessage);
    const foodField = getIputField('food-field', erroMessage);
    const rentField = getIputField('rent-field', erroMessage);
    const clothesField = getIputField('clothes-field', erroMessage);

    const totalExpenses = foodField + rentField + clothesField;
    const balance = Subtraction(incomeField, totalExpenses);

    if (totalExpenses < incomeField) {
        document.getElementById('total-expenses').innerText = totalExpenses;
        document.getElementById('total-balance').innerText = balance;
    }
    else if (!isNaN(totalExpenses) && !isNaN(incomeField)) {
        erroMessage2.style.display = 'block';  //
    }

})

//math  = (10000 * 20) / 100 = 2000.

document.getElementById('save-money').addEventListener('click', function () {
    const erroMessage3 = document.getElementById('error-msg-three');

    const saveMoneyPrecent = getIputField('save-money-input');
    const incomeField = getIputField('income-field');
    const TotalBalance = parseFloat(document.getElementById('total-balance').innerText)
    //console.log(TotalBalance, saveMoneyPrecent, incomeField);

    const savingAmount = (incomeField * saveMoneyPrecent) / 100;

    if (savingAmount > TotalBalance) {
        erroMessage3.style.display = 'block';
    }
    else {
        let ShowSavingAmount = document.getElementById('saving-amount');
        ShowSavingAmount.innerText = savingAmount;
        let remainngAmountField = document.getElementById('remaining-balance');
        let remainingAmount = Subtraction(TotalBalance, savingAmount);
        remainngAmountField.innerText = remainingAmount;
    }
})