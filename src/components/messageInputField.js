import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
}));

export default function MessageInputField() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-full-width"
        style={{ margin: 8 }}
        placeholder="Type your message here..."
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
