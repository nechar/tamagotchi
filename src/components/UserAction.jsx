import React from 'react';
import Button from 'react-bootstrap/Button';

/* Global State Management */
import { useGlobalState } from '../store';

const UserAction = () => {
  const [, setSleepy] = useGlobalState('sleepy');
  const [, setHunger] = useGlobalState('hunger');
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
    <div>
      <div className="center-text-align">
        <Button className="m-1" onClick={feedMe}>
          Feed me
        </Button>
        <br />
        <Button className="m-1" onClick={putMeToBed}>
          Put me to bed
        </Button>
      </div>
    </div>
  );
};

export default UserAction;
