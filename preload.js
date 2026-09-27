const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('versions', {
    chrome: () => process.versions.chrome,
    node: () => process.versions.node,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping')
})

contextBridge.exposeInMainWorld('api', {
    openCalculator: () => ipcRenderer.send('open-calculator'),
    openToDoList: () => ipcRenderer.send('open-toDoList')
})