import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Estilos
import './index.css';
// Redux
import { Provider } from 'react-redux';
import { store } from './store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
