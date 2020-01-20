import React from 'react';
import { getEmoji } from '../utils/EmojiHelper';
import { TOMAGOTCHI_LIFE_EXPECTANCY } from '../config';

/* Global State Management */
import { useGlobalState } from '../store/index';

const Emoji = () => {
  let emoji;

  const [health] = useGlobalState('health');
  const [age] = useGlobalState('age');
  const [sleepy] = useGlobalState('sleepy');
  const [hunger] = useGlobalState('hunger');
  const [wantToPoop] = useGlobalState('wantToPoop');

  // Setting up emoji face and based on the current status of Tomagotchi
  // The top ones have the highest priority and the bottom ones have the lowest
  if (age.days >= TOMAGOTCHI_LIFE_EXPECTANCY) {
    emoji = getEmoji('died-from-age');
  } else if (health === 0) {
    emoji = getEmoji('died-from-hunger');
  } else if (wantToPoop <= 10) {
    emoji = getEmoji('pooping');
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
          width: 70%;
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
