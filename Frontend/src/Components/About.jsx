import React from 'react';
import { Typography, Grid, useTheme, Box, Grow, Fade } from '@mui/material';
import Aboutpic from '../assets/Aboutpic.svg';
import './Global.css';
import Navbar from './Navbar';
import Chatbot from './Chatbot';

const About = () => {
  const theme = useTheme();

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
        <Grow in timeout={1000}>
          <Typography 
            variant='h2' 
            className="hero-text" 
            style={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}
          >
            <span style={{ color: '#8A6FF2' }}>More</span> About us
          </Typography>
        </Grow>
        <Grow in timeout={1500}>
          <Typography 
            variant="body1" 
            className="description-text"
            style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(4) }}
          >
            Description: FlickFile is your ultimate decentralized storage solution, offering unmatched security, privacy, and accessibility for all your digital assets. Our mission is to empower individuals and businesses with control over their digital assets through innovative and secure decentralized technologies.
            <p>
            Introduction:
            At FlickFile, we believe in the power of decentralization. Our platform is designed to provide a seamless and secure storage solution, leveraging the latest advancements in blockchain technology. Unlike traditional centralized storage systems, FlickFile ensures that your data is distributed across multiple nodes, enhancing security and reducing reliance on a single server.
            </p> 
          </Typography>
        </Grow>
      </Grid>
      <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
        <Fade in timeout={2000}>
          <img 
            src={Aboutpic} 
            alt="Hero" 
            style={{ width: '100%', maxWidth: '700px', height: 'auto' }} 
          />
        </Fade>
        
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
        <Grow in timeout={2500}>
          <Typography 
            variant='h4' 
            className="hero-text" 
            style={{ fontWeight: 'bold'}}
          >
            <span style={{ color: '#8A6FF2' }}>Key</span> Features and Benefits
          </Typography>
        </Grow>
      </Grid>   
      
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} sm={6}>
          <Grow in timeout={3000}>
            <Box>
              <Typography variant="h6"><b>Enhanced Data Privacy and Security</b></Typography>
              <Typography variant="body2" className="description-text" style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}>
                Data Breach Prevention: FlickFile significantly decreases the risk of data breaches compared to centralized solutions by distributing data across a decentralized network.
                Unauthorized Access Reduction: Our advanced encryption methods and blockchain technology minimize the risk of unauthorized access to sensitive information.
              </Typography>
            </Box>
          </Grow>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grow in timeout={3500}>
            <Box>
              <Typography variant="h6"><b>User Ownership and Control</b></Typography>
              <Typography variant="body2" className="description-text" style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}>
                Increased User Satisfaction: Users have full control over their data, including who can access it and for how long. This level of control boosts user satisfaction and trust in the platform.
                Reduced Third-Party Dependency: FlickFile eliminates the need for third-party providers, giving users direct control over their data management processes.
              </Typography>
            </Box>
          </Grow>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grow in timeout={4000}>
            <Box>
              <Typography variant="h6"><b>Cost Savings</b></Typography>
              <Typography variant="body2" className="description-text" style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}>
                Operational Cost Reduction: By decentralizing storage, FlickFile reduces operational costs related to data storage and management.Scalability: Our platform scales efficiently with your needs, ensuring that you only pay for the storage you use without hidden costs.
                Social Impact
              </Typography>
            </Box>
          </Grow>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grow in timeout={4500}>
            <Box>
              <Typography variant="h6"><b>Social Impact</b></Typography>
              <Typography variant="body2" className="description-text" style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}>
                Empowerment: FlickFile empowers individuals and businesses by giving them control over their digital assets, promoting digital independence.
                Education on Decentralization: Our integrated chatbot educates users about blockchain technology, decentralization, and its benefits, fostering a knowledgeable user base.
              </Typography>
            </Box>
          </Grow>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default About;
