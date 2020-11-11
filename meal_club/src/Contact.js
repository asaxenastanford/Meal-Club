import React, { Component } from "react";
import {Typography} from '@material-ui/core';
import ContactImage from './images/contact_background.jpg';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import './index.css'

const styles = {
  description: {
      backgroundImage: `url(${ContactImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 600,
      display: "flex",
      flex: 1, 
      flexDirection:'column',
      alignItems: "center",
      width:"auto",
      justifyContent: "center",
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return(

        <Paper style={styles.description}>
        <Typography variant="h2">Let's get in touch!</Typography>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <Typography component="h3" variant="h6">Name</Typography>
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
            <input width="auto" type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            <Typography component="h3" variant="h6">Email Address</Typography>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          <Typography component="h3" variant="h6">Message</Typography>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </Paper>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
  }
}

export default Contact;