import React, { useState } from 'react';
import List from './List';
import Item from './Item';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, input]);
        }}
      >
        확인
      </button>
      <List>
        {todos.map(todo => (
          <Item>{todo}</Item>
        ))}
      </List>
    </div>
  );
}

export default App;
