import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {useContext} from 'react';

import { ThemeContext } from '../../src/contexts/ThemeContext';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Newskill() {
  const classes = useStyles();
   
  const { theme } = useContext(ThemeContext);
  return (

    <div className="services" id="services" style={{backgroundColor:theme.secondary}}>
    <div className="services-header">
        <h1 style={{color: theme.primary}}>Skills</h1>
    </div>
    <div className="services-body">

        <div className="services-bodycontainer">
        <div className={classes.root}>


<Grid container spacing={3}>
 
  <Grid item xs={3}>
    <Paper className={classes.paper}>xs=3</Paper>
  </Grid>
  <Grid item xs={3}>
    <Paper className={classes.paper}>xs=3</Paper>
  </Grid>
  <Grid item xs={3}>
    <Paper className={classes.paper}>xs=3</Paper>
  </Grid>
  <Grid item xs={3}>
    <Paper className={classes.paper}>xs=3</Paper>
  </Grid>
</Grid>
</div>
        </div>
    </div>
</div>
   
  );
}
