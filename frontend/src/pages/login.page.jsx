import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Alert, AlertTitle } from '@material-ui/lab';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Footer from '../components/footer.component';
import { AuthContext } from '../context/auth';
import jwt from 'jsonwebtoken';
import SharkFinz from '../assets/sharkfinz.jpg';

function generateToken(user) {
  return jwt.sign({
    email: user.email,
    username: user.username,
  }, "V$wrVbDBz,7m:y73<D={Fz!d3CVe@S" , { expiresIn: '2h' });
}

function LoginPage(props) {
  
  const context = useContext(AuthContext); // Holds the LOGIN or LOGOUT

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // login details
  var loginDetails = {
    emailAddress: "johntan@gmail.com",
    password: "john123"
  }

  const token = generateToken(loginDetails)

  const userData = {
    emailAddress: "johntan@gmail.com",
    password: "john123",
    token: token
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    
    if (email !== userData.emailAddress) {
      setErrors({
        email: "Invalid Email"
      })
      setLoading(false)
      return
    }
    if (password !== userData.password) {
      setErrors({
        password: "Wrong credentials"
      })
      setLoading(false)
      return
    }
    
    setErrors({})

    setTimeout(() => {
      context.login(userData); // context LOGIN
      props.history.push('/');
    }, 3000)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '89vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/user/bioxmech/likes/)',
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
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

  const classes = useStyles();

  return (
    <>
    <Grid container component="main" className={classes.root} style={{ marginTop : '1px' }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar src={SharkFinz} alt="S" />
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={handleEmailChange}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              autoFocus
              helperText="We will never share your email."
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={handlePasswordChange}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.submit}
              style={{ 
                marginRight: '10px', 
                fontWeight: 'bold', 
                backgroundColor: "rgb(197,224,181)",
                borderColor: "white",
                color: "black"
              }}
            >
              Sign In
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </form>
          { Object.keys(errors).length > 0 && (
            <Box mt={3}>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                    {
                      (errors.email === "Invalid Email") ? 
                        <Typography variant="body1">Username is not registered. 
                          {/* Click <a href="/register">here</a> to register */}
                          </Typography>
                      : ""
                    }
                    {
                      (errors.password === "Wrong credentials") ?
                        <Typography variant="body1">Password is incorrect</Typography>
                      : ""
                    }
                  {/* { Object.values(errors).map((value) => (
                    
                  ))}
                    */}
              </Alert>
            </Box>
          )}
        </div>
      </Grid>
      {/* Image */}
      <Grid item xs={false} sm={4} md={7} className={classes.image} component={Paper} elevation={6} square />
      {/* Display Errors */}
      <Backdrop className={classes.backdrop} open={ loading ? true : false }>
        <CircularProgress color="inherit" />
      </Backdrop>
      
    </Grid>
    <Footer />
    </>
  );
}

export default LoginPage;