import { Box, TextField, InputAdornment } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2, color: 'black' }}>
      <Box sx={{ flexGrow: 1 }}>
      <TextField
        variant="outlined"
         InputProps={{
        //   startAdornment: (
        //     // <InputAdornment position="start">
        //     //   <SearchIcon sx={{ color: 'black' }} />
        //     // </InputAdornment>
        //   )
          sx: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
              color: 'black',
            },
            '& .MuiInputBase-input': {
              color: 'black',
            },
            height: '30px', // Adjust the height of the input field
            width: '70vh',
            padding: '0 8px'
          },
        }}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 1,
          width: '70vh',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black',
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
          },
        }}
      />
      </Box>      
      <Box sx={{ display: 'flex', gap: 6, marginRight: '5%' }}>
        <Link
          to='/'
          style={{textDecoration:'none', color:'black', fontSize:'5vh'}}
        >
          Home
        </Link>
        <Link
          to='/about'
          style={{textDecoration:'none', color:'black', fontSize:'5vh'}}
        >
          About
        </Link>
        <Link
          to='/faq'
          style={{textDecoration:'none', color:'black', fontSize:'5vh'}}
        >
          FAQ
        </Link>
      </Box>      
    </Box>
  );
}

export default Navbar;