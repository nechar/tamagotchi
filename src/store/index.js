/* Package Import */
import { createGlobalState } from 'react-hooks-global-state';

/* Exports */
export const { GlobalStateProvider, useGlobalState } = createGlobalState({
  hunger: 60, // percent
  sleepy: 0, // percent
  wantToPoop: 50, // percent
  health: 100, // percent
  emotion: 'happy',
  age: {
    hours: 0,
    days: 0
  }
});
