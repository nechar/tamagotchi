/* Package Import */
import { createGlobalState } from 'react-hooks-global-state';

/* Custom Data Import */
import { InitialGlobalState } from '../store/InitialGlobalState';

/* Exports */
export const { GlobalStateProvider, useGlobalState } = createGlobalState(
  InitialGlobalState
);
