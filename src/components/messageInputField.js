import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1),
  },
  inputField: {
    backgroundColor: '#3f51b51',
    wrap: 'nowrap',
  }
}));

export default function MessageInputField() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        className={classes.inputField}
        id="outlined-full-width"
        placeholder="Type your message here..."
        fullWidth
        margin="normal"
        variant="outlined"
        autoFocus={true}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
