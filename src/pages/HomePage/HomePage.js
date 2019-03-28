import React from 'react';

import Header from '../../components/Header/Header';
import OverviewCard from '../../components/cards/OverviewCard/OverviewCard';
import List from '../../components/lists/List/List';
import DoneItemCard from '../../components/cards/DoneItemCard/DoneItemCard';

const HomePage = () => {
  return (
    <div>
      <div className="row">
        <Header showProfileImage />
      </div>

      <div className="row">
        <OverviewCard />
      </div>

      <div className="row">
        <List listHeader="These are the things you’ve done today">
          <DoneItemCard />
          <DoneItemCard />
          <DoneItemCard />
        </List>
      </div>
    </div>
  );
};

export default HomePage;
