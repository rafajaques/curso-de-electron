const {app,BrowserWindow} = require('electron');

let janela = null;

app.on('ready', () => {
  pai = new BrowserWindow({width:800, height:600});

  filho = new BrowserWindow({
    parent: pai,
    modal: true,
    width: 400,
    height: 200
  });

  pai.loadURL(`file://${__dirname}/janela.html`);
  filho.loadURL(`file://${__dirname}/modal.html`);
});
