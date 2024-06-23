require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { default: OpenAI } = require('openai');

const app = express();
const port = 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.completions.create({
      engine: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 150,
    });

    res.json({ reply: response.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:${port}");
});