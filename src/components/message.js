import React from "react";
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    width: '80%',
  },
}));

export default function Message(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} style={{alignSelf: props.alignSelf}}>
      <Typography
        variant="body1"
        style={{ marginRight: 10, fontWeight: 'bold', opacity: 0.7 }}
      >
        {props.from}
      </Typography>
      <Typography
        variant="body2"
        style={{ opacity: 0.5 }}
        gutterBottom
      >
        {props.time}
      </Typography>
      <Typography
        variant="body1"
      >
        {props.message}
      </Typography>
    </Paper>
  )
}