import React from 'react';

import '../../main.scss';

import Header from '../../components/Header/Header';
import WeeklyOverviewCard from '../../components/cards/WeeklyOverviewCard/WeeklyOverviewCard';
import OverviewCard from '../../components/cards/OverviewCard/OverviewCard';
import LastSevenWeeksOverviewCard from '../../components/cards/LastSevenWeeksOverviewCard/LastSevenWeeksOverviewCard';
import List from '../../components/lists/List/List';

import Container from '../../Container/Container';

const OverviewPage = () => {
  return (
    <Container>
      <Header showProfileImage={false} />
      <List listHeader="This is your overview screen">
        <OverviewCard />
        <WeeklyOverviewCard />
        <LastSevenWeeksOverviewCard />
      </List>
    </Container>
  );
};

export default OverviewPage;
