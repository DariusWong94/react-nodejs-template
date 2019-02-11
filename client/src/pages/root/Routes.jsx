import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/home';

const Routes = () => (
  <div style={{ margin: '1em' }}>
    <Route exact path="/" component={HomePage} />
  </div>
); export default Routes;
