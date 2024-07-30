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

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      confirmPassword,
    };

    console.log({
      email: userData.email,
    });

    try {
      const response = await axios.post('http://localhost:5000/', userData);
      console.log('Response from backend:', response.data);
      navigate('/home');
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
          <span style={{ color: '#8A6FF2' }}>Create</span> Your Account 
        </Typography>
        <Typography variant="body1" gutterBottom className='description-text'>
          Join FlickFile today and take control of your digital assets.
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
            <CustomTextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
            <Grid mt={4}>
              {
                (password === confirmPassword)
                ?                
                  <Button
                  type='submit'
                  variant="outlined"
                  sx={{
                    borderColor: '#8A6FF2',
                    color: 'white',
                    '&:hover': { backgroundColor: '#8A6FF2', borderColor: '#8A6FF2' }
                  }} 
                  size="large" fullWidth>
                      Sign Up
                  </Button>
                : <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#8A6FF2',
                    color: 'white',
                    '&:hover': { backgroundColor: '#8A6FF2', borderColor: '#8A6FF2' }
                  }} 
                  size="large" fullWidth>
                    Sign Up
                  </Button>
              }              
            </Grid>
          </form>          
        </Box>
        <Box mt={2} textAlign="center">
          <Typography variant="body2" color="white">
            Already have an account? <Link to="/login" style={{ color: 'white', textDecoration: 'underline' }}>Login here</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
