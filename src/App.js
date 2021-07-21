import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

function App() {
  const preparedTodos = todos.map(todo => (
    {
      ...todo,
      user: users.find(user => user.id === todo.userId),
    }
  ));

  return (
    <div className="App">
      <TodoList todoVariable={preparedTodos} />
    </div>
  );
}

export default App;
