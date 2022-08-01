const { app, BrowserWindow, autoUpdater } = require('electron')
/*
const server = 'https://electron-app-eta.vercel.app'
const url = `${server}/update/${process.platform}/${app.getVersion()}`

autoUpdater.setFeedURL({ url })
console.log(url);
*/

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: true,
    autoHideMenuBar: true,
    movable: false,
    resizable: false,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})