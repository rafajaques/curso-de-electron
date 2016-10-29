const {app,BrowserWindow} = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({width:800, height:600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.webContents.openDevTools();
});
