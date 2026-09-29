const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

//Janela Principal-----
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('src/views/index.html')
}

//Janela Calculadora---
const calculatorWindow = () => {
    const father = BrowserWindow.getFocusedWindow()
    if (father) {
        const calculator = new BrowserWindow({
            width: 1200,
            height: 800,
            resizable: false,
            parent: father,
            modal:true
        })

        calculator.loadFile('src/views/calculadora.html')
    }
}

const toDoListWindow = () => {
    const father = BrowserWindow.getFocusedWindow()
    if (father) {
        const toDoList = new BrowserWindow({
            width: 1200,
            height: 800,
            resizable: false,
            parent: father,
            modal:true
        })

        toDoList.loadFile('src/views/lista_de_tarefas.html')
    }
}

const currencyConverterWindow = () => {
    const father = BrowserWindow.getFocusedWindow()
    if (father) {
        const currencyConverter = new BrowserWindow({
            width: 1200,
            height: 800,
            resizable: false,
            parent: father,
            modal:true
        })

        currencyConverter.loadFile('src/views/conversor_de_moedas.html')
    }
}
const guessingGameWindow = () => {
    const father = BrowserWindow.getFocusedWindow()
    if (father) {
        const guessingGame = new BrowserWindow({
            width: 1200,
            height: 800,
            resizable: false,
            parent: father,
            modal:true
        })

        guessingGame.loadFile('src/views/jogo_de_adivinhacao.html')
    }
}

const timerWindow = () => {
    const father = BrowserWindow.getFocusedWindow()
    if (father) {
        const timer = new BrowserWindow({
            width: 1200,
            height: 800,
            resizable: false,
            parent: father,
            modal:true
        })

        timer.loadFile('src/views/cronometro.html')
    }
}
const passwordGeneratorWindow = () => {
    const father = BrowserWindow.getFocusedWindow()
    if (father) {
        const passwordGenerator = new BrowserWindow({
            width: 1200,
            height: 800,
            resizable: false,
            parent: father,
            modal:true
        })

        passwordGenerator.loadFile('src/views/gerador_de_senhas.html')
    }
}
const cpfValidatorWindow = () => {
    const father = BrowserWindow.getFocusedWindow()
    if (father) {
        const cpfValidator = new BrowserWindow({
            width: 1200,
            height: 800,
            resizable: false,
            parent: father,
            modal:true
        })

        cpfValidator.loadFile('src/views/validador_de_cpf.html')
    }
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
    createWindow()

    ipcMain.on('open-calculator', () => {
        calculatorWindow()
    })

    ipcMain.on('open-toDoList', () => {
        toDoListWindow()
    })

    ipcMain.on('open-currencyConverter', () => {
        currencyConverterWindow()
    })

    ipcMain.on('open-guessingGame', () => {
        guessingGameWindow()
    })

    ipcMain.on('open-timer', () => {
        timerWindow()
    })

    ipcMain.on('open-passwordGenerator', () => {
        passwordGeneratorWindow()
    })

    ipcMain.on('open-cpfValidator', () => {
        cpfValidatorWindow()
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})