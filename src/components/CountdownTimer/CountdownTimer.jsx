/* eslint-disable */

import React from 'react';
import { useCountdown } from '../useCountdown';
import './CountdownTimer.scss'

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div>
      <p>{value}{type !== ' '?':':''}</p>
      <span>{type}</span>
    </div>
  );
};

const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
        <DateTimeDisplay value={hours} type={''} />
        <DateTimeDisplay value={minutes} type={''} />
        <DateTimeDisplay value={seconds} type={' '} />
    </div>
  );
};

const CountdownTimer = ({ targetDate, setIsTimeOver }) => {

  const [hours, minutes, seconds] = useCountdown(targetDate);
  if (hours + minutes + seconds <= 0) {
    setIsTimeOver(true);
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please select another product!</p>
      </div>
    );
  } else {
    return (
      <ShowCounter
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
