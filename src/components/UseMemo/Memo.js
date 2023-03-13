import React, { useMemo, useState } from "react";


const expensiveFunction = (num) => {
  for (let i = 0; i < 10000000; i++) {
    num += 1;
  }
  return num;
};


const Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const Calculation =useMemo(() =>expensiveFunction(count), [count] ) ;

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const addTodo = () => {
    setTodos((newTodo) => [...newTodo, "new todo"]);
  };

  return (
    <div>
      {todos.map((todo, i) => {
        return <p key={i}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add todo</button> <hr />
      {count} <br />
      <button onClick={increment}>+</button> <hr />
      {Calculation}
    </div>
  );
};

export default Memo;
