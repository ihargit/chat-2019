import React from "react";
import Paper from '@material-ui/core/Paper';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    maxWidth: '80%',
  },
  messageBody: {
    padding: theme.spacing(1),
  },
  messageTitle: {
    display: 'flex',
    alignItems: 'baseline',
  }
}));

export default function Message(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root} style={{ alignSelf: props.flexEnd }} >
      <Box className={classes.messageTitle} style={{ justifyContent: props.flexEnd }}>
        <Typography
          variant="body1"
          display='inline'
          style={{
            marginRight: 10,
            fontWeight: 'bold',
            opacity: 0.7
          }}
        >
          {props.from}
        </Typography>
        <Typography
          variant="caption"
          display='inline'
          style={{
            opacity: 0.5
          }}
          gutterBottom
        >
          {props.time}
        </Typography>
      </Box>
      <Paper className={classes.messageBody}>
        <Typography
          variant="body1"
        >
          {props.message}
        </Typography>
      </Paper>
    </Box>
  )
}