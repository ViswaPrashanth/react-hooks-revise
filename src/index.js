import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HookCounter from './components/HookCounter';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import UseEffectDataFetching from './components/UseEffectDataFetching';
import UseEffectHookCounterOne from './components/UseEffectHookCounterOne';
import UseEffectHookMouse from './components/UseEffectHookMouse';
import UseEffectIntervalHookCounter from './components/UseEffectIntervalHookCounter';
import UseEffectMouseContainer from './components/UseEffectMouseContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <HookCounter /> */}
    {/* <HookCounterTwo /> */}
    {/* <HookCounterThree /> */}
    {/* <UseEffectHookCounterOne /> */}
    {/* <UseEffectHookMouse /> */}
    {/* <UseEffectMouseContainer /> */}
    {/* <UseEffectIntervalHookCounter /> */}
    {/* <UseEffectDataFetching /> */}
  </React.StrictMode>
);
