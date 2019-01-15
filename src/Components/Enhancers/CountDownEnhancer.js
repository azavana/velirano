import { withState, withProps } from 'recompose';

const heading = "Fotoana mbola ananantsika hatramin'ny 2024";

const countdown = {
  days: 0,
  hours: 0,
  min: 0,
  sec: 0
};

const calculateCountdown = (endDate) => {
  const timeLeft = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0
  };

  let delta = Math.abs(endDate - new Date()) / 1000;

  timeLeft.days = Math.floor(delta / 86400);
  delta -= timeLeft.days * 86400;

  timeLeft.hours = Math.floor(delta / 3600) % 24;
  delta -= timeLeft.hours * 3600;

  timeLeft.min = Math.floor(delta / 60) % 60;
  delta -= timeLeft.min * 60;

  timeLeft.sec = delta % 60;

  return timeLeft;
}

export const withHeading = withState('heading', 'setHeading', heading);
export const withDate = withState('date', 'setDate', new Date(2024, 0, 19));
export const withCountdown = withState('countdown', 'setCountdown', countdown);
export const withCalculateCountdown = withProps(props => ({ calculateCountdown }));
