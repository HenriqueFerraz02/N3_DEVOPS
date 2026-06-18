const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>N3 DevOps - Aplicacao rodando!</h1>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor funcionando' });
});

app.get('/soma', (req, res) => {
  const { a, b } = req.query;
  const resultado = Number(a) + Number(b);
  res.json({ resultado });
});
// VULNERABILIDADE: rota expoe dados sensiveis
app.get('/admin', (req, res) => {
  const senha = 'admin123';
  res.json({ usuario: 'admin', senha: senha });
});
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;
