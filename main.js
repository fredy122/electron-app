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

  updateApp = require('update-electron-app');

  updateApp({
        // repo: 'PhiloNL/electron-hello-world', // defaults to package.json
        updateInterval: '5 minutes',
        notifyUser: true
  });
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})