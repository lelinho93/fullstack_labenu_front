import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory, useParams } from 'react-router';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function DetailPage() {

  const classes = useStyles();
  const history = useHistory()
  const pathParams = useParams()

  const [details, setDetails] = useState({})  

  const goToTimeline = () => {
      history.push("/timeline")
  }

  useEffect(() => {
      
      axios.get(`http://localhost:3306/details/${pathParams.id}`, {
          headers: {
              Authorization: localStorage.getItem("token")
          }
      })        
      .then(response => {        
          setDetails(response.data)      
      })
      .catch(error => {
          console.log(error.message)
      })}, [])

 

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Imagem {details.subtitle}
          </Typography>
        </Toolbar>
      </AppBar>      
      <main>
        {/* Hero unit */}        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              <Grid item>
                  <Button variant="contained" color="primary" onClick={goToTimeline}>
                    Voltar
                  </Button>
                </Grid>          
              </Grid>
            </div>
            
          <Grid container spacing={2}>            
              <Grid item key={details.id} xs={12} sm={6} md={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={details.file}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {details.subtitle}
                    </Typography>                    
                  </CardContent>
                  <CardContent className={classes.cardContent}>
                    <Typography>
                      {details.tags}
                    </Typography>
                    <Typography>
                      Coleção: {details.collection}
                    </Typography>                   
                  </CardContent>
                </Card>
              </Grid>
            
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Artimage eterniza seus momentos
        </Typography>       
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}