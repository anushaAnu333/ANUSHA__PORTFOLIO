import React from 'react';
import { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { ThemeContext } from '../../contexts/ThemeContext';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
 
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

  },
 
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4];

export default function Skill() {
  const classes = useStyles();
  const { theme } = useContext(ThemeContext);
  return (
    <React.Fragment>
    
      
      {/* Footer */}
      <div className="services" id="services" style={{backgroundColor:theme.secondary}}>
                    <div className="services-header">
                        <h1 style={{color: theme.primary}}>Skills</h1>
                    </div>
                    <div >
              
                        <div className="services-bodycontainer">
                        <div className="blogPage" style={{backgroundColor: theme.secondary}}>
      <main>
        {/* Hero unit */}
        
        <Container  maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={5}>
           
              <Grid xs={12} sm={6} md={4}>
                <Card style={{backgroundColor:theme.primary400}}>
                  
                  <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                      FrondEnd Developer
                    </Typography>
                    <Typography>
                    When you visit a website, the design elements you see were created by a front-end devloper.
                    </Typography>
                  </CardContent>
                
                </Card>
              </Grid>

              <Grid xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  
                  <CardContent className={classes.cardContent}style={{backgroundColor:theme.primary400}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      BackEnd Developer
                    </Typography>
                    <Typography>
                    Who Build and maintain the mechanisms that process data and perform actions on websites.
                    </Typography>
                  </CardContent>
                
                </Card>
              </Grid>
              <Grid xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                  
                  <CardContent className={classes.cardContent}style={{backgroundColor:theme.primary400}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      DSA
                    </Typography>
                    <Typography>
                    Data Structure and Algorithm(DSA) is applied in all diciplines of software development.
                    </Typography>
                  </CardContent>
                
                </Card>
              </Grid>
              
              <Grid xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  
                  <CardContent className={classes.cardContent}style={{backgroundColor:theme.primary400}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Communication Skill
                    </Typography>
                    <Typography>
                    Ability to use when giving and reciving different kinds of information.
                    </Typography>
                  </CardContent>
                
                </Card>
              </Grid>
           
            
          </Grid>
        </Container>
      </main>
        </div>

                        </div>
                    </div>
                </div>
    

    </React.Fragment>
  );
}
