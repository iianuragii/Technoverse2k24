import React from 'react';
import { Typography, Grid, Box, Button, TextField, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Global.css'; 
import Navbar from './Navbar';
import Chatbot from './Chatbot';

const Support = () => {
  const theme = useTheme();
  const [comment, setComment] = React.useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <>
      <Navbar/>
      <Grid item xs={12}>
        <div className="ellipse"></div>
      </Grid>
      <Grid 
        container 
        className="hero-container"
      >
        <Chatbot/>
      <Grid 
        item 
        xs={12} 
        md={6} 
        container 
        direction="column" 
        alignItems={{ xs: 'center', md: 'flex-start' }} 
        justifyContent="flex-start"
        sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: { xs: theme.spacing(1), md: theme.spacing(2) } }}
      >
        <Typography 
          variant='h2' 
          className="hero-text" 
          style={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}
        >
          <span style={{ color: '#8A6FF2' }}>Support</span> Center
        </Typography>
        <Typography 
          variant="body1" 
          className="description-text"
          style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(4) }}
        >
          How can we assist you? Please describe your issue below and provide your email for authentication.
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(2), width: '100%', maxWidth: '500px' }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            InputProps={{
              style: {
                color: 'grey',
                borderColor: 'white'
              }
            }}
            InputLabelProps={{
              style: {
                color: 'white'
              }
            }}
            sx={{
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
              }
            }}
          />
          <TextField
            label="Comment"
            variant="outlined"
            multiline
            rows={4}
            value={comment}
            onChange={handleCommentChange}
            fullWidth
            InputProps={{
              style: {
                color: 'grey',
                borderColor: 'white'
              }
            }}
            InputLabelProps={{
              style: {
                color: 'white'
              }
            }}
            sx={{
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
              }
            }}
          />
          <Button 
            variant="contained" 
            sx={{ backgroundColor: '#8A6FF2', color: 'white', '&:hover': { backgroundColor: '#6A5ACD' } }}
          >
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
    </>
  );
};

export default Support;
