import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

// Precisa vir depois da importação do reactotron
import { store, persistor } from './store';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Header from './pages/layout/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Header />
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
