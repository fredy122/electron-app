const { app, BrowserWindow, autoUpdater } = require('electron')

const server = 'https://update.electronjs.org'
const feed = `${server}/fredy122/electron-app/${process.platform}-${process.arch}/${app.getVersion()}`

autoUpdater.setFeedURL(feed)

setInterval(() => {
    autoUpdater.checkForUpdates()
  }, 1 * 60 * 1000)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})