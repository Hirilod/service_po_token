const express = require('express');
const { generate } = require('youtube-po-token-generator');
const app = express();
const PORT = 3000;

app.get('/generate-po-token', async (req, res) => {
  try {
    const { visitorData, poToken } = await generate();
    res.json({ visitorData, poToken });
  } catch (error) {
    console.error('Ошибка при генерации po_token:', error);
    res.status(500).json({ error: 'Ошибка при генерации po_token' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});