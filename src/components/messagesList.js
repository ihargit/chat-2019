import React from "react";
import Message from './Message';
import { connect } from 'react-redux'

const mapStateToProps = state => ({ messages: state.messages.messages });

const MessagesList = ({ messages }) => (
  <ul style={{
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    paddingInlineStart: 0,
    overflowWrap: "break-word",
  }}>
    {
      messages && messages.length
        ? messages.map((message) => {
          return <Message
            key={`${Date.now()}${message.id}`}
            from={message.from}
            flexEnd={message.flexEnd}
            time={message.time}
            message={message.message}
          />
        })
        : console.log('Please, wait!')
    }
  </ul>
);

export default connect(mapStateToProps)(MessagesList);