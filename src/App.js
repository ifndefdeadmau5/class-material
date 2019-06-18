import React, { useState } from 'react';
import List from './List';
import Item from './Item';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  let content = [];

  for (let i = 0; i < todos.length; i++) {
    content.push(<Item key={i}>{todos[i]}</Item>);
    console.log('push ', todos[i])
  }
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
      <List>{content}</List>
    </div>
  );
}

export default App;
