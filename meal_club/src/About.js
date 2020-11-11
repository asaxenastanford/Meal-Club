import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image1 from './Burger.jpg';
import { Icon } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import TeamPic from './images/team_pic.jpg';
import Box from '@material-ui/core/Box';
import PizzaImage from './images/food_spread.jpg'


import "./index.css";


const styles = {
  description: {
      backgroundImage: `url(${PizzaImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 600,
      alignItems: "left",
      display: "flex",
      justifyContent: "center",
      color: "white"
  },
  whatWeDo: {
      height: 500,
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      color: "blue",
      fontWeight: "bold",
  },
  whyMealClub: {
    height: 500,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    color: "blue"
  },

  headerText: {
    marginRight: '400px',
    marginLeft: '25px',
    marginTop: '40px'
  },

  howItWorks: {
    fontWeight: 'bold',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Helvetica Neue",
    marginLeft: '250px'
  },

  whoWeAre: {
    alignItems: 'center',
    display: "flex",
    justifyContent: "center",
    height: 500,
    flex:1, 
    flexDirection:'column'
  } 

};


class About extends Component{
  render() {
    return (
      <div>
        <Paper style={styles.description}>
          <div>
          <Box style={styles.headerText} style={{marginTop: '2em'}} fontStyle="italic" fontSize="h3.fontSize">Order flexible and delicious meal </Box>
          <Box style={styles.headerText} fontStyle="italic" fontSize="h3.fontSize">plans with your friends.</Box>
            
          </div>
        </Paper>
        <Paper style={styles.whatWeDo}>
          <div>
            <Typography fontWeight="bold" variant="h2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>How It Works</Typography>
            <Typography variant="h8" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Easy | Convenient | Affordable</Typography>
            <List>
                <div>
                <ListItem>
                  <ListItemIcon style={{ fontSize: 60 }}>
                    <FastfoodIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Browse Food"
                    secondary="Check out local restuarants near you, see what your friends are ordering, and choose from a variety of delicious meals."
                  />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                  <EventAvailableIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Schedule Your Meal"
                  secondary="Pick a day and time that you would like to have your food delivered. Join group orders near you for a discount."
                />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                  <RestaurantIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Enjoy Your Meal"
                  secondary="Your food will be delivered to your doorstep. No waiting, no delivery fees, and no hassle!"
                />
                </ListItem>
              </div>
            </List>
          </div>
        </Paper>
        <Paper variant="outlined" style={styles.whoWeAre}>
        <Typography fontWeight="bold" variant="h5" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>We are on a mission to reinvent meal delivery</Typography>
            <img src={TeamPic} className="photo" alt={"TeamPic"}/> 
        </Paper>
      </div>
    );
  }
}

 
export default About;

