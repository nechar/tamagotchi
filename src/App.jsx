import React from 'react';
import UserAction from './components/UserAction.jsx';
import Status from './components/Status.jsx';
import Emoji from './components/Emoji.jsx';

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
            <Emoji />
          </div>
          <div className="col">
            <UserAction />
          </div>
        </div>
      </div>
    </GlobalStateProvider>
  );
};

export default App;
