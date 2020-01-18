/* Global State Management */
// import { useGlobalState } from '../store/index';
import React from 'react';

const Emoji = () => {
  // const [health] = useGlobalState('health');
  // const [sleepy] = useGlobalState('sleepy');
  // const [wantToPoop] = useGlobalState('wantToPoop');
  // const [age] = useGlobalState('age');
  // const [hunger] = useGlobalState('age');

  return (
    <div>
      <style jsx="true">{`
        .emoji {
          height: 150px;
          width: 150px;
        }
      `}</style>
      <div className="center-text-align">
        <img src="./asset/images/emoji/006-full.svg" className="emoji" alt="" />
        <h1>I am hungry</h1>
      </div>
    </div>
  );
};

export default Emoji;
