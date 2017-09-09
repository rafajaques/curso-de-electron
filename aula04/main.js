const {app,BrowserWindow,Menu} = require('electron');

let janela = null;

app.on('ready', () => {
  janela = new BrowserWindow({
    width:800,
    height:600,
  });

  janela.loadURL(`file://${__dirname}/index.html`);

  /**
   * Exemplo 2
   * Construção via template
   */

  const template = [
    {
      label: 'Arquivo',
      submenu: [
        {label: 'Abrir'},
        {label: 'Sair'}
      ]
    },
    {
      label: 'Editar',
      submenu: [
        {role: 'undo'}
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);

});
