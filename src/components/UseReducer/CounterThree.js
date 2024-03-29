import React, {useReducer} from 'react'

const initialState = 0
const reducer= (state, action) => {
    switch(action){
        case 'increment' :
            return state + 1;
        case 'decrement' :
            return state - 1;
        case 'reset' :
            return initialState;
        default :
            return state;
    }
}
const CounterThree = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
        Count - {count} <br/>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button> <br/>
        Count Two - {countTwo} <br/>
        <button onClick={() => dispatchTwo('increment')}>IncrementTwo</button>
        <button onClick={() => dispatchTwo('decrement')}>DecrementTwo</button>
        <button onClick={() => dispatchTwo('reset')}>ResetTwo</button>

    </div>
  )
}

export default CounterThree
