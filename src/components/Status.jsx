/* Global State Management */
import { useGlobalState } from '../store/index';
import React from 'react';

const Status = () => {
  const [health] = useGlobalState('health');
  const [sleepy] = useGlobalState('sleepy');
  const [wantToPoop] = useGlobalState('wantToPoop');
  const [age] = useGlobalState('age');
  const [hungry] = useGlobalState('age');
  return (
    <section>
      <ul className="list-group">
        <li className="list-group-item">Health: {health}</li>
        <li className="list-group-item">Hungry: {hungry}</li>
        <li className="list-group-item">Sleepy: {sleepy.toString()}</li>
        <li className="list-group-item">WantToPoop: {wantToPoop.toString()}</li>
        <li className="list-group-item">Health: {health}</li>
        <li className="list-group-item">Age: {age}</li>
      </ul>
    </section>
  );
};

export default Status;
