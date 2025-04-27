const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://forum-database:27017/forum");

// Thread model
const threadSchema = new mongoose.Schema({
    title: String,
    body: String,
    createdAt: { type: Date, default: Date.now },
});
const Thread = mongoose.model("Thread", threadSchema);

// Reply model
const replySchema = new mongoose.Schema({
    threadId: mongoose.Schema.Types.ObjectId,
    username: String,
    body: String,
    createdAt: { type: Date, default: Date.now },
});
const Reply = mongoose.model("Reply", replySchema);

// Routes
app.get("/api/threads", async (req, res) => {
    const threads = await Thread.find().sort({ createdAt: -1 });
    res.json(threads);
});

app.post("/api/threads", async (req, res) => {
    const { title, body } = req.body;
    const thread = new Thread({ title, body });
    await thread.save();
    res.status(201).json(thread);
});

app.get("/api/threads/:id", async (req, res) => {
    const thread = await Thread.findById(req.params.id);
    if (!thread) return res.status(404).json({ error: "Thread not found" });
    res.json(thread);
});

app.get("/api/threads/:id/replies", async (req, res) => {
    const replies = await Reply.find({ threadId: req.params.id }).sort({ createdAt: 1 });
    res.json(replies);
});

app.post("/api/threads/:id/replies", async (req, res) => {
    const { username, body } = req.body;
    const reply = new Reply({
    threadId: req.params.id,
    username,
    body,
    });
    await reply.save();
    res.status(201).json(reply);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`API running on http://localhost:${PORT}`);
});
