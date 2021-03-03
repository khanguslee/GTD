import React, { useEffect } from 'react';
import { Container } from 'rbx';
import { useDispatch } from 'react-redux';
import googleOneTap from 'google-one-tap';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { loginUser } from './action-creators/auth';
import { AuthenticationType } from './models/user';
import './App.scss';

require('dotenv').config();

const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
  const dispatch = useDispatch();

  // Open google on tap when user goes onto the app
  useEffect(() => {
    // FIXME: google-one-tap types library is missing definitions.
    // @ts-ignore
    googleOneTap({ client_id }, async (response: { credential: string }) => {
      dispatch(loginUser(AuthenticationType.GOOGLE, response.credential));
    });
  });

  return (
    <Container fluid>
      <Header />

      <AddTodo />

      <TodoList />
    </Container>
  );
}

export default App;
