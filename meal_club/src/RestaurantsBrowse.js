import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";
import {
  Typography,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InfiniteScroll from "react-infinite-scroll-component";
import { withStyles } from '@material-ui/core/styles';
import OrensImage from './images/orensspread.jpg';
import ZareensImage from './images/zareens.jpg';
import BareBowlsImage from './images/barebowls.jpg'
import PokeImage from './images/poke.jpg'
import PizzaImage from './images/pizza.jpg'
import BurgerImage from './images/creameryBurger.jpg'


import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
});
 
class RestaurantsBrowse extends Component {
  render() {
    return (
      <div>
        <Typography component="h1" variant="h5" style={{marginBottom: '1em'}}>Local Restaurants</Typography>
        <Grid container>
            <RestaurantCard image={OrensImage} title={"Oren's Hummus"} description={"Cozy Mediterranean eatery serving housemade hummus with falafel or meats, plus sides & sauces."} />
            <RestaurantCard image={ZareensImage} title={"Zareens"} description={"Cozy, colorful kitchen presenting contemporary takes on classic Pakistani & Indian fare."} />
            <RestaurantCard image={BareBowlsImage} title={"Bare Bowls"} description={"Casual cafe for bowls of acai, granola & other raw & sustainably sourced goods, plus smoothies."} />
            <RestaurantCard image={PokeImage} title={"Poke House"} description={"Delicious, fresh, colorful poke."} />
            <RestaurantCard image={PizzaImage} title={"Terun"} description={"Refined pizzeria with patio featuring Italian eats & Neapolitan pies alongside wine list & full bar"} />
            <RestaurantCard image={BurgerImage} title={"Palo Alto Creamery"} description={"Retro-style diner known for its milkshakes, also serving a full menu of classic American fare."} />

        </Grid>
      </div>
    );
  }
}
 
export default withStyles(styles, { withTheme: true })(RestaurantsBrowse);