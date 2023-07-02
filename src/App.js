import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    setTodos([...todos , inputValue])
    setInputValue("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, todo) => {
   setInputValue(todo)
    const edit = todos.splice(id , 1, todo)
   console.log(setTodos(edit)) 
    
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, id) => (
          <li key={id}>
            {todo.text}
            <button onClick={() => deleteTodo(id)}>Delete</button>
            <button onClick={() => updateTodo(id, todo)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
