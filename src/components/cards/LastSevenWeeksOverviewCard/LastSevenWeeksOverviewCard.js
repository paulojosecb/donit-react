import React from 'react';

import VerticalProgressBar from '../../VerticalProgressBar/VerticalProgressBar';

import './LastSevenWeeksOverviewCard.css';

const LastSevenWeeksOverviewCard = () => {
  return (
    <div className="lastSevenWeeksOverviewCard">
      <div className="lastSevenWeeksOverviewCard__comment">
        34 things / week is your weekly average in the last 7 weeks
      </div>
      <div className="lastSevenWeeksOverviewCard__bars">
        <VerticalProgressBar />
        <VerticalProgressBar />
        <VerticalProgressBar />
        <VerticalProgressBar />
        <VerticalProgressBar />
        <VerticalProgressBar />
        <VerticalProgressBar label="Last" />
      </div>
    </div>
  );
};

export default LastSevenWeeksOverviewCard;
