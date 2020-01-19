/* Global State Management */
import { useGlobalState } from '../store';
import React from 'react';
import { ONE_TOMAGOTCHI_HOUR } from '../config';

const Status = () => {
  const [age, setAge] = useGlobalState('age');
  const [health] = useGlobalState('health');
  const [sleepy, setSleepy] = useGlobalState('sleepy');
  const [wantToPoop, setWantToPoop] = useGlobalState('wantToPoop');
  const [hunger, setHunger] = useGlobalState('hunger');
  const [, setEmotion] = useGlobalState('emotion');

  setTimeout(() => {
    if (sleepy < 100) {
      setSleepy(sleepy + 5);
    }
    if (wantToPoop < 100) {
      setWantToPoop(wantToPoop + 5);
    }
    if (hunger < 100) {
      setHunger(hunger + 20);
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

  return (
    <section>
      <ul className="list-group">
        <li className="list-group-item">Health: {health} %</li>
        <li className="list-group-item">Hunger: {hunger} %</li>
        <li className="list-group-item">Sleepy: {sleepy} %</li>
        <li className="list-group-item">WantToPoop: {wantToPoop} %</li>
        <li className="list-group-item">Health: {health} %</li>
        <li className="list-group-item">
          Age: {age.days} day(s), {age.hours} hour(s)
        </li>
      </ul>
    </section>
  );
};

export default Status;
