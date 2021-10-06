const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  if (isDev) {
    window.loadURL("http://localhost:3000");
  }
};

const runApp = async () => {
  await app.whenReady();
  createWindow();
};
runApp();

export {};
