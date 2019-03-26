import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import ItemPanel from '../containers/ItemPanel';
import Main from '../components/Main';

const HomePage: React.FC<RouteComponentProps> = (): React.ReactElement => (
  <Main>
    <ItemPanel />
  </Main>
);

export default HomePage;
