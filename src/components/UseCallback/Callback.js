import React , {useCallback, useState } from 'react'
import Todos from './Todos'

const Callback = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    // const addTodo = () => {
    //     setTodos(newTodo => [...newTodo, "new todo"])
    // }
    const addTodo = useCallback(() => {
        setTodos(newTodo => [...newTodo, "new todo"])
    }, [todos])
  return (
    <div>
        <Todos todos={todos} addTodo={addTodo} />
        <hr/>
        <h1>Count - {count}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Callback