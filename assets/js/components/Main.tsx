import * as React from 'react';

interface Props {
  children: React.ReactElement;
}

const Main: React.FC<Props> = ({ children }): React.ReactElement => (
  <main role="main" className="container">
    {children}
  </main>
);

export default Main;
