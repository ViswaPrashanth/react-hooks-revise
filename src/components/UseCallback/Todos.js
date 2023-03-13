import React, { memo } from 'react'

const Todos = ({todos, addTodo}) => {
    console.log('child rendering')
  return (
    <div>
        <h1>My Todos</h1>
        {todos.map((todo, i) => <p key={i}>{todo}</p>)}
        <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default memo(Todos)