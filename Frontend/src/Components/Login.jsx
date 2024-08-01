import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Grid, useTheme, styled } from '@mui/material';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Global.css';

const CustomTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiInputBase-input': {
    color: 'gray',
  },
  '& .MuiInputLabel-root': {
    color: 'gray',
  },
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:5000/login', userData);
      console.log('Response from backend:', response.data);
      if(response.data.success == 1) {
        navigate('/home');
      } else {
        console.log('Wrong credentials given');
      }
      
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  const theme = useTheme();
  return (
    <Container maxWidth="sm">
      <Box py={10}>
        <Typography 
          variant='h4' 
          gutterBottom
          className="hero-text" 
          style={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}
        >
          <span style={{ color: '#8A6FF2' }}>Sign In</span> To Your Account 
        </Typography>
        <Typography variant="body1" gutterBottom className='description-text'>
          Good to see you again, Welcome!
        </Typography>
        <Box mt={4}>
          <form onSubmit={handleSubmit}>
            <CustomTextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <CustomTextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <Grid mt={4}>
                <Button
                  type='submit'
                  variant="outlined"
                  sx={{
                    borderColor: '#8A6FF2',
                    color: 'white',
                    '&:hover': { backgroundColor: '#8A6FF2', borderColor: '#8A6FF2' }
                  }} 
                  size="large" fullWidth>
                    Log In
                </Button>
            </Grid>
          </form>          
          </Box>
        <Box mt={2} textAlign="center">
          <Typography variant="body2" color="white">
            Don't have an account? <Link to="/" style={{ color: 'white', textDecoration: 'underline' }}>SignUp</Link>
          </Typography>
        </Box>
        </Box>
    </Container>
  );
};

export default Login;
