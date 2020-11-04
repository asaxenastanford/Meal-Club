import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {AppBar, Toolbar} from '@material-ui/core';
import { HashRouter, Route, NavLink} from "react-router-dom";
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';


class Main extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <AppBar position="absolute">
            <Toolbar>
            <h1>Meal Club</h1>
            <Box pl={1}><RestaurantMenuIcon/></Box>
            <Box pl={3}><Button><NavLink to="/" style={{color: 'white'}}>Home</NavLink></Button></Box>
            <Box pl={3}><Button><NavLink to="/about" style={{color: 'white'}}>About</NavLink></Button></Box>
            <Box pl={3}><Button><NavLink to="/Contact" style={{color: 'white'}}>Contact</NavLink></Button></Box>
            <Box pl={3}><Button><NavLink to="/LoginRegister" style={{color: 'white'}}>Log In</NavLink></Button></Box>
          </Toolbar>
          </AppBar>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;