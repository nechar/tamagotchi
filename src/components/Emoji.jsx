/* Global State Management */
import { useGlobalState } from '../store/index';
import React from 'react';

function getEmoji(emotion) {
  switch (emotion) {
    case 'hungry':
      return {
        emoji: './asset/images/emoji/026-tired.svg',
        text: 'I am hungry'
      };
    case 'want-to-poop':
      return {
        emoji: './asset/images/emoji/026-tired.svg',
        text: 'I want to go to the bathroom'
      };
    case 'sleepy':
      return {
        emoji: './asset/images/emoji/026-tired.svg',
        text: 'I am sleepy'
      };

    case 'sleeping':
      return {
        emoji: './asset/images/emoji/020-sleeping.png.svg',
        text: 'Good Night!'
      };
    case 'unwell':
      return {
        emoji: './asset/images/emoji/003-dizzy.svg',
        text: `I feel unwell`
      };
    case 'happy':
      return {
        emoji: './asset/images/emoji/022-smiling face.svg',
        text: 'I am happy'
      };
    default:
      return null;
  }
}

const Emoji = () => {
  const [emotion] = useGlobalState('emotion');
  // const [sleepy] = useGlobalState('sleepy');
  // const [wantToPoop] = useGlobalState('wantToPoop');
  // const [age] = useGlobalState('age');
  // const [hunger] = useGlobalState('age');
  const emoji = getEmoji(emotion);
  return (
    <div>
      <style jsx="true">{`
        .emoji {
          height: 150px;
          width: 150px;
        }
      `}</style>
      <div className="center-text-align">
        <img src={emoji.emoji} className="emoji" alt="" />
        <h1>{emoji.text}</h1>
      </div>
    </div>
  );
};

export default Emoji;
