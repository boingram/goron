import * as React from 'react';

interface Props {
  children: string;
}

const Main: React.FC<Props> = ({ children }): React.ReactElement => (
  <main role="main" className="container">
    {children}
  </main>
);

export default Main;
