import React, { useEffect, useRef, useState } from 'react'

const HookTimer = () => {
    const [timer , setTimer] = useState(0)
    const intervalRef = useRef()
    const tick = () => {
        setTimer(prevTimer => prevTimer + 1)
    }
    useEffect(() => {
         intervalRef.current = setInterval(tick, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
  return (
    <div>
        {timer} <br/> <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
    </div>
  )
}

export default HookTimer