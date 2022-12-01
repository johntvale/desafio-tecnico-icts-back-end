const {
  getProdutosModel,
  getProdutoModelId,
  postProdutoModel,
  putProdutoModelId,
  deleteProdutoModelId,
} = require('../models/produtosModel');

const getProdutosService = async () => {
  const result = await getProdutosModel();
  return result;
};

const getProdutoServiceId = async (id) => {
  const result = await getProdutoModelId(id);
  return result;
};

const postProdutoService = async (body) => {
  const result = await postProdutoModel(body);
  return result;
};

const putProdutoServiceId = async (id, body) => {
  const result = await putProdutoModelId(id, body);
  return result;
};

const deleteProdutoServiceId = async (id) => {
  const result = await deleteProdutoModelId(id);
  return result;
};

module.exports = {
  getProdutosService,
  getProdutoServiceId,
  postProdutoService,
  putProdutoServiceId,
  deleteProdutoServiceId,
};