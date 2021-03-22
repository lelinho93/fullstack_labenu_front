import React from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from '../hooks/useForm'
import axios from 'axios'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/wesley-aquino-5880841b9/">
        Wesley Aquino Developer
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function InsertImage() {
  const classes = useStyles();
  const history = useHistory()

  const { form, onChange } = useForm({ subtitle: "", file: "", tags: "", collection: ""})

  console.log(form)

  const handleInputChange = (event) => {
      const { value, name } = event.target
      onChange(value, name)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    axios.post("http://localhost:3306/image", form)
    .then(response => {
      alert(response.data)
    })
    .catch(error => {
      console.log(error.response.data)
    })
    
}

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <InsertPhotoIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inserir imagem
          </Typography>
          <form className={classes.form} onSubmit={onSubmitForm} >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="subtitle"
              label="Legenda"
              name="subtitle"
              autoComplete="subtitle"
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="file"
              label="Link da imagem"
              type="text"
              id="file"
              autoComplete="file"
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="tags"
              label="Tags"
              type="text"
              id="tags"
              autoComplete="tags"
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="collection"
              label="Coleção"
              type="text"
              id="collection"
              autoComplete="collection"
              onChange={handleInputChange}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Inserir imagem
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Logout
                </Link>
              </Grid>
              
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}