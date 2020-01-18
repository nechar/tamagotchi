import React from 'react';
import './App.css';
import Control from './components/Control.jsx';
import Status from './components/Status.jsx';
import Display from './components/Display.jsx';

/* Global State Management */
import { GlobalStateProvider } from './store/index';

const App = () => {
  return (
    <GlobalStateProvider>
      <div className="m-2">
        <div className="row">
          <div className="col">
            <Status />
          </div>
          <div className="col">
            <Display />
          </div>
          <div className="col">
            <Control />
          </div>
        </div>
      </div>
    </GlobalStateProvider>
  );
};

export default App;
