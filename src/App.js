import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppRoutes from './app.routes';
import './app.scss';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
