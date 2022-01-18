import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextTheme from './components/ContextTheme'
import ContextThemeProvider from './contexts/ContextTheme';

ReactDOM.render(
  <React.StrictMode>
    <ContextThemeProvider>
      <ContextTheme />
    </ContextThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
