import React, { useEffect } from 'react';
import MessageInputField from './components/M222essageInputFieldd';
import Layout from './components/Layout';
import MessagesBox from './components/MessagesBox';
import MessagesList from './components/MessagesList';
import 'typeface-roboto';
import ws from './webSocket';
import store from './redux/store';
import { addMessages } from './redux/actions';

function App() {

  useEffect(() => {
    ws.addEventListener('open', () => {
      console.log("WS opened!");
    });

    ws.addEventListener('message', (e) => {
      const messages = JSON.parse(e.data);
      store.dispatch(addMessages(messages));
    });
  });

  return (
    <>
      <Layout>
        <MessagesBox>
          <MessagesList />
        </MessagesBox>
        <MessageInputField ws={ws} />
      </Layout>
    </>
  );
}

export default App;
