import {listarTodos, listarPorNome, inserir,alterar,deletar} from '../repository/locadoraRepository.js';

import { Router } from 'express';
const endpoints = Router();



endpoints.post('/cliente', async (req, resp) => {
  try {
    let locadora = req.body;
    let r = await inserir(locadora);
    resp.send(r);
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})


endpoints.get('/cliente/listar', async (req, resp) => {
  try {
    let r = await listarTodos();
    resp.send(r);
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})



endpoints.get('/cliente/busca', async (req, resp) => {
  try {
    let nome = req.query.nome;
    let r = await listarPorNome(nome);
    resp.send(r);
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})



endpoints.put('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let locadora = req.body;
    let r = await alterar(id, locadora);

    resp.send();
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})


endpoints.delete('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let r = await deletar(id);
    resp.send();
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})



export default endpoints;