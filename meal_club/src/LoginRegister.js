import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:"",password:"",newUsername:"",newPassword:"",verifyPassword:"",firstName:"",lastName:"",address:"",passwordValidationState:""};
    this.sendData = this.sendData.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.createNewUserAccount = this.createNewUserAccount.bind(this);
  }

  changeUsername(event){
    this.setState({ username: event.target.value });
  }

  changePassword(event){
    this.setState({ password: event.target.value });
  }

  createNewUserAccount(){
    if(this.state.newPassword !== this.state.verifyPassword){
      this.setState({passwordValidationState:"Password validation incorrect. Re-enter and submit again."});
      return;
    }

    if(this.state.newUsername.length < 1){
      this.setState({passwordValidationState:"Username is required. Re-enter and submit again."});
      return;
    }

    if(this.state.firstName.length < 1){
      this.setState({passwordValidationState:"First name is required. Re-enter and submit again."});
      return;
    }

    if(this.state.lastName.length < 1){
      this.setState({passwordValidationState:"Last name is required. Re-enter and submit again."});
      return;
    }

    if(this.state.newPassword.length < 1){
      this.setState({passwordValidationState:"Password is required. Re-enter and submit again."});
      return;
    }

    // create user
    let address = '/user';

    let parameters = {login_name:this.state.newUsername,password:this.state.newPassword,first_name:this.state.firstName,last_name:this.state.lastName,address:this.state.address};
    // console.log("creating user: ",parameters);

    axios.post(address,parameters).then((response) => {
      console.log(response);
      this.setState({passwordValidationState:"Account successfully created! Welcome!",newUsername:"",newPassword:"",verifyPassword:"",firstName:"",lastName:"",address:""});
    }, (err) => {
      this.setState({passwordValidationState:"This username is not available. Re-enter and submit again."});
      console.log(err.statusText);
    });
  }

  sendData = () => {
    let logoutAddress = 'admin/logout';

    // logout if already logged in 
    axios.post(logoutAddress).then(() => {
      //console.log(response);
    }, function (err) {
      console.log(err.statusText);
    });

    // do the login 
    let address = 'admin/login';

    let parameters = {login_name:this.state.username, password:this.state.password};
    // console.log("send data ",parameters);

    axios.post(address,parameters).then((response) => {
      let userId = response.data._id;
      // console.log("user login: ",userId);
      this.props.handleSceenChange(userId);
      this.props.handleBarChange("Hi " + response.data.first_name);
    }, function (err) {
      console.log(err.statusText);
    });
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
          <Grid item>
            <Typography component="h1" variant="h5">
              New User Registration
            </Typography>
            <TextField
              value={this.state.firstName}
              variant="outlined"
              margin="normal"
              required
              id="first_name"
              label="First Name"
              name="first_name"
              autoFocus
              onChange={(e)=>{this.setState({firstName: e.target.value})}}
            />
            <TextField
              value={this.state.lastName}
              variant="outlined"
              margin="normal"
              required
              id="last_name"
              label="Last Name"
              name="last_name"
              autoFocus
              onChange={(e)=>{this.setState({lastName: e.target.value})}}
            />
            <br/>
            <TextField
              value={this.state.address}
              variant="outlined"
              margin="normal"
              id="address"
              label="Address"
              name="address"
              autoFocus
              onChange={(e)=>{this.setState({address: e.target.value})}}
            />
            <br/> 
            <TextField
              value={this.state.newUsername}
              variant="outlined"
              margin="normal"
              required
              id="new_username"
              label="Username"
              name="new_username"
              autoFocus
              onChange={(e)=>{this.setState({newUsername: e.target.value})}}
            />
            <TextField
              value={this.state.newPassword}
              variant="outlined"
              margin="normal"
              required
              id="new_password"
              label="Password"
              name="new_password"
              type="password"
              autoFocus
              onChange={(e)=>{this.setState({newPassword: e.target.value})}}
            />
            <TextField
              value={this.state.verifyPassword}
              variant="outlined"
              margin="normal"
              required
              id="verify_password"
              label="Verify Password"
              name="verify_password"
              type="password"
              autoFocus
              onChange={(e)=>{this.setState({verifyPassword: e.target.value})}}
            />
            <br/>
            <div>
              {this.state.passwordValidationState}
            </div>
            <br/>
            <Button onClick={this.createNewUserAccount}> Register Me </Button>
          </Grid>
        </Grid>
    );
  }
}

export default LoginRegister;