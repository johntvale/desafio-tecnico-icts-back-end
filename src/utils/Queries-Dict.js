const getProdutosQuery = 'SELECT * FROM ICTSProductsManager.produtos;';

const getProdutoQueryId = 'SELECT * FROM ICTSProductsManager.produtos WHERE id = ?;';

const postProdutoQuery = `INSERT INTO produtos
(nome, descricao, preco, data_criacao, data_atualizacao) VALUES (?, ?, ?, ?, ?);`;

const putProdutoQueryId = `UPDATE ICTSProductsManager.produtos SET nome = ?, descricao = ?,
preco = ?, data_criacao = ?, data_atualizacao = ? WHERE id = ?;`;

const deleteProdutoQueryId = 'DELETE * FROM ICTSProductsManager.produtos WHERE id = ?;';

module.exports = {
  getProdutosQuery,
  getProdutoQueryId,
  postProdutoQuery,
  putProdutoQueryId,
  deleteProdutoQueryId,
};