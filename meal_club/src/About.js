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

const styles = {
  description: {
      backgroundImage: `url(${Image1})`,
      height: 500,
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
      color: "blue"
  },
  whyMealClub: {
    height: 500,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    color: "blue"
  }
};


class About extends Component{
  render() {
    return (
      <div>
        <Paper style={styles.description}>
          <div>
            <Typography variant="h2">Order flexible and delicious 
            meal plans with your friends. </Typography> 
            <p>Meal Club offers meal subscriptions from your favorite local restaurants
              at unbeatable prices. We are redesigning the system of meal delivery to be 
              more efficient, affordable, and sustainable for you and for small business restaurants.
            </p>
            </div>
        </Paper>
        <Paper style={styles.whatWeDo}>
          <div>
            <Typography variant="h2">How It Works</Typography>
            <Typography variant="h8">Easy | Convenient | Affordable</Typography>
            <List>
                <div>
                <ListItem>
                  <ListItemIcon style={{ fontSize: 40 }}>
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

      </div>
    );
  }
}

 
export default About;

