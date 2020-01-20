import React from 'react';
import Button from 'react-bootstrap/Button';

/* Global State Management */
import { useGlobalState } from '../store';

const UserAction = () => {
  const [sleepy, setSleepy] = useGlobalState('sleepy');
  const [hunger, setHunger] = useGlobalState('hunger');
  const [, setActionTaken] = useGlobalState('actionTaken');

  function feedMe() {
    setActionTaken('feedMe');
    setTimeout(() => {
      setHunger(0);
    }, 1);
  }

  function putMeToBed() {
    setActionTaken('putMeToBed');
    setTimeout(() => {
      setSleepy(0);
    }, 1);
  }

  return (
    <div className="mt-5">
      <h1>Take an action:</h1>
      <div className="row center-text-align">
        <div className="col">
          <Button
            variant={hunger >= 80 ? 'danger' : 'light'}
            block
            className="m-1"
            onClick={feedMe}
          >
            Feed me
          </Button>
        </div>
        <div className="col">
          <Button
            variant={sleepy >= 80 ? 'danger' : 'light'}
            block
            className="m-1"
            onClick={putMeToBed}
          >
            Put me to bed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserAction;
