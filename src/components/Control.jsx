import React from 'react';
import Button from 'react-bootstrap/Button';

/* Global State Management */
import { useGlobalState } from '../store';

const Control = () => {
  const [, setSleepy] = useGlobalState('sleepy');
  const [, setHunger] = useGlobalState('hunger');
  const [emotion, setEmotion] = useGlobalState('emotion');
  const [actionTaken, setActionTaken] = useGlobalState('actionTaken');

  function feedMe() {
    // alert('That was yummy! Thank you!');
    setActionTaken(true);
    setTimeout(() => {
      setHunger(0);
    }, 1000);
    setEmotion('just-eaten');
  }

  function putMeToBed() {
    setActionTaken(true);
    setTimeout(() => {
      setSleepy(0);
    }, 1000);
    setEmotion('sleeping');
    // alert('Goodnight, Owen! Have a sweet dream!');
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
