import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {loginUser} from '../../Utils/functions';
import {setLoggedUserId, getLoggedUserId} from '../../Utils/auth';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));





export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser({
        email,
        password
    }).then((res) => {
        if (res.data.msg === 'Logged') {
            setLoggedUserId(res.data.id);
            setEmail("");
            setPassword("");
        } else {
            alert(res.data.msg);
        }
    })
}


  const classes = useStyles();

  if (getLoggedUserId()) {
    return <Redirect to='/app/properties' />
   }

  return(
    <Card className={classes.root}>
      <CardContent>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inicia sesión en Trobify
            </Typography>
            <form className={classes.form} noValidate  onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="txtEmail"
                label="Correo electrónico"
                name="txtEmail"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="txtPassword"
                label="Contraseña"
                type="password"
                id="txtPassword"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Accede
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/signup">
                    "¿Aun no tienes cuenta? Registrate aquí"
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>      
        </Container>
      </CardContent>
    </Card>
  );
}

    

