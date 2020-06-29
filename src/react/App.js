import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { channels } from '../shared/constants';
const { ipcRenderer } = window;

function App() {
  const [appInfo, setAppInfo] = useState({});

  ipcRenderer.send(channels.APP_INFO);
  ipcRenderer.on(channels.APP_INFO, (event, arg) => {
    ipcRenderer.removeAllListeners(channels.APP_INFO);
    const { appName, appVersion } = arg;
    setAppInfo({ appName, appVersion });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {appInfo.appName} version {appInfo.appVersion}
        </p>
      </header>
    </div>
  );
}

export default App;
