/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { app, BrowserWindow, Menu } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow | null;

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(extensions.map(name => installer.default(installer[name], forceDownload))).catch(console.log);
};

const createWindow = async () => {
  if (process.env.NODE_ENV !== 'production') {
    await installExtensions();
  }

  win = new BrowserWindow({ width: 1600, height: 1200 });

  if (process.env.NODE_ENV !== 'production') {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
    win.loadURL(`http://localhost:2003`);
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  }

  const shell = require('electron').shell;
  const dialog = require('electron').remote;
  const menu = Menu.buildFromTemplate([
    {
      label: 'TrueBlocks',
      submenu: [
        {
          label: 'Open website',
          click() {
            shell.openExternal('http://trueblocks.io');
          },
          accelerator: 'CmdOrCtrl+O'
        },
        {
          label: 'File Save',
          click() {
            dialog.showSaveDialog('test');
          }
        },
        {
          label: 'Exit',
          click() {
            app.quit();
          },
          accelerator: 'CmdOrCtrl+Q'
        }
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
