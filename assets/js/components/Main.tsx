import * as React from 'react';

import ApolloContext from '../context';
import goronClient from '../api/client/goronClient';
import ItemPanel from '../containers/ItemPanel/ItemPanel';
import LocationPanel from '../containers/LocationPanel/LocationPanel';

const Main: React.FC = (): React.ReactElement => (
  <main role="main" className="container">
    <ApolloContext.Provider value={goronClient}>
      <ItemPanel />
      <LocationPanel />
    </ApolloContext.Provider>
  </main>
);

export default Main;
