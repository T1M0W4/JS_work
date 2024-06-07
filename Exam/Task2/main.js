document.addEventListener('DOMContentLoaded', () => {
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageSelect = document.getElementById('tipPercentage');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalAmountSpan = document.getElementById('totalAmount');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageSelect.value);

        if (isNaN(billAmount) || billAmount <= 0) {
            alert('Пожалуйста, введите корректную сумму счета');
            return;
        }

        const tipAmount = billAmount * (tipPercentage / 100);
        const totalAmount = billAmount + tipAmount;

        totalAmountSpan.textContent = totalAmount.toFixed(2);
        resultDiv.style.display = 'block';
    });
});
