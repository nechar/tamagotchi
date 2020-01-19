/* Global State Management */
import { useGlobalState } from '../store/index';
import React from 'react';

function getEmoji(emotion) {
  switch (emotion) {
    case 'hungry':
      return {
        emoji: './asset/images/emoji/028-winking face.svg',
        text: 'I am hungry'
      };
    case 'just-eaten':
      return {
        emoji: './asset/images/emoji/006-full.svg',
        text: 'Yummy!'
      };
    case 'want-to-poop':
      return {
        emoji: './asset/images/emoji/003-dizzy.svg',
        text: 'I want to go to the bathroom'
      };
    case 'sleepy':
      return {
        emoji: './asset/images/emoji/026-tired.svg',
        text: 'I am sleepy'
      };
    case 'sleeping':
      return {
        emoji: './asset/images/emoji/020-sleeping.svg',
        text: 'Good Night!'
      };
    case 'unwell':
      return {
        emoji: './asset/images/emoji/008-vomiting.svg',
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
