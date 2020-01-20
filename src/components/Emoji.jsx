/* Global State Management */
import { useGlobalState } from '../store/index';
import React from 'react';
import { getEmoji } from '../utils/EmojiHelper';
import { TOMAGOTCHI_LIFE_EXPECTANCY } from '../config';

const Emoji = () => {
  let emoji;

  const [health] = useGlobalState('health');
  const [age] = useGlobalState('age');
  const [sleepy] = useGlobalState('sleepy');
  const [hunger] = useGlobalState('hunger');

  if (age.days >= TOMAGOTCHI_LIFE_EXPECTANCY) {
    emoji = getEmoji('died-from-age');
  } else if (health === 0) {
    emoji = getEmoji('died-from-hunger');
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
