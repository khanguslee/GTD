import React from 'react';
import { Container } from 'rbx';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.scss';

function App() {
  return (
    <Container fluix>
      <Header />

      <AddTodo />

      <TodoList />
    </Container>
  );
}

export default App;
