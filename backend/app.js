const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB (MongoDB URI will be set in Docker Compose)
mongoose.connect('mongodb://mongodb:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

// Simple route for testing
app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
});
