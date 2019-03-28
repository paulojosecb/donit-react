import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './main.scss';

import HomePage from './pages/HomePage/HomePage';
import OverviewPage from './pages/OverviewPage/OverviewPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/overview" exact component={OverviewPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
