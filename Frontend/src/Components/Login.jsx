import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Grid, useTheme, styled } from '@mui/material';
import axios from 'axios';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await axios.post('http://localhost:5000/login', userData);
      console.log('Response from backend:', response.data);
      // Handle successful login (e.g., save token, update auth state)
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
          <span style={{ color: '#8A6FF2' }}>Login</span> to Your Account 
        </Typography>
        <Typography variant="body1" gutterBottom className='description-text'>
          Access your FlickFile account and manage your digital assets.
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
                Login
              </Button>
            </Grid>
          </form>          
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
