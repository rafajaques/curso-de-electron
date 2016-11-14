const {app,BrowserWindow} = require('electron');

let janela = null;

app.on('ready', () => {
  janela = new BrowserWindow({width:800, height:600});

  janela.on('resize', atualizaDados);
  janela.on('move', atualizaDados);

  janela.loadURL(`file://${__dirname}/janela.html`);
});

function atualizaDados() {
  console.log(janela.getSize());
  console.log(janela.getPosition());
}
