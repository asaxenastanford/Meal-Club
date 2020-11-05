import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default, 
    padding: theme.spacing(3),
    color: 'blue',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));


 
 function About() {
  const classes = useStyles();

    return (
      <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h2'>About Us</Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>
          We are Meal Club, a platform offering 
          flexible meal subscription plans that allow 
          busy students to pre-order meals together.
        </Typography>
      </div>
    </main>
    );
}

 
export default About;

