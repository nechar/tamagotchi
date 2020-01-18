import React from 'react';
import './App.css';
import Control from './components/Control';
import Display from './components/Display';

/* Global State Management */
import { GlobalStateProvider } from './store/index';

const App = () => {
  return (
    <GlobalStateProvider>
      <Control></Control>
      <Display></Display>
    </GlobalStateProvider>
  );
};

export default App;
