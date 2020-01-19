/* Global State Management */
import { useGlobalState } from '../store/index';
import React from 'react';

function getEmotions(type) {
  switch (type) {
    case 'hungry':
      return {
        emoji: './asset/images/emoji/026-tired.svg',
        text: 'I am hungry'
      };
    case 'happy':
      return {
        emoji: './asset/images/emoji/006-full.svg',
        text: 'I am happy'
      };
    default:
      return null;
  }
}

const Emoji = () => {
  // const [health] = useGlobalState('health');
  // const [sleepy] = useGlobalState('sleepy');
  // const [wantToPoop] = useGlobalState('wantToPoop');
  // const [age] = useGlobalState('age');
  // const [hunger] = useGlobalState('age');
  const emotion = getEmotions('hungry');
  return (
    <div>
      <style jsx="true">{`
        .emoji {
          height: 150px;
          width: 150px;
        }
      `}</style>
      <div className="center-text-align">
        <img src={emotion.emoji} className="emoji" alt="" />
        <h1>{emotion.text}</h1>
      </div>
    </div>
  );
};

export default Emoji;
