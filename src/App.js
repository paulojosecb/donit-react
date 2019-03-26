import React, { Component } from 'react';

import './main.scss';

import DoneItemCard from './components/cards/DoneItemCard/DoneItemCard';
import Header from './components/Header/Header';
import OverviewCard from './components/cards/OverviewCard/OverviewCard';
import WeeklyOverviewCard from './components/cards/WeeklyOverviewCard/WeeklyOverviewCard';
import LastSevenWeeksOverviewCard from './components/cards/LastSevenWeeksOverviewCard/LastSevenWeeksOverviewCard';

import List from './components/lists/List/List';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Header />
        </div>

        <div className="row">
          <OverviewCard />
        </div>

        <div className="row">
          <WeeklyOverviewCard />
        </div>

        <div className="row">
          <LastSevenWeeksOverviewCard />
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
  }
}

export default App;
