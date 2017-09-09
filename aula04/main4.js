const {app,BrowserWindow,Menu} = require('electron');

let janela = null;

app.on('ready', () => {
  janela = new BrowserWindow({
    width:800,
    height:600,
  });

  janela.loadURL(`file://${__dirname}/index4.html`);

  /**
   * Exemplo 2
   * Construção via template
   */

  const template = [
    {
      label: 'Arquivo',
      submenu: [
        {label: 'Abrir'},
        {
          label: 'Sair',
          role: 'close'
        }
      ]
    },
    {
      label: 'Editar',
      submenu: [
        {
          label: 'Procurar',
          accelerator: 'CmdOrCtrl+F',
          click () { console.log('Procurando!'); }
        },
        {
          label: 'Procurar e substituir',
          accelerator: 'CmdOrCtrl+Shift+F',
        },
        {type: 'separator'},
        {
          label: 'Item normal'
        },
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);

});
