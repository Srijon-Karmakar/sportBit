// server/index.js
const express = require('express');
const path = require('path');
const app = express();

// Serve React static files
app.use(express.static(path.join(__dirname, '../sportBitFrontend/build')));

// Route to serve Hero page (React handles route inside)
app.get('/hero', (req, res) => {
  res.sendFile(path.join(__dirname, '../sportBitFrontend/build/index.html'));
});

// Other API routes go here...

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
