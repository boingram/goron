import * as React from 'react';

import ApolloContext from '../context';
import App from '../containers/App/App';
import goronClient from '../api/client/goronClient';
import ItemPanel from '../containers/ItemPanel/ItemPanel';

const Main: React.FC = (): React.ReactElement => (
  <main role="main" className="container">
    <ApolloContext.Provider value={goronClient}>
      <App />
    </ApolloContext.Provider>
  </main>
);

export default Main;
