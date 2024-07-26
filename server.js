const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());  

app.post('/', (req, res) => {
  const { email } = req.body;
  console.log('Received email: ', email);
});

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
