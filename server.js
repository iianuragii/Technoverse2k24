const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

const { runChat } = require('./Modules_Backend/runChat');

// Middleware
app.use(cors());
app.use(express.json());  

app.post('/sign-up', (req, res) => {
  const { email, password, confirmPassword } = req.body;
  console.log('Received email: ', email);
  console.log('Received password: ', password);
  console.log('Received confirmPassword: ', confirmPassword);

  res.json({ message: 'Signup data received' });
});

app.post('/chat', async (req, res) => {
  try {
      const userInput = req.body?.userInput;
      console.log('User: ', userInput)
      if (!userInput) {
          return res.status(400).json({ error: 'Invalid request body' });
      }
      const response = await runChat(userInput);
      res.json({ response });
  } catch (error) {
      console.error('Error in chat endpoint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});

