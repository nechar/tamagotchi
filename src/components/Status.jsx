/* Global State Management */
import { useGlobalState } from '../store';
import React from 'react';

const Status = () => {
  const [age, setAge] = useGlobalState('age');
  const [health, setHealth] = useGlobalState('health');
  const [sleepy, setSleepy] = useGlobalState('sleepy');
  const [wantToPoop, setWantToPoop] = useGlobalState('wantToPoop');
  const [hunger, sethunger] = useGlobalState('hunger');

  setTimeout(() => {
    setAge(age + 1);
  }, 1000 * 10);

  return (
    <section>
      <ul className="list-group">
        <li className="list-group-item">Health: {health} %</li>
        <li className="list-group-item">hunger: {hunger} %</li>
        <li className="list-group-item">Sleepy: {sleepy} %</li>
        <li className="list-group-item">WantToPoop: {wantToPoop} %</li>
        <li className="list-group-item">Health: {health} %</li>
        <li className="list-group-item">Age: {age} days</li>
      </ul>
    </section>
  );
};

export default Status;
