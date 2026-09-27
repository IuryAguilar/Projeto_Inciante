
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
    toDoListBtn: document.getElementById('toDoList')
}

elements.calculatorBtn.addEventListener("click", () => {
    api.openCalculator()
})
elements.toDoListBtn.addEventListener("click", () => {
    api.openToDoList()
})