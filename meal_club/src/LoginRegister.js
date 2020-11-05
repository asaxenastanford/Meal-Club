import React from 'react';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:"",password:""};
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setUsername(event){
    this.setState({ username: event.target.value });
  }

  setPassword(event){
    this.setState({ password: event.target.value });
  }

  render() {

    return (
        <Grid container spacing={2}>
          <Grid item>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              onChange={this.changeUsername}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              autoFocus
              onChange={this.changePassword}
            />
           <Button onClick={this.sendData}> Submit </Button>
           </Grid>
        </Grid>
    );
    }
}
export default LoginRegister;
