import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuAppBar from './components/menuAppBar';
import MessageInputField from './components/messageInputField';
import 'typeface-roboto';

function App() {
  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <MessageInputField />


    </>
  );
}

export default App;
