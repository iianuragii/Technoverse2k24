import React from 'react';
import { Button, TextField, Typography, Container, Box, useTheme, styled } from '@mui/material';
import './Hero.css';

const CustomTextField = styled(TextField)(({ theme }) => ({
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
        <Box component="form" mt={4}>
          <CustomTextField label="Email" variant="outlined" fullWidth margin="normal" />
          <CustomTextField label="Password" variant="outlined" fullWidth margin="normal" type="password" />
          <CustomTextField label="Confirm Password" variant="outlined" fullWidth margin="normal" type="password" />
          <Box mt={4}>
            <Button  variant="outlined"
                        sx={{
                            borderColor: '#8A6FF2',
                            color: 'white',
                            '&:hover': { backgroundColor: '#8A6FF2', borderColor: '#8A6FF2' }
                        }} size="large" fullWidth>
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
