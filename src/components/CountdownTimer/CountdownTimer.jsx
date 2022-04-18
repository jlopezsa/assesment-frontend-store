/* eslint-disable */

import React from 'react';
import { useCountdown } from '../useCountdown';
import './CountdownTimer.scss'
const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select another product!</p>
    </div>
  );
};

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}{type !== ' '?':':''}</p>
      <span>{type}</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
        <DateTimeDisplay value={days} type={''} isDanger={days <= 3} />
        <DateTimeDisplay value={hours} type={''} isDanger={false} />
        <DateTimeDisplay value={minutes} type={''} isDanger={false} />
        <DateTimeDisplay value={seconds} type={' '} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate, setIsTimeOver }) => {

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    setIsTimeOver(true);
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
