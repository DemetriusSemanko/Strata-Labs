// Basic Express API setup
// File: api/server.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from API!' });
});

app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});
