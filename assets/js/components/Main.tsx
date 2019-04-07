import * as React from 'react';

import ItemPanel from '../containers/ItemPanel/ItemPanel';
import LocationPanel from '../containers/LocationPanel/LocationPanel';

const Main: React.FC = (): React.ReactElement => (
  <main role="main" className="container">
    <ItemPanel />
    <LocationPanel />
  </main>
);

export default Main;
