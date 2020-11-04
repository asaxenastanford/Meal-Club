import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import Paper from '@material-ui/core/Paper';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import { HashRouter, Route, NavLink, Link } from "react-router-dom";

import Image from './food_background.jpeg'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';

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

class Main extends Component {

  render() {
    return (
      <div>
        <AppBar position="absolute">
          <Toolbar>
          <h1>Meal Club</h1>

          <Box pl={1}><RestaurantMenuIcon/></Box>
           <HashRouter>
            <Box pl={3}><Button><NavLink to="/" style={{color: 'white'}}>Home</NavLink></Button></Box>
            <Box pl={3}><Button><NavLink to="/about" style={{color: 'white'}}>About</NavLink></Button></Box>
            <Box pl={3}><Button><NavLink to="/Contact" style={{color: 'white'}}>Contact</NavLink></Button></Box>
            <Box pl={3}><Button><NavLink to="/LoginRegister" style={{color: 'white'}}>Log In</NavLink></Button></Box>
        </HashRouter>
        </Toolbar>
        </AppBar>
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
      </div>
    );
  }
}
 
export default Main;