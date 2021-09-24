import React, { useCallback, useState } from "react";
import { Button, TextField, Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import toast from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  signupContainer: {
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

const Signup = ({ redirectToLoginPage }) => {
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
    if (password.length < 6) return toast.error("Password must be of 6 chars");
    axios
      .post("http://localhost:5000/api/v1/user/signup", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        toast.success("Signed Up");
      })
      .catch((err) => {
        console.log(err);
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
        className={classes.signupContainer}
      >
        <Typography component="h1" variant="h5">
          Sign up
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
            Sign Up
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={redirectToLoginPage} variant="body2">
                Already have an account? Log In
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;
