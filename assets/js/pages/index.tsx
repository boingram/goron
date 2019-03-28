import * as React from 'react';

import ItemPanel from '../containers/ItemPanel/ItemPanel';
import Main from '../components/Main';

const HomePage: React.FC = (): React.ReactElement => (
  <Main>
    <ItemPanel />
  </Main>
);

export default HomePage;
