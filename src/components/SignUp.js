import React from 'react';
import { useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    backgroundImage: 'url(https://wallpapercave.com/wp/wp6975861.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[2] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'},
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory()

  const { form, onChange } = useForm({ name: "", email: "", nickname: "", password: ""})

  const handleInputChange = (event) => {
      const { value, name } = event.target

      onChange(value, name)
  }


  const onSubmitForm = (event) => {    
      event.preventDefault() 
      axios.post("http://localhost:3306/user/signup", form)
    .then(response => {
      window.localStorage.setItem("token", response.data.token)
      history.push("/insert-image")  
    })
    .catch(error => {
        console.log(error.response.data)
    })     
  }  

  const goToLogin = () => {
      history.push("/")
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={onSubmitForm} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type={"text"}
                name={"name"}
                value={form.name}
                onChange={handleInputChange}
                autoComplete="name"                
                variant="outlined"
                required
                fullWidth
                id="fname"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type={"text"}
                name={"nickname"}
                value={form.nickname}
                onChange={handleInputChange}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Nickname"
                autoComplete="nickname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type={"text"}
                name={"email"}
                value={form.email}
                onChange={handleInputChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type={"password"}
                name={"password"}
                value={form.password}
                onChange={handleInputChange}
                variant="outlined"
                required
                fullWidth
                label="Password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={goToLogin}>
                Já tem uma conta? Entrar
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}