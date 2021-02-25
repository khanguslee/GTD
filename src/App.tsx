import React from 'react';
import { Container } from 'rbx';

import Header from './components/Header';
import './App.scss';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Container fluix>
      <Header />

      <AddTodo />
    </Container>
  );
}

export default App;
