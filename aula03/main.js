const {app,BrowserWindow} = require('electron');

let janela = null;

app.on('ready', () => {
  janela = new BrowserWindow({
    width:800,
    height:600,
    // x: 20,
    // y: 30,
    // resizable: false,
    // alwaysOnTop: true,
    // show: false,
    // frame: false,
    // titleBarStyle: 'hidden',
    // transparent: true
  });

  janela.loadURL(`file://${__dirname}/janela.html`);

  janela.on('ready-to-show', () => {
    janela.show();
  });
});
