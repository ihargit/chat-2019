import React from 'react';
import MessageInputField from './components/messageInputField';
import Layout from './components/layout';
import MessagesBox from './components/messagesBox';
import MessagesList from './components/messagesList';
import 'typeface-roboto';

function App() {
  return (
    <>
      <Layout>
        <MessagesBox>
          <MessagesList />
        </MessagesBox>
        <MessageInputField />
      </Layout>
    </>
  );
}

export default App;
