const { app, BrowserWindow } = require('electron');

let win;

let _public = "./public/";

function createWindow(){
    win = new BrowserWindow({width: 1280, height: 720});

    win.loadFile("index.html");

    //win.webContents.openDevTools();

    win.setMenu(null);

    win.on('closed', ()=>{
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
    if(process.platform !== "darwin") app.quit();
});

app.on('activate', ()=>{
    if(win === null) createWindow();
});