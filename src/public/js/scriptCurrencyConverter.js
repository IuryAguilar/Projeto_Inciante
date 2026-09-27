const elements = {
    money: document.getElementById('moneyInput'),
    currencyToConvert: document.getElementById('currencyToConvert'),
    currency: document.getElementById('currencySelect'),
    result: document.getElementById('result'),
    changeCurrencyBtn: document.getElementById('changeCurrencyBtn'),
    convertBtn: document.getElementById('convertBtn')
};
const rates = {
    USD: 1,
    EUR: 0.87,
    JPY: 157.43,
    GBP: 0.74,
    CNY: 6.75,
    CHF: 0.81,
    AUD: 1.43,
    CAD: 1.40,
    BRL: 5.08,
};
const symbols = {
    USD: "$",
    EUR: "€",
    JPY: "¥",
    GBP: "£",
    CNY: "¥",
    CHF: "Fr.",
    AUD: "$",
    CAD: "C$",
    BRL: "R$",
};

function toConvert() {
    if (elements.money.value.trim() === "" || parseFloat(elements.money.value) <= 0){
        elements.result.textContent = "Digite um valor válido!";
        return;
    };
    if (elements.currencyToConvert.value === elements.currency.value){
        let money = parseFloat(elements.money.value);
        elements.result.textContent = money.toFixed(2);
        return;
    } 
    const moneyValue = parseFloat(elements.money.value);
    const originRate = rates[elements.currencyToConvert.value];
    const destinationRate = rates[elements.currency.value];
    const destinationSymbol = symbols[elements.currency.value];

    const valueInUSD =  moneyValue / originRate;

    const finalValue = valueInUSD * destinationRate;
    
    elements.result.textContent = `${moneyValue} ${elements.currencyToConvert.value} = ${destinationSymbol}${finalValue.toFixed(2)}`;
};

elements.money.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        toConvert();
    }
});

elements.convertBtn.addEventListener("click", () => {
    toConvert();
});

elements.changeCurrencyBtn.addEventListener("click", () => {
    let change = elements.currencyToConvert.value;
    elements.currencyToConvert.value = elements.currency.value;
    elements.currency.value = change;

    toConvert();
});