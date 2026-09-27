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

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
    createWindow()

    ipcMain.on('open-calculator', () => {
        calculatorWindow()
    })

    ipcMain.on('open-toDoList', () => {
        toDoListWindow()
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