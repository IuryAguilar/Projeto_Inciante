
console.log(`Chrome (v${window.versions.chrome()})`)
console.log(`Node.js (v${window.versions.node()})`) 
console.log(`Electron (v${window.versions.electron()})`)

const func = async () => {
    const response = await window.versions.ping()
    console.log(response)
}

func()

const elements = {
    calculatorBtn: document.getElementById('calculator'),
    toDoListBtn: document.getElementById('toDoList'),
    currencyConverterBtn: document.getElementById('currencyConverter'),
    timerBtn: document.getElementById('timerBtn'),
    passwordGeneratorBtn: document.getElementById('passwordGeneratorBtn'),
    cpfValidatorBtn: document.getElementById('cpfValidatorBtn')
}

elements.calculatorBtn.addEventListener("click", () => {
    api.openCalculator()
})
elements.toDoListBtn.addEventListener("click", () => {
    api.openToDoList()
})
elements.currencyConverterBtn.addEventListener("click", () => {
    api.openCurrencyConverter()
})
elements.timerBtn.addEventListener("click", () => {
    api.openTimer()
})
elements.passwordGeneratorBtn.addEventListener("click", () => {
    api.openPasswordGenerator()
})
elements.cpfValidatorBtn.addEventListener("click", () => {
    api.openCpfValidator()
})
