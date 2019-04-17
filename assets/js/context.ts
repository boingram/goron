import React from 'react';

import goronClient from './api/client/goronClient';

const ApolloContext = React.createContext(goronClient);

export default ApolloContext;
