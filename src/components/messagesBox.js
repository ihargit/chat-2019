import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column-reverse',
    // justifyContent: 'flex-end',
    overflowY: 'auto',
    height: 'calc(100vh - 180px)',
  },
}));

export default function MessagesBox({ children }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {children}
    </Box>
  )
}