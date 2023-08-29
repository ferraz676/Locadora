import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import locadoraController from './controller/locadoraController.js';

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(locadoraController);


servidor.listen(
  process.env.PORT,
  () => console.log(`API subiu na porta ${process.env.PORT}`));