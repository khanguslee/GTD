import React, { useEffect } from 'react';
import { Container } from 'rbx';

import * as Realm from 'realm-web';
import googleOneTap from 'google-one-tap';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.scss';

const app = new Realm.App(process.env.REALM_APP_ID || '');
const googleClientId = process.env.GOOGLE_CLIENT_ID;

function App() {
  // Open google on tap when user goes onto the app
  useEffect(() => {
    // FIXME: google-one-tap types library is missing definitions.
    // @ts-ignore
    googleOneTap(
      { client_id: googleClientId },
      async (response: { credential: string }) => {
        const credentials = Realm.Credentials.google(response.credential);
        const user = await app.logIn(credentials);
        console.log(`Logged in with id: ${user.id}`);
      }
    );
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
