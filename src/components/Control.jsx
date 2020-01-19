import React from 'react';
import Button from 'react-bootstrap/Button';

/* Global State Management */
import { useGlobalState } from '../store';

const Control = () => {
  const [, setSleepy] = useGlobalState('sleepy');
  const [, setHunger] = useGlobalState('hunger');

  function feedMe() {
    setHunger(0);
  }

  function putMeToBed() {
    setSleepy(0);
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

export default Control;
