const {app,BrowserWindow,Menu} = require('electron');

let janela = null;

app.on('ready', () => {
  janela = new BrowserWindow({
    width:800,
    height:600,
  });

  janela.loadURL(`file://${__dirname}/index2.html`);

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
        {role: 'undo'},
        {role: 'redo'},
        {type: 'separator'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'pasteandmatchstyle'},
        {role: 'delete'},
        {role: 'selectall'}
      ]
    },
    {
      label: 'Editar diferente',
      submenu: [
        {
          label: 'Desfazer',
          role: 'undo'
        },
        {
          label: 'Refazer',
          role: 'redo'
        },
        {type: 'separator'},
        {
          label: 'Cortar',
          role: 'cut'
        }
      ]
    },
    {
      label: 'Ações',
      submenu: [
        {
          label: 'Mensagem no log',
          click () { console.log('Funcionando!') }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);

});
