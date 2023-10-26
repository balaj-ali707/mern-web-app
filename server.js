const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const apiKey = process.env.API_KEY;

app.use(cors())

app.get('/top-stories', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
    );
    res.json(response.data.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch top stories' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});