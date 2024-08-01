import React, { useState } from 'react';
import { Typography, Button, Grid, useTheme, Box, Grow, Fade } from '@mui/material';
import heroimage from '../assets/heroimage.svg';
import './Global.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Chatbot from './Chatbot';

const Hero = () => {
  const theme = useTheme();
  const [isButtonVisible, setButtonVisible] = useState(true);

  const handleMetamaskButtonClick = () => {
    const userConfirmed = window.confirm('Do you have Metamask? If not, you will be redirected to the Metamask website.');
    if (userConfirmed) {
      // Redirect to the Metamask website
      window.open('https://metamask.io/', '_blank');
    } else {
      // Hide the button
      setButtonVisible(false);
    }
  };

  return (
    <>
      <Navbar />
      <Grid item xs={12}>
        <div className="ellipse"></div>
      </Grid>
      <Grid
        container
        className="hero-container"
        sx={{ position: 'relative', paddingTop: theme.spacing(8) }} // Padding to avoid overlap with Navbar
      >
        <Chatbot />
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
          <Grow in timeout={1000}>
            <Grid
              container
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant='h2'
                className="hero-text"
                style={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}
              >
                <span style={{ color: '#8A6FF2' }}>SECURELY</span> Store Your Files, with FlickFile
              </Typography>
            </Grid>
          </Grow>
          <Grow in timeout={1500}>
            <Typography
              variant="body1"
              className="description-text"
              style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(8) }}
            >
              FlickerFile is your ultimate decentralized storage solution, offering unmatched security, privacy, and accessibility for all your digital assets.
            </Typography>
          </Grow>
          <Box sx={{ display: 'flex', gap: theme.spacing(2), flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Fade in timeout={2000}>
              <Button
                variant="outlined"
                sx={{ backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: '#8A6FF2', color: '#FFFFFF' } }}
              >
                <Link to='/dashboard' style={{ textDecoration: 'none', color: 'black' }}>
                  UPLOAD NOW
                </Link>
              </Button>
            </Fade>
            <Fade in timeout={2500}>
              <Button
                variant="outlined"
                sx={{ borderColor: '#8A6FF2', color: '#8A6FF2', '&:hover': { backgroundColor: '#8A6FF2', color: '#FFFFFF' } }}
              >
                <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>
                  KNOW MORE
                </Link>
              </Button>
            </Fade>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
          <Fade in timeout={3000}>
            <img
              src={heroimage}
              alt="Hero"
              style={{ width: '100%', maxWidth: '700px', height: 'auto' }}
            />
          </Fade>
        </Grid>

        {/* Button positioned absolutely at the top right */}
        {isButtonVisible && (
          <Box
            sx={{
              position: 'absolute',
              top: theme.spacing(8), // Adjust this value to position the button below the Navbar
              right: theme.spacing(2), // Adjust this value for spacing from the right edge
              zIndex: 1
            }}
          >
            <Button
              variant="outlined"
              onClick={handleMetamaskButtonClick}
              sx={{
                marginRight: '10px',
                paddingY: '6px',
                borderColor: '#8A6FF2',
                color: '#FFFFFF',
                borderRadius: '24px', // Increased border-radius for more curves
                width: 'auto',
                minWidth: '200px',
                '&:hover': { backgroundColor: '#8A6FF2', color: '#FFFFFF' }
              }}
            >
              Don't Have Metamask?
            </Button>
          </Box>
        )}
      </Grid>
    </>
  );
};

export default Hero;
