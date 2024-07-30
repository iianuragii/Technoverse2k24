import React, { useState } from 'react';
import { Box, Button, Grid, Input } from '@mui/material';

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showBox, setShowBox] = useState(false);
    const [mouseDownTime, setMouseDownTime] = useState(0);

    const handleMouseDown = () => {
        setMouseDownTime(Date.now());
    };

    const handleMouseUp = () => {
        if (Date.now() - mouseDownTime < 200) {
            setShowBox(prevState => !prevState);
        }
    };

    async function sendMessage(event) {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/chat", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userInput }),
            });

            const data = await response.json();
            const botMessage = data.response;

            setChatHistory(prevHistory => [...prevHistory, { type: 'user', message: userInput }, { type: 'bot', message: botMessage }]);
            setUserInput('');
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Box
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                sx={{ 
                    position: 'fixed', 
                    bottom: '10px', 
                    right: '10px', 
                    height: '20vh', 
                    width: '8rem', 
                    zIndex: 100 
                }} // Move to bottom right
            >
                <Box
                    component="img"
                    src="../../funnygifsbox.gif"
                    alt="Gif Toy"
                    sx={{
                        position: 'absolute',
                        top: '5px',
                        left: '0px', 
                        width: '8rem',
                        height: '8rem',
                        cursor: 'pointer', 
                    }}
                    onMouseDown={handleMouseDown}
                />
                {showBox && (
                    <Box
                        id="chat-container"
                        sx={{
                            position: 'absolute',
                            top: '-20rem',
                            left: '-30rem', // Adjust to make sure it opens to the left of the chatbot
                            width: { xs: '20rem', sm: '25rem', md: '30rem' },
                            height: '20rem',
                            background: 'rgba(255, 255, 255, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.18)',
                            borderRadius: '15px',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            padding: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Grid
                            id="chat-history"
                            sx={{ overflowY: 'auto', height: '15rem', width: '100%', padding: '1rem', fontFamily: 'Arial, sans-serif' }}
                        >
                            {chatHistory.map((entry, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        margin: '1rem 0',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '10px',
                                        maxWidth: '100%',
                                        alignSelf: entry.type === 'user' ? 'flex-end' : 'flex-start',
                                        backgroundColor: entry.type === 'user' ? '#8A6FF2' : '#444',
                                        color: '#fff',
                                        wordBreak: 'break-word',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: entry.type === 'user' ? 'flex-end' : 'flex-start',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: '0.75rem',
                                            color: entry.type === 'user' ? 'white' : 'white',
                                            marginBottom: '0.25rem',
                                            textAlign: entry.type === 'user' ? 'right' : 'left',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {entry.type === 'user' ? 'You' : 'Mr. Flicky'}
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: '0.9rem',
                                            textAlign: entry.type === 'user' ? 'right' : 'left',
                                        }}
                                    >
                                        {entry.message}
                                    </Box>
                                </Box>
                            ))}
                        </Grid>
                        <form id="chat-form" onSubmit={sendMessage} style={{ display: 'flex', width: '100%' }}>
                            <Input
                                type="text"
                                id="user-input"
                                placeholder="Enter your message"
                                value={userInput}
                                onChange={e => setUserInput(e.target.value)}
                                sx={{
                                    flexGrow: 1,
                                    border: '1px solid #fff',
                                    borderRadius: '5px',
                                    marginRight: '0.5rem',
                                    padding: '0.5rem',
                                    color: '#fff',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    fontFamily: 'Poppins, sans-serif',
                                }}
                            />
                            <Button
                                type="submit"
                                sx={{
                                    backgroundColor: '#8A6FF2',
                                    color: 'white',
                                    borderRadius: '5px',
                                    '&:hover': {
                                        backgroundColor: '#7A5EE2',
                                    },
                                }}
                            >
                                {loading ? 'Sending...' : 'Send'}
                            </Button>
                        </form>
                    </Box>
                )}
            </Box>
        </>
    );
}

export default Chatbot;
