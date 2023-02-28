import React from 'react';
import ReactDOM from 'react-dom/client';
import HookCounter from './components/HookCounter';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import UseEffectHookCounterOne from './components/UseEffectHookCounterOne';
import UseEffectHookMouse from './components/UseEffectHookMouse';
import UseEffectMouseContainer from './components/UseEffectMouseContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HookCounter /> */}
    {/* <HookCounterTwo /> */}
    {/* <HookCounterThree /> */}
    {/* <UseEffectHookCounterOne /> */}
    {/* <UseEffectHookMouse /> */}
    <UseEffectMouseContainer />
  </React.StrictMode>
);
