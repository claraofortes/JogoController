const {app, BrowserWindow, ipcMain} = require('electron');
const url = require('url');
const path = require('path');

const platformService = require('./app/src/db/services/platformService')


let mainWindow; 
function createMainWindow(){
    mainWindow = new BrowserWindow({
        title:'Jogo Controller',
        autoHideMenuBar: true,
        show: false,
        frame: false,
        icon: path.join(__dirname, '/app/public/img/icone.png'),
        webPreferences:{
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.maximize();
    mainWindow.show();

    const startUrl = url.format({
        pathname: path.join(__dirname,'./app/build/index.html'),
        protocol: 'file'
    });

    mainWindow.webContents.openDevTools()
    //mainWindow.loadURL(startUrl);
    mainWindow.loadURL('http://localhost:3000/');
}

ipcMain.on('manualClose', () => {
    app.quit();
});

ipcMain.on('manualMinimize', () => {
    mainWindow.minimize();
});
ipcMain.on('manualMaximize', (e, maximizeToggle) => {
    if (maximizeToggle) {
        mainWindow.unmaximize();
    } else {
        mainWindow.maximize();
    }
});

app.whenReady().then(() => {
    ipcMain.handle('platform:getAll', async () => {
        return platformService.getAllPlatform();
    });
    
    createMainWindow();
    app.on('activate', () => {
        if (mainWindow === null) createMainWindow();
    });
})
.catch(console.log);