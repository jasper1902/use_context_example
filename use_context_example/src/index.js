import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NamesContextProvider } from './store/NamesContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NamesContextProvider>
      <App />
    </NamesContextProvider>
  </React.StrictMode>
);

