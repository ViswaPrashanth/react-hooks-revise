import React, {useEffect, useState} from 'react'

const UseEffectIntervalHookCounter = () => {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(count + 1)     // we can empty the dependency array, if setCount(prevCount => prevCount + 1)
    }
    useEffect(() => {
        const interval = setInterval( tick, 1000)

        return () => {
            clearInterval(interval)
        }
    },[count])
  return (
    <div>
        {count}
    </div>
  )
}

export default UseEffectIntervalHookCounter