/* Global State Management */
import { useGlobalState } from '../store';
import React, { useEffect } from 'react';
import { ONE_TOMAGOTCHI_HOUR } from '../config';
let hungerTimeOut, sleepTimeOut, ageTimeOut;

const Status = () => {
  const [age, setAge] = useGlobalState('age');
  const [health, setHealth] = useGlobalState('health');
  const [sleepy, setSleepy] = useGlobalState('sleepy');
  const [wantToPoop] = useGlobalState('wantToPoop');
  const [hunger, setHunger] = useGlobalState('hunger');
  const [actionTaken, setActionTaken] = useGlobalState('actionTaken');

  // Whenever there is a change in the hunger, the following block of code runs.
  useEffect(() => {
    hungerTimeOut = setTimeout(() => {
      if (hunger < 100) {
        setHunger(hunger + 10);
      }
    }, ONE_TOMAGOTCHI_HOUR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hunger]);

  // Whenever there is a change in the sleepy, the following block of code runs.
  useEffect(() => {
    sleepTimeOut = setTimeout(() => {
      if (sleepy < 100) {
        setSleepy(sleepy + 5);
      } else {
        setSleepy(0);
      }
    }, ONE_TOMAGOTCHI_HOUR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sleepy]);

  // Whenever there is a change in the age, the following block of code runs.
  useEffect(() => {
    ageTimeOut = setTimeout(() => {
      if (age.hours < 24) {
        setAge({ ...age, hours: age.hours + 1 });
      } else {
        setAge({ days: age.days + 1, hours: 0 });
      }
      if (hunger === 100) {
        setHealth(health - 10);
      } else if (health < 100) {
        setHealth(health + 0.25);
      }
    }, ONE_TOMAGOTCHI_HOUR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age]);

  // Whenever there is an action, the following block of code runs.
  useEffect(() => {
    if (actionTaken === 'feedMe') {
      clearTimeout(hungerTimeOut);
      setActionTaken(null);
    }
    if (actionTaken === 'putMeToBed') {
      clearTimeout(sleepTimeOut);
      setActionTaken(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionTaken]);

  if (health === 0) {
    clearTimeout(hungerTimeOut);
    clearTimeout(sleepTimeOut);
    clearTimeout(ageTimeOut);
  }

  return (
    <section>
      <ul className="list-group">
        <li className="list-group-item">Health: {health} %</li>
        <li className="list-group-item">Hunger: {hunger} %</li>
        <li className="list-group-item">Sleepy: {sleepy} %</li>
        <li className="list-group-item">WantToPoop: {wantToPoop} %</li>
        <li className="list-group-item">
          Age: {age.days} day(s), {age.hours} hour(s)
        </li>
      </ul>
    </section>
  );
};

export default Status;
