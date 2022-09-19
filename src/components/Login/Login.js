import React from "react";

import { Grid, Paper, Avatar } from "@mui/material";
import { TextField, Button, Typography, Link } from "@mui/material";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import "./login.css";

const Login = () => {
  return (
    <Grid>
      <Paper className="paperStyle" elevation={10}>
        <div className="spacing">
          <Grid align="center">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="User Name*"
            placeholder="Enter your email or user name"
            fullWidth
          />
          <TextField
            label="Password*"
            placeholder="Enter your password"
            type="password"
            fullWidth
          />

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember Me"
          />
          <Button type="submit" color="primary" fullWidth variant="contained">
            Sign In
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account?
            <Link href="#">Sign Up</Link>
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default Login;
