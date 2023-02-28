import React from 'react';
import ReactDOM from 'react-dom/client';
import HookCounter from './components/HookCounter';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import UseEffectHookCounterOne from './components/UseEffectHookCounterOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HookCounter /> */}
    {/* <HookCounterTwo /> */}
    {/* <HookCounterThree /> */}
    <UseEffectHookCounterOne />
  </React.StrictMode>
);
