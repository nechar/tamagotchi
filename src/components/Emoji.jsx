/* Global State Management */
import { useGlobalState } from '../store/index';
import React from 'react';
import { getEmoji } from '../utils/EmojiHelper';

const Emoji = () => {
  let emoji;

  const [health] = useGlobalState('health');
  const [sleepy] = useGlobalState('sleepy');
  const [hunger] = useGlobalState('hunger');

  if (health === 0) {
    emoji = getEmoji('died');
  } else if (hunger <= 10) {
    emoji = getEmoji('eating');
  } else if (sleepy <= 20) {
    emoji = getEmoji('sleeping');
  } else if (hunger >= 80) {
    emoji = getEmoji('hungry');
  } else if (sleepy >= 80) {
    emoji = getEmoji('sleepy');
  } else {
    emoji = getEmoji('happy');
  }

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
