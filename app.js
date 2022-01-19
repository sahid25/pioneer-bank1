// Login Area
const loginBtn = document.getElementById('loginBtn').addEventListener('click', function () {
    const loginArea = document.getElementById('loginArea').style.display = 'none';
    const transactionArea = document.getElementById('transactionArea').style.display = 'block';
});



// Deposit Area 
const depositBtn = document.getElementById('depositBtn').addEventListener('click', function () {
    const depositAmountNumber = getInputNumber('depositAmount'); // calling function
    updateSpanText('currentDeposit', depositAmountNumber); // calling function
    updateSpanText('currentaBalance', depositAmountNumber) // calling function
    document.getElementById('depositAmount').value = '';
});


// Withdraw area 
const withdrawBtn = document.getElementById('withdrawBtn').addEventListener('click', function () {

    const withdrawAmountNumber = getInputNumber('withdrawAmount'); // calling function
    updateSpanText('currentWithdraw', withdrawAmountNumber); // calling function
    updateSpanText('currentaBalance', -1 * withdrawAmountNumber); // calling function
    document.getElementById('withdrawAmount').value = '';


});

// getInputNumber function
function getInputNumber(id) {
    const nameOfId = document.getElementById(id).value;
    const idNumber = parseFloat(nameOfId);
    return idNumber;
}



// UpdateSpanText function
function updateSpanText(id, theNumber) {
    const idName = document.getElementById(id).innerText;
    const idNumber = parseFloat(idName);
    const total = theNumber + idNumber;
    document.getElementById(id).innerText = total;
}

