// server.js
const express = require('express');
const cors = require('cors');
const { connectDB, getDB } = require('./Modules_Backend/connectDB'); // Import the DB connection

const app = express();
const PORT = 5000;

const { runChat } = require('./Modules_Backend/runChat');

// Middleware
app.use(cors());
app.use(express.json());  

app.post('/', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received email: ', email);
  console.log('Received password: ', password);

  try {
    const db = await getDB();
    const collection = db.collection('FlickCollection');  // Use FlickCollections collection
    const result = await collection.insertOne({ email, password, confirmPassword });
    console.log("Sign-up details are sent to the Database.")
    res.json({ message: 'Signup data received', result });
    const check = await collection.findOne({ email });

    if (check === null) {  // Check if no document was found
      const result = await collection.insertOne({ email, password });    
      console.log(`Sign-up details are sent to the Database.`);
      res.json({ message: 'Signup data received', result });
    } else {
      console.log('Email ID already exists');
      res.status(400).json({ error: 'Email ID already exists' });
    }
  } catch (error) {
    console.error('Error in sign-up endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received email: ', email);
  console.log('Received password: ', password);

  try {
    const db = await getDB();
    const collection = db.collection('FlickCollection');

    const user = await collection.findOne({ email });
    console.log(user);

    if (user && user.email === email && user.password === password) {
      console.log("True");
      res.status(200).json({ success: true });
    } else {
      console.log("False");
      res.status(401).json({ error: 'Invalid email or password' });  // Unauthorized
    }
  } catch (error) {
    console.error('Error in login endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    console.log('User: ', userInput);
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

app.listen(PORT, async () => {
  try {
    await connectDB();  // Connect to the DB when the server starts
    console.log(`Server is running at Port ${PORT}`);
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
});

// Handle application shutdown gracefully
process.on('SIGINT', async () => {
  process.exit(0);
});