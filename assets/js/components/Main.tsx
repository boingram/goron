import * as React from 'react';

import ItemPanel from '../containers/ItemPanel/ItemPanel';

const Main: React.FC = (): React.ReactElement => (
  <main role="main" className="container">
    <ItemPanel />
  </main>
);

export default Main;
