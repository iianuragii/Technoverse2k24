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
                sx={{ position: 'relative', height: '10vh', width: '100vw', zIndex: 100 }} // Ensure the entire viewport captures events
            >
                <Box
                    component="img"
                    src="../../funnygifsbox.gif"
                    alt="Gif Toy"
                    sx={{
                        position: 'absolute',
                        top: '5px',
                        left: '64px',
                        width: '8rem',
                        height: '8rem',
                        cursor: 'pointer', // Change cursor to pointer when clicking
                    }}
                    onMouseDown={handleMouseDown}
                />
                {showBox && (
                    <Box
                        id="chat-container"
                        sx={{
                            position: 'absolute',
                            top: '125px',
                            left: '60px',
                            width: '30rem',
                            height: '20rem',
                            backgroundColor: '#8A6FF2',
                            border: '1px solid black',
                            padding: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Grid
                            id="chat-history"
                            sx={{ overflowY: 'auto', height: '15rem', width: '100%' }}
                        >
                            {chatHistory.map((entry, index) => (
                                <Grid key={index} className={entry.type + "-message"} sx={{ margin: '0.5rem 0' }}>
                                    {entry.message}
                                </Grid>
                            ))}
                        </Grid>
                        <form id="chat-form" onSubmit={sendMessage} style={{display: 'flex', width: '100%' }}>
                            <Input
                                type="text"
                                id="user-input"
                                placeholder="Enter your message"
                                value={userInput}
                                onChange={e => setUserInput(e.target.value)}
                                sx={{
                                    flexGrow: '1',
                                    border: '1px solid #1d1d1d',
                                    borderRadius: '5px',
                                    marginRight: '0.5rem',
                                    padding: '0.5rem',
                                }}
                            />
                            <Button
                                type="submit"
                                sx={{
                                    backgroundColor: '#1d1d1d',
                                    color: 'white',
                                    borderRadius: '5px',
                                    '&:hover': {
                                        backgroundColor: '#1d1d1d',
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
