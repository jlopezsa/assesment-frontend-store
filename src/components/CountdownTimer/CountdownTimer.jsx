import React from 'react';
import PropTypes from 'prop-types';
import { useCountdown } from '../useCountdown';
import './CountdownTimer.scss';

function DateTimeDisplay({ value, type }) {
  return (
    <div>
      <p>
        {value}
        {type !== ' ' ? ':' : ''}
      </p>
      <span>{type}</span>
    </div>
  );
}

function ShowCounter({ hours, minutes, seconds }) {
  return (
    <div className="show-counter">
      <DateTimeDisplay value={hours} type="" />
      <DateTimeDisplay value={minutes} type="" />
      <DateTimeDisplay value={seconds} type={' '} />
    </div>
  );
}

function CountdownTimer({ targetDate, setIsTimeOver }) {
  const [hours, minutes, seconds] = useCountdown(targetDate);
  if (hours + minutes + seconds <= 0) {
    setIsTimeOver(true);
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please select another product!</p>
      </div>
    );
  }
  return (
    <ShowCounter
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
}

DateTimeDisplay.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

ShowCounter.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

CountdownTimer.propTypes = {
  targetDate: PropTypes.number.isRequired,
  setIsTimeOver: PropTypes.func.isRequired,
};

export default CountdownTimer;
