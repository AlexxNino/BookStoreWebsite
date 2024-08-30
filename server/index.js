require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors middleware
const booksRouter = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/books', booksRouter);

// Sync database and start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
