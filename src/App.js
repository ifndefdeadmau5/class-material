import React, { useState } from 'react';
import List from './List';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  // const [todos, setTodos] = useState([]);

  let todos = ['banana'];

  console.log('todos:', todos);

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      <button
        onClick={() => {
          todos = [...todos, input];
          const listElement = document.getElementById('list');
          const newTodo = document.createTextNode(input); 
          listElement.appendChild(newTodo)
        }}
      >
        확인
      </button>
      <List id="list">
        {todos}
      </List>
    </div>
  );
}

export default App;


