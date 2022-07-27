const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  require('update-electron-app')({
    repo: 'fredy122/electron-app',
    updateInterval: '5 minutes',
    logger: require('electron-log')
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})