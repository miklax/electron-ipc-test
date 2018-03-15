const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')

let win,win_two

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})
  win_two = new BrowserWindow({width: 800, height: 600})

  win.loadURL(url.format({
    pathname: path.join(__dirname, './src/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })

  win_two.loadURL(url.format({
    pathname: path.join(__dirname, './src/two.html'),
    protocol: 'file:',
    slashes: true
  }))

  win_two.on('closed', () => {
    win_two = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  win.webContents.send('asynchronous-reply', 'pong')
  win_two.webContents.send('asynchronous-reply', 'pong')
})

// ipcMain.on('asynchronous-message', (event, arg) => {
//   console.log(arg) // prints "ping"
//   event.sender.send('asynchronous-reply', 'pong')
// })
