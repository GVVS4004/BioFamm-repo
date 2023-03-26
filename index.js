const express = require('express');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');

const app = express();

// Apply rate limiting middleware
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100 // limit each IP to 100 requests per minute
});
app.use(limiter);

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/Blogs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB database');
});

// Define blog post schema and model
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: [String],
  tags: [String],
  author: String,
  timestamp: { type: Date, default: Date.now }
});
const Post = mongoose.model('posts', postSchema);

// API endpoints
app.get('/posts', async (req, res) => {
  const { category, tag, page = 1, limit = 7 } = req.query;
  const query = {};
  console.log(req.query);
  if (category) {
    query.category = category;
  }
  if (tag) {
    query.tags = tag;
  }
  const posts = await Post.find(query)
    .sort({ timestamp: -1 })
    .skip((page - 1) * limit)
    .limit(limit);
  res.json(posts);
//   console.log(posts.json());
});

app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  res.json(post);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});