const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve openapi.yaml publicly
app.get('/openapi.yaml', (req, res) => {
  res.sendFile(path.join(__dirname, 'openapi.yaml'));
});

// Basic endpoints (mock implementation)

app.get('/seo/analyze_keywords', (req, res) => {
  res.json({ keywords: ['example keyword 1', 'example keyword 2'] });
});

app.get('/seo/get_top_performers', (req, res) => {
  res.json({
    topQueries: ['top query 1', 'top query 2'],
    topPages: ['top page 1', 'top page 2']
  });
});

app.post('/content/generate_blog', (req, res) => {
  const { topic } = req.body;
  res.json({ post: `This is an SEO blog post about ${topic}.` });
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
