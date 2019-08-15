import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import store from '../redux/store';
// import { addMessages } from '../redux/actions';

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

export default function MessageInputField(props) {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      const msgOut = {
        from: 'ihargit',
        message: value,
      }
      props.ws.send(JSON.stringify(msgOut));
    }
    // const msg = {
    //   message: value,
    //   flexEnd: 'flex-end',
    //   time: Date.now(),
    //   id: `${Date.now()}ihargit`
    // }
    // store.dispatch(addMessages([msg]));
    setValue(e.target.value = '');
  }

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        value={value}
        onChange={handleChange}
        name="message"
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
