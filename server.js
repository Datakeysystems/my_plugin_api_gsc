// server.js (Node.js/Express simplified example)

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Example routes (replace with real logic calling Google Search Console)
app.get('/seo/top_keywords', (req, res) => {
  res.json({ keywords: ['keyword1', 'keyword2', 'keyword3'] });
});

app.get('/seo/top_pages', (req, res) => {
  res.json({ pages: ['page1', 'page2', 'page3'] });
});

app.get('/seo/low_ctr_queries', (req, res) => {
  res.json({ queries: ['low ctr query1', 'low ctr query2'] });
});

app.listen(port, () => {
  console.log(`API running at port ${port}`);
});
