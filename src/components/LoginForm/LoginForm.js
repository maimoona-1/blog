import React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import './login.css';

const Login = () => {
  return (
    <Grid>
      <Paper className='paperStyle' elevation={10}>
        <div className='spacing'>
          <Grid align='center'>
            <Avatar className='avatar'>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField label='User Name*' placeholder='Enter your email or user name' fullWidth />
          <TextField
            label='Password*'
            placeholder='Enter your password'
            type='password'
            fullWidth
          />

          <FormControlLabel
            control={<Checkbox name='checkedB' color='primary' />}
            label='Remember Me'
          />
          <Button type='submit' color='primary' fullWidth variant='contained'>
            Sign In
          </Button>
          <Typography>
            <Link href='#'>Forgot password ?</Link>
          </Typography>
          <Typography>
            Do you have an account?
            <Link href='#'>Sign Up</Link>
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default Login;
