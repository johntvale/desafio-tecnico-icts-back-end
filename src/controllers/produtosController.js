const {
  getProdutosService,
  getProdutoServiceId,
  postProdutoService,
  putProdutoServiceId,
  deleteProdutoServiceId,
 } = require('../services/produtosService');

const getProdutosController = async (_req, res, next) => {
  try {
    const response = await getProdutosService();
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    next(error);    
  }
};

const getProdutoControllerId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await getProdutoServiceId(id);
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    next(error);    
  }
};

const postProdutoController = async (req, res, next) => {
  try {
    const payload = req.body;
    const response = await postProdutoService(payload);
    return res.status(201).json(response);
  } catch (error) {
    console.error(error);
    next(error);    
  }
};

const putProdutoControllerId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const response = await putProdutoServiceId(id, payload);
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    next(error);    
  }
};

const deleteProdutoControllerId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await deleteProdutoServiceId(id);
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    next(error);    
  }
};

module.exports = {
  getProdutosController,
  getProdutoControllerId,
  postProdutoController,
  putProdutoControllerId,
  deleteProdutoControllerId,
};