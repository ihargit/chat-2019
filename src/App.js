import React, { useEffect } from 'react';
import MessageInputField from './components/MessageInputField';
import Layout from './components/Layout';
import MessagesBox from './components/MessagesBox';
import MessagesList from './components/MessagesList';
import 'typeface-roboto';
import ws from './webSocket';

function App() {

  useEffect(() => {
    ws.addEventListener('open', () => {
      console.log("WS opened!");
    });

    // ws.addEventListener('message', (e) => {
    //   store.dispatch(e.data);
    // });
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
