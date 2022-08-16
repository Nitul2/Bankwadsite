document.getElementById("btn-deposit").addEventListener('click', function () {
    const depositField = document.getElementById("deposit-field")
    const newDepositAmountString = depositField.value;
    const newDepsitAmount = parseFloat(newDepositAmountString);
    depositField.value = "";
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const newDepositTotal = previousDepositTotal + newDepsitAmount;
    depositTotalElement.innerText = newDepositTotal;
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    const newBalanceTotal = previousBalanceTotalAmount + newDepsitAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})
