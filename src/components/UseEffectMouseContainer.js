import React, {useState, useEffect} from 'react'
import UseEffectHookMouse from './UseEffectHookMouse'

const UseEffectMouseContainer = () => {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle display</button>
        {display && <UseEffectHookMouse /> }
    </div>
  )
}

export default UseEffectMouseContainer