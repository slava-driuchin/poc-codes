const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Import body-parser middleware
const app = express();
const port = 8080;

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to handle POST requests to the root URL
app.post('/', (req, res) => {
  // Log request header and body
  console.log('POST Request Headers:', req.headers);
  console.log('POST Request Body:', req.body);

  // Send the HTML file back as response
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware to serve static files for GET requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files from the current directory
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
