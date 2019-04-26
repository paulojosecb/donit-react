import React from 'react';

import Header from '../../components/Header/Header';
import OverviewCard from '../../components/cards/OverviewCard/OverviewCard';
import List from '../../components/lists/List/List';
import DoneItemCard from '../../components/cards/DoneItemCard/DoneItemCard';

import Container from '../../Container/Container';

const HomePage = () => {
  return (
    <Container>
      <Header showProfileImage />

      <OverviewCard />

      <List listHeader="These are the things you’ve done today">
        <DoneItemCard />
        <DoneItemCard />
        <DoneItemCard />
      </List>
    </Container>
  );
};

export default HomePage;
