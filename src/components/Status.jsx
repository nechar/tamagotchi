import React, { useEffect } from 'react';
import { ONE_TOMAGOTCHI_HOUR, TOMAGOTCHI_LIFE_EXPECTANCY } from '../config';
import ProgressBar from 'react-bootstrap/ProgressBar';

/* Global State Management */
import { useGlobalState } from '../store';

let hungerTimeOut, sleepTimeOut, ageTimeOut, healthTimeout, wantToPoopTimeOut;

const Status = () => {
  const [age, setAge] = useGlobalState('age');
  const [health, setHealth] = useGlobalState('health');
  const [sleepy, setSleepy] = useGlobalState('sleepy');
  const [wantToPoop, setWantToPoop] = useGlobalState('wantToPoop');
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

  // Whenever there is a change in the sleepy, the following block of code runs.
  useEffect(() => {
    wantToPoopTimeOut = setTimeout(() => {
      if (wantToPoop < 100) {
        setWantToPoop(wantToPoop + 5);
      } else {
        setWantToPoop(0);
      }
    }, ONE_TOMAGOTCHI_HOUR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wantToPoop]);

  // Whenever there is a change in the age, the following block of code runs.
  useEffect(() => {
    ageTimeOut = setTimeout(() => {
      if (age.hours < 24) {
        setAge({ ...age, hours: age.hours + 1 });
      } else {
        setAge({ days: age.days + 1, hours: 0 });
      }
    }, ONE_TOMAGOTCHI_HOUR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age]);

  // Whenever there is an age, the following block of code runs.
  useEffect(() => {
    healthTimeout = setTimeout(() => {
      if (hunger === 100) {
        if (health < 10) {
          setHealth(0);
        } else {
          setHealth(health - 10);
        }
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
      clearTimeout(healthTimeout);
      setActionTaken(null);
    }
    if (actionTaken === 'putMeToBed') {
      clearTimeout(sleepTimeOut);
      setActionTaken(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionTaken]);

  // In any case, if Tomagotchi dies for any reason, we stop all the timers which are counting down
  if (health <= 0 || age.days >= TOMAGOTCHI_LIFE_EXPECTANCY) {
    clearTimeout(hungerTimeOut);
    clearTimeout(sleepTimeOut);
    clearTimeout(ageTimeOut);
    clearTimeout(wantToPoopTimeOut);
  }

  return (
    <section>
      <h2>Status:</h2>
      <ul className="list-group">
        <li className="list-group-item">
          Health: {health} %
          <br />
          <ProgressBar
            now={health}
            variant={
              health <= 20 ? 'danger' : health <= 90 ? 'warning' : 'primary'
            }
          />
        </li>
        <li className="list-group-item">
          Hunger: {hunger} %
          <br />
          <ProgressBar
            now={hunger}
            variant={hunger >= 80 ? 'danger' : 'primary'}
          />
        </li>
        <li className="list-group-item">
          Sleepy: {sleepy} %
          <br />
          <ProgressBar
            now={sleepy}
            variant={sleepy >= 80 ? 'danger' : 'primary'}
          />
        </li>
        <li className="list-group-item">
          WantToPoop: {wantToPoop} %
          <br />
          <ProgressBar
            now={wantToPoop}
            variant={wantToPoop >= 80 ? 'danger' : 'primary'}
          />
        </li>
        <li className="list-group-item">
          Age: {age.days} day(s), {age.hours} hour(s)
          <br />
          <ProgressBar
            now={age.days + age.hours / 24}
            min={0}
            max={TOMAGOTCHI_LIFE_EXPECTANCY}
            variant={
              age.days >= TOMAGOTCHI_LIFE_EXPECTANCY * 0.7
                ? 'danger'
                : 'primary'
            }
          />
        </li>
      </ul>
    </section>
  );
};

export default Status;
