import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Image from './food_background.jpeg'

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height:750,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        color: "white"
    }
};
 
class Home extends Component {
  render() {
    return (
      <Paper style={styles.paperContainer}>
        <div>
          <Typography variant="h1"> Meal Club</Typography> 
          <TextField
              variant="outlined"
              color="white"
              margin="normal"
              required
              fullWidth
              label="Address"
              autoFocus
            />
          </div>
      </Paper>
    );
  }
}
 
export default Home;