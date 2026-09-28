const elements = {
    result: document.getElementById('result'),
    passwordSize: document.getElementById('passwordSize'),
    numberChk: document.getElementById('numberChk'),
    uppercaseChk: document.getElementById('uppercaseChk'),
    symbolChk: document.getElementById('symbolChk'),
    generatePasswordBtn: document.getElementById('generatePasswordBtn')
};
const letters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%&";

elements.generatePasswordBtn.addEventListener("click", () => {
    let password = "";
    const size = Number(elements.passwordSize.value);
    const generators = [randomizeLetters];

    if (!size) {
        elements.result.textContent = "Escolha um tamanho primeiro.";
        return;
    };
    if (elements.numberChk.checked) generators.push(randomizeNumbers);
    if (elements.uppercaseChk.checked) generators.push(randomizeUppercaseLetters);
    if (elements.symbolChk.checked) generators.push(randomizeSymbols);

    for (let i = 0; i < size; i++) {
        const randomGenerator = generators[Math.floor(Math.random() * generators.length)];

        password += randomGenerator();
    }
    elements.result.textContent = password;
});

function randomizeLetters(){
    return letters[Math.floor(Math.random() * letters.length)]
}

function randomizeUppercaseLetters(){
    return letters[Math.floor(Math.random() * letters.length)].toUpperCase();
}

function randomizeNumbers(){
        return Math.floor(Math.random() * 10);
}

function randomizeSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

