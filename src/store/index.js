/* Package Import */
import { createGlobalState } from 'react-hooks-global-state';

/* Exports */
export const { GlobalStateProvider, useGlobalState } = createGlobalState({
  hunger: 0,
  sleepy: 0,
  wantToPoop: 0,
  health: 100, // percent
  age: 0
});
