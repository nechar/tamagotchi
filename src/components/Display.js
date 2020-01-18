/* Global State Management */
import { useGlobalState } from '../store/index';
import React from 'react';

const Display = () => {
  const [health] = useGlobalState('health');
  return <div>{health}</div>;
};

export default Display;
