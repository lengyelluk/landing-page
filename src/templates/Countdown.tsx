import React, { ReactNode } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

type ICountdownProps = {
  isPlaying?: boolean;
  size?: number;
  strokeWidth?: number;
  children?: ReactNode;
};


const renderTime = (dimension: string, time: number) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds:Function = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes:Function = (time: number) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours:Function = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays:Function = (time: number) => (time / daySeconds) | 0;

const Countdown = (props: ICountdownProps) => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 2592000; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const color1: string = '#4AA8D5';
  const color2: string = '#337A9B';
  const color3: string = '#3884A7';
  //className="flex sm:flex-row flex-col sm:justify-center space-x-3"
  return (
    <div className="flex flex-wrap justify-center space-x-3">
      <CountdownCircleTimer
        {...props}
        colors={color1}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime }) => 
          renderTime("dní", getTimeDays(daysDuration - elapsedTime!))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...props}
        colors={color2}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime:number) => [
          remainingTime - totalElapsedTime > hourSeconds, 1
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("hodín", getTimeHours(daySeconds - elapsedTime!))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...props}
        colors={color3}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime:number) => [
          remainingTime - totalElapsedTime > minuteSeconds, 1
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("minút", getTimeMinutes(hourSeconds - elapsedTime!))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer

        {...props}
        colors={color2}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime:number) => [
          remainingTime - totalElapsedTime > 0, 1
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("sekúnd", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
    </div>
  );
}

export { Countdown }