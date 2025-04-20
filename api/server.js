const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const cors = require('cors');

app.use(express.json());
// app.use(cors({ origin: "http://localhost:8080" }));
app.use(cors());


const mongoUri = "mongodb://forum-database:27017/forum";
let db;

MongoClient.connect(mongoUri)
  .then(client => {
    db = client.db();
    console.log("Connected to MongoDB");
  })
  .catch(err => console.error("MongoDB connection error:", err));

app.post('/api/posts', async (req, res) => {
    if (!req.body.content) return res.status(400).json({ error: "Content is required" });
    const result = await db.collection('posts').insertOne({ content: req.body.content, createdAt: new Date() });
    res.json({ message: "Post created", postId: result.insertedId });
});

app.get('/api/posts', async (req, res) => {
    const posts = await db.collection('posts').find().toArray();
    res.json(posts);
});

app.listen(3000, '0.0.0.0', () => console.log("API running on port 3000"));
// app.listen(3000, () => console.log("API running on port 3000"));