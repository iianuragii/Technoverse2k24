import React from 'react';
import { Typography, Button, Grid, useTheme, Box, Grow, Fade } from '@mui/material';
import heroimage from '../assets/heroimage.svg';
import './Global.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const theme = useTheme();

  return (
    <Grid 
      container 
      className="hero-container"
    >
      <Grid item xs={12}>
        <div className="ellipse"></div>
      </Grid>

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
          <Typography 
            variant='h2' 
            className="hero-text" 
            style={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}
          >
            <span style={{ color: '#8A6FF2' }}>SECURELY</span> Store Your Files, with FlickFile
          </Typography>
        </Grow>
        <Grow in timeout={1500}>
          <Typography 
            variant="body1" 
            className="description-text"
            style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(4) }}
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
              <Link to='/sign-up' style={{ textDecoration: 'none', color: 'black' }}>
                GET STARTED
              </Link>
            </Button>
          </Fade>
          <Fade in timeout={2500}>
            <Button 
              variant="outlined" 
              sx={{ borderColor: '#8A6FF2', color: '#8A6FF2', '&:hover': { backgroundColor: '#8A6FF2', color: '#FFFFFF' } }}
            >
              Upload File
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
    </Grid>
  );
};

export default Hero;
