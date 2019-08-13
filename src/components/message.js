import React from "react";
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const Message = () => (
  <>
    <Paper>
      <Typography>
        Sender
      </Typography>
      <Typography>
        Date
      </Typography>
      <Typography>
        Message
      </Typography>
    </Paper>
  </>
)


export default Message;