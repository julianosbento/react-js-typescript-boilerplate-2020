import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyles from './styles/global';
import store from './store';

const App: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
