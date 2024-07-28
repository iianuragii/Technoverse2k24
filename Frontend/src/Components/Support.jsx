import React from 'react';
import { Typography, Grid, Box, Button, TextField, MenuItem, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Global.css'; // Assuming this contains the gradient and other styles from Hero
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
          How can we assist you? Please select a topic from the drop-down below and provide your email for authentication.
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(2), width: '100%', maxWidth: '500px' }}>
          <TextField
            select
            label="Select Topic"
            value={comment}
            onChange={handleCommentChange}
            variant="outlined"
            fullWidth
            InputProps={{
              style: { color: 'grey', borderColor: 'white' },
              classes: {
                notchedOutline: {
                  borderColor: 'white',
                },
              },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
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
              },
            }}
          >
            <MenuItem value="Technical Issue">Technical Issue</MenuItem>
            <MenuItem value="Billing Inquiry">Billing Inquiry</MenuItem>
            <MenuItem value="General Question">General Question</MenuItem>
          </TextField>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            InputProps={{
              style: { color: 'grey', borderColor: 'white' },
              classes: {
                notchedOutline: {
                  borderColor: 'white',
                },
              },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
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
              },
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

      <Grid item xs={12} sx={{ width: '100%', maxWidth: '800px', marginTop: theme.spacing(4) }}>
        <Typography 
          variant='h4' 
          className="hero-text" 
          style={{ fontWeight: 'bold', marginBottom: theme.spacing(2), textAlign: 'center' }}
        >
          Frequently Asked Questions
        </Typography>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6"><b>How do I reset my password?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your registered email.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6"><b>How do I contact support?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              You can contact support by emailing us at support@flickfile.com or by filling out the contact form on our website.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h6"><b>What is decentralized storage?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Decentralized storage distributes your data across multiple nodes in a network, enhancing security and reducing dependence on a single server.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
    </>
  );
};

export default Support;
