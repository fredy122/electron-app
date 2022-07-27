const { app, BrowserWindow, autoUpdater } = require('electron')

const { version } = require('./package')

const server = 'https://update.electronjs.org'
const feed = `${server}/fredy122/electron-app/${process.platform}/${version}`

console.log(`Current version: ${version}`)

autoUpdater.setFeedURL(feed)
autoUpdater.checkForUpdates()

autoUpdater.on('checking-for-update', () => {
  console.log('checking-for-update')
})

autoUpdater.on('update-available', () => {
  console.log('update-available')
})

autoUpdater.on('update-not-available', () => {
  console.log('update-not-available')
})

autoUpdater.on(
  'update-downloaded',
  (event, releaseNotes, releaseName, updateURL) => {
    console.log('update-downloaded', {
      event,
      releaseNotes,
      releaseName,
      updateURL
    })
  }
)

autoUpdater.on('error', error => {
  console.log('error', { error })
})

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
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