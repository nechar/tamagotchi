/* Package Import */
import { createGlobalState } from 'react-hooks-global-state';

/* Exports */
export const { GlobalStateProvider, useGlobalState } = createGlobalState({
  hunger: 60, // percent
  sleepy: 25, // percent
  wantToPoop: 40, // percent
  health: 100, // percent
  emotion: 'happy',
  age: {
    hours: 0,
    days: 0
  },
  actionTaken: null
});
