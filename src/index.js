import React from 'react';
import ReactDOM from 'react-dom/client';
import HookCounter from './components/HookCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HookCounter />
  </React.StrictMode>
);
