import React from 'react';
import ReactDOM from 'react-dom/client';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HookCounter /> */}
    <HookCounterTwo />
  </React.StrictMode>
);
