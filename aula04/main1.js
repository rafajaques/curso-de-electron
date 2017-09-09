const {app,BrowserWindow,Menu} = require('electron');

let janela = null;

app.on('ready', () => {
  janela = new BrowserWindow({
    width:800,
    height:600,
  });

  janela.loadURL(`file://${__dirname}/index1.html`);

});
