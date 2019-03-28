import React from 'react';

import '../../main.scss';

import Header from '../../components/Header/Header';
import WeeklyOverviewCard from '../../components/cards/WeeklyOverviewCard/WeeklyOverviewCard';
import OverviewCard from '../../components/cards/OverviewCard/OverviewCard';
import LastSevenWeeksOverviewCard from '../../components/cards/LastSevenWeeksOverviewCard/LastSevenWeeksOverviewCard';
import List from '../../components/lists/List/List';

const OverviewPage = () => {
  return (
    <div>
      <div className="row">
        <Header showProfileImage={false} />
      </div>

      <div className="row">
        <List listHeader="This is your overview screen">
          <OverviewCard />
          <WeeklyOverviewCard />
          <LastSevenWeeksOverviewCard />
        </List>
      </div>
    </div>
  );
};

export default OverviewPage;
