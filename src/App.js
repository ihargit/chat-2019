import React from 'react';
import MessageInputField from './components/MessageInputField';
import Layout from './components/Layout';
import MessagesBox from './components/MessagesBox';
import MessagesList from './components/MessagesList';
import 'typeface-roboto';
import ws from './webSocket';

function App() {
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
