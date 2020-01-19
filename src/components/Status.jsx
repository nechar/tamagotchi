/* Global State Management */
import { useGlobalState } from '../store';
import React, { useEffect } from 'react';
import { ONE_TOMAGOTCHI_HOUR } from '../config';
let defaultTimeout, sleepTimeOut;

const Status = () => {
  const [age, setAge] = useGlobalState('age');
  const [health] = useGlobalState('health');
  const [sleepy, setSleepy] = useGlobalState('sleepy');
  const [wantToPoop, setWantToPoop] = useGlobalState('wantToPoop');
  const [hunger, setHunger] = useGlobalState('hunger');
  const [, setEmotion] = useGlobalState('emotion');
  const [actionTaken, setActionTaken] = useGlobalState('actionTaken');

  useEffect(() => {
    defaultTimeout = setTimeout(() => {
      if (wantToPoop < 100) {
        setWantToPoop(wantToPoop + 5);
      }
      if (hunger < 100) {
        setHunger(hunger + 10);
      }
      if (age.hours < 24) {
        setAge({ ...age, hours: age.hours + 1 });
      } else {
        setAge({ days: age.days + 1, hours: 0 });
      }
      if (hunger >= 80) {
        setEmotion('hungry');
      } else if (sleepy >= 80) {
        setEmotion('sleepy');
      } else {
        setEmotion('happy');
      }
    }, ONE_TOMAGOTCHI_HOUR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hunger]);

  useEffect(() => {
    sleepTimeOut = setTimeout(() => {
      if (sleepy < 100) {
        setSleepy(sleepy + 5);
      }
    }, ONE_TOMAGOTCHI_HOUR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sleepy]);

  useEffect(() => {
    if (actionTaken === 'feedMe') {
      clearTimeout(defaultTimeout);
      setActionTaken(null);
    }
    if (actionTaken === 'putMeToBed') {
      clearTimeout(sleepTimeOut);
      setActionTaken(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionTaken]);

  return (
    <section>
      <ul className="list-group">
        <li className="list-group-item">Health: {health} %</li>
        <li className="list-group-item">Hunger: {hunger} %</li>
        <li className="list-group-item">Sleepy: {sleepy} %</li>
        <li className="list-group-item">WantToPoop: {wantToPoop} %</li>
        <li className="list-group-item">
          Age: {age.days} day(s), {age.hours} hour(s)
        </li>
      </ul>
    </section>
  );
};

export default Status;
