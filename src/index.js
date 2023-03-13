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
import CounterOne from './components/UseReducer/CounterOne';
import CounterThree from './components/UseReducer/CounterThree';
import CounterTwo from './components/UseReducer/CounterTwo';
import DataFetchingOne from './components/UseReducer/DataFetchingOne';
import DataFetchingTwo from './components/UseReducer/DataFetchingTwo';
import FocusInput from './components/UseRef/FocusInput';
import HookTimer from './components/UseRef/HookTimer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HookCounter /> */}
    {/* <HookCounterTwo /> */}
    {/* <HookCounterThree /> */}
    {/* <UseEffectHookCounterOne /> */}
    {/* <UseEffectHookMouse /> */}
    {/* <UseEffectMouseContainer /> */}
    {/* <UseEffectIntervalHookCounter /> */}
    {/* <UseEffectDataFetching /> */}
    {/* <CounterOne /> */}
    {/* <CounterTwo /> */}
    {/* <CounterThree /> */}
    {/* <DataFetchingOne /> */}
    {/* <DataFetchingTwo /> */}
    {/* <FocusInput /> */}
    <HookTimer />
  </React.StrictMode>
);
