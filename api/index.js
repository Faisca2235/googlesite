const express = require('express');
const cors = require('cors');
const app = express();

// Ativar CORS para permitir requisições do Google Sites
app.use(cors());

// Endpoint para capturar a tela
app.get('/api/screenshot', (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({ error: 'URL não fornecida' });
  }

  // Lógica para capturar a tela com uma biblioteca, como puppeteer, etc.
  res.json({ message: `Capturando a tela de: ${url}` });
});

// Servidor rodando na porta padrão
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
