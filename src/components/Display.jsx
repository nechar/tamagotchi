/* Global State Management */
// import { useGlobalState } from '../store/index';
import React from 'react';

const Display = () => {
  // const [health] = useGlobalState('health');
  // const [sleepy] = useGlobalState('sleepy');
  // const [wantToPoop] = useGlobalState('wantToPoop');
  // const [age] = useGlobalState('age');
  // const [hungry] = useGlobalState('age');

  return (
    <div>
      <style jsx>{`
        .emoji {
          height: 150px;
          width: 150px;
        }
      `}</style>
      <img src="./asset/images/emoji/006-full.svg" className="emoji" alt="" />
      <h1>I am hungry</h1>
    </div>
  );
};

export default Display;
