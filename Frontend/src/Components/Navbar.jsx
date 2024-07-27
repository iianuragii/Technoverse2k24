import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar 
            position="static" 
            elevation={0}
            sx={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)', 
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
                    FlickFiles
                </Typography>
                <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
                    <Button color="inherit">
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>About</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to='/support' style={{ textDecoration: 'none', color: 'white' }}>Support</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
                    </Button>
                </Box>
                <Box>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: '#8A6FF2',
                            color: 'white',
                            '&:hover': { backgroundColor: '#8A6FF2', borderColor: '#8A6FF2' }
                        }}
                    >
                        <Link to='/sign-up' style={{ textDecoration: 'none', color: 'white' }}>
                            Sign Up
                        </Link>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
