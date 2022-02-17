
function getIputField(inputField) {
    return parseFloat(document.getElementById(inputField).value);
}

document.getElementById('calculate').addEventListener('click', function () {

    const incomeField = getIputField('income-field');
    const foodField = getIputField('food-field');
    const rentField = getIputField('rent-field');
    const clothesField = getIputField('clothes-field');

    const totalExpenses = foodField + rentField + clothesField;
    const balance = incomeField - totalExpenses;

    if (totalExpenses < balance) {
        document.getElementById('total-expenses').innerText = totalExpenses;
        document.getElementById('total-balance').innerText = balance;
    }
    else {

    }

})