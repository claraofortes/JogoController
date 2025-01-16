const { channel } = require('diagnostics_channel');
const {contextBridge, ipcRenderer} = require('electron');
const os = require('os');

const platformService = require('./app/src/db/services/platformService')

contextBridge.exposeInMainWorld('electron',{
    homeDir: () => os.homedir(),
    osVersion: ()=> os.version(),
    arch: () => os.arch
});

contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => ipcRenderer.send(channel, data),
    on: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args)),
});

const getAllPlatform = () =>{
    return platformService.getAllPlatform();
}

contextBridge.exposeInMainWorld('api',{
    getAllPlatform: getAllPlatform
});