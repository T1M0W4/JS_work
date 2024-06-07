document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const convertBtn = document.getElementById('convertBtn');
    const convertedAmountSpan = document.getElementById('convertedAmount');
    const conversionResultDiv = document.getElementById('conversionResult');

    const exchangeRates = {
        USD: { EUR: 0.84, RUB: 74.57 },
        EUR: { USD: 1.19, RUB: 88.74 },
        RUB: { USD: 0.013, EUR: 0.011 }
    };

    convertBtn.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount) || amount <= 0) {
            alert('Пожалуйста, введите корректную сумму');
            return;
        }

        const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
        convertedAmountSpan.textContent = convertedAmount.toFixed(2);
        conversionResultDiv.style.display = 'block';
    });
});
