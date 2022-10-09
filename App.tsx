import React from 'react';
import {Provider} from 'react-redux';

import Store from './src/Store';

import Navigation from './src/Navigation';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};

export default App;
