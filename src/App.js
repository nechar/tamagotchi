import React from 'react';
import './App.css';
import Control from './components/Control.jsx';
import Status from './components/Status.jsx';

/* Global State Management */
import { GlobalStateProvider } from './store/index';

const App = () => {
  return (
    <GlobalStateProvider>
      <div className="m-2">
        <Control></Control>
        <Status></Status>
      </div>
    </GlobalStateProvider>
  );
};

export default App;
