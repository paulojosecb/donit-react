import React from 'react';

import './OverviewCard.css';

const OverviewCard = () => {
  return (
    <div className="overview-card">
      <div className="overview-card__number">5</div>
      <div className="overview-card__comment">
        is the number of things you’ve done so far. Keep it up!{' '}
        <span role="img" aria-label="Congrats">
          🎉🎉
        </span>
      </div>
    </div>
  );
};

export default OverviewCard;
