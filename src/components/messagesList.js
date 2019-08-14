import React from "react";
import Message from './Message';
import { connect } from 'react-redux'
import { addMessages } from '../redux/actions'

// const mapStateToProps = state => state.

const MessagesList = () => (
  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', paddingInlineStart: 0, }}>
    <Message from='Me' message=' is simply dummy text of the printing and typesetting industry' time='12 12 12 12 12' flexEnd='flex-end' />
    <Message from='Peter' message=' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries bu' time='12 12 12 12 12' flexEnd='flex-start' />
  </ul>
)

export default connect(
  null,
  { addMessages }
)(MessagesList);