const connection = require('./connection');

const {
  getProdutosQuery,
  getProdutoQueryId,
  postProdutoQueryId,
  putProdutoQueryId,
  deleteProdutoQueryId,
} = require('../utils/Queries-Dict');

const getProdutosModel = async () => {
  const [row] = await connection.execute(getProdutosQuery);
  return row;
};

const getProdutoModelId = async (id) => {
  const [row] = await connection.execute(getProdutoQueryId, [id]);
  return row;
};

const postProdutoModel = async (payload) => {
  const {nome, descricao, preco, data_criacao, data_atualizacao} = payload;
  const [result] = await connection.execute(postProdutoQueryId, [nome, descricao, preco, data_criacao, data_atualizacao]);
  return result;
};

const putProdutoModelId = async (id, payload) => {
  const {nome, descricao, preco, data_criacao, data_atualizacao} = payload;
  const [result] = await connection.execute(putProdutoQueryId, [nome, descricao, preco, data_criacao, data_atualizacao, id]);
  return result;
};

const deleteProdutoModelId = async (id) => {
  const [result] = await connection.execute(deleteProdutoQueryId, [id]);
  return result;
};

module.exports = {
  getProdutosModel,
  getProdutoModelId,
  postProdutoModel,
  putProdutoModelId,
  deleteProdutoModelId,
};
