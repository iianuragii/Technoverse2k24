import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import logo from '../assets/logo 2.svg'

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <AppBar 
            position="sticky" 
            elevation={0}
            sx={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)', 
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                        src={logo} 
                        alt="FlickFiles Logo" 
                        style={{ height: '40px', width: 'auto' }} // Adjust size as needed
                    />
                </Box>
                <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
                    <Button color="inherit">
                        <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
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
                    {isAuthenticated ? (
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#8A6FF2',
                                color: 'white',
                                '&:hover': { backgroundColor: '#8A6FF2', borderColor: '#8A6FF2' }
                            }}
                            onClick={logout}
                        >
                            Sign out
                        </Button>
                    ) : (
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#8A6FF2',
                                color: 'white',
                                '&:hover': { backgroundColor: '#8A6FF2', borderColor: '#8A6FF2' }
                            }}
                        >
                            <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>
                                Sign in
                            </Link>
                        </Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
