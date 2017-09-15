const {app,BrowserWindow,Menu} = require('electron');

let janela = null;

app.on('ready', () => {
  janela = new BrowserWindow({
    width:800,
    height:600,
  });

  janela.loadURL(`file://${__dirname}/index3.html`);

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
          label: 'Liga e desliga',
          type: 'checkbox',
          checked: true,
          click () {
            console.log(menu.items[1].submenu.items[0].checked);
          }
        },
        {
          label: 'Item desativado'
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

  // Desativa o segundo item do segundo menu
  menu.items[1].submenu.items[1].enabled = false;

});
