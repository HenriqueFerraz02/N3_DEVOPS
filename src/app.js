const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>N3 DevOps - Versao Teste! 2026</h1>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor funcionando' });
});

app.get('/soma', (req, res) => {
  const { a, b } = req.query;
  const resultado = Number(a) + Number(b);
  res.json({ resultado });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;
