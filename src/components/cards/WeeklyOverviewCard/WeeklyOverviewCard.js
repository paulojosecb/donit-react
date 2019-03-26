import React from 'react';

import VerticalProgressBar from '../../VerticalProgressBar/VerticalProgressBar';

import './WeeklyOverviewCard.css';

const WeeklyOverviewCard = () => {
  return (
    <div className="weeklyOverview-card">
      <div className="weeklyOverview-card__comment">
        5 things per day is your daily average this week
      </div>
      <div className="weeklyOverview-card__bars">
        <VerticalProgressBar label="Mon" />
        <VerticalProgressBar label="Tue" />
        <VerticalProgressBar label="Wed" />
        <VerticalProgressBar label="Thu" />
        <VerticalProgressBar label="Fri" />
        <VerticalProgressBar label="Sat" />
        <VerticalProgressBar label="Sun" />
      </div>
    </div>
  );
};

export default WeeklyOverviewCard;
