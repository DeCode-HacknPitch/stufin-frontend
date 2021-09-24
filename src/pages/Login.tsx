import React, { useCallback, useState } from "react";
import { Button, TextField, Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import toast from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  LoginContainer: {
    width: 400,
    padding: theme.spacing(3),
    borderRadius: 20,
    border: "2px solid #303F9F",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({ redirectToSignupPage }) => {
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const classes = useStyles();

  const handleEmailChange = useCallback((event) => {
    changeEmail(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    changePassword(event.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    signInWithEmailAndPassword(auth, email, password).then((user) => {
      return user.user.getIdToken().then((idToken) => {
        axios
          .post(
            "http://localhost:5000/api/v1/user/login",
            {
              idToken,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
            toast.success("Signed in");
          })
          .catch((err) => {
            console.log(err);
            toast.error("Something went wrong");
          });
      });
    });
  }, [email, password]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ height: "90vh" }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.LoginContainer}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <div className={classes.form}>
          <TextField
            onChange={handleEmailChange}
            value={email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={handlePasswordChange}
            value={password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              handleSubmit();
            }}
          >
            Login
          </Button>

          <Grid item>
            <Link onClick={redirectToSignupPage} variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
