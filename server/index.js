const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Creator = require('./models/creator');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/creatordb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Creator API Server is running!',
    endpoints: {
      'GET /api/creators': 'Get all creators (with optional search)',
      'GET /api/creators/:id': 'Get creator by ID',
    },
  });
});

// GET /api/creators?search=...
app.get('/api/creators', async (req, res) => {
  try {
    const { search } = req.query;
    const filter = search
      ? { name: { $regex: search, $options: 'i' } }
      : {};

    const creators = await Creator.find(filter);
    res.json(creators);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch creators' });
  }
});

// GET /api/creators/:id
app.get('/api/creators/:id', async (req, res) => {
  try {
    const creator = await Creator.findById(req.params.id);
    if (!creator) {
      return res.status(404).json({ error: 'Creator not found' });
    }
    res.json(creator);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving creator' });
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
