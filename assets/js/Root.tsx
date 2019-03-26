import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages';

const Root: React.FC = (): React.ReactElement => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Root;
