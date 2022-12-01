require('dotenv').config();
const cors = require('cors');
const app = require('./app');

const {
  getProdutosController,
  getProdutoControllerId,
  postProdutoController,
  putProdutoControllerId,
  deleteProdutoControllerId } = require('./controllers/produtosController');
const { errorHandler } = require('./middlewares/errorHandler');

app.use(
  cors({
    origin: '*',
  }),
);

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(errorHandler);

app.get('/produtos', getProdutosController);
app.get('/produtos/:id', getProdutoControllerId);
app.post('/produtos/:id:/editar', postProdutoController);
app.put('/produtos/:id/editar', putProdutoControllerId);
app.delete('/produtos/:id/apagar', deleteProdutoControllerId);

app.listen(process.env.PORT, () => console.log(`Api rodando na porta ${process.env.PORT}`));
