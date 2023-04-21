import express from "express";

import { UfController } from './controllers/UfController.js';
import { CidadeController } from './controllers/CidadeController.js';
import { BairroController } from './controllers/BairroController.js';
import { ClienteController } from './controllers/ClienteController.js';
import { FuncionarioController } from './controllers/FuncionarioController.js';
import { GerenteController } from './controllers/GerenteController.js';
import { TipoDeFilmeController } from './controllers/TipoDeFilmeController.js';
import { DiretorController } from './controllers/DiretorController.js';
import { ArtistaController } from './controllers/ArtistaController.js';
import { FilmeController } from './controllers/FilmeController.js';
import { FitaController } from './controllers/FitaController.js';

const routes = express.Router();

routes.get('/ufs', UfController.findAll);
routes.get('/ufs/:id', UfController.findByPk);
routes.post('/ufs', UfController.create);
routes.put('/ufs/:id', UfController.update);
routes.delete('/ufs/:id', UfController.delete);

routes.get('/cidades', CidadeController.findAll);
routes.get('/cidades/:id', CidadeController.findByPk);
routes.post('/cidades', CidadeController.create);
routes.put('/cidades/:id', CidadeController.update);
routes.delete('/cidades/:id', CidadeController.delete);
routes.get('/cidades/findByUf/:id', CidadeController.findByUf);

routes.get('/bairros', BairroController.findAll);
routes.get('/bairros/:id', BairroController.findByPk);
routes.post('/bairros', BairroController.create);
routes.put('/bairros/:id', BairroController.update);
routes.delete('/bairros/:id', BairroController.delete);

routes.get('/clientes', ClienteController.findAll);
routes.get('/clientes/:id', ClienteController.findByPk);
routes.post('/clientes', ClienteController.create);
routes.put('/clientes/:id', ClienteController.update);
routes.delete('/clientes/:id', ClienteController.delete);

routes.get('/funcionarios', FuncionarioController.findAll);
routes.get('/funcionarios/:id', FuncionarioController.findByPk);
routes.post('/funcionarios', FuncionarioController.create);
routes.put('/funcionarios/:id', FuncionarioController.update);
routes.delete('/funcionarios/:id', FuncionarioController.delete);

routes.get('/gerentes', GerenteController.findAll);
routes.get('/gerentes/:id', GerenteController.findByPk);
routes.post('/gerentes', GerenteController.create);
routes.put('/gerentes/:id', GerenteController.update);
routes.delete('/gerentes/:id', GerenteController.delete);

routes.get('/tiposdefilme', TipoDeFilmeController.findAll);
routes.get('/tiposdefilme/:id', TipoDeFilmeController.findByPk);
routes.post('/tiposdefilme', TipoDeFilmeController.create);
routes.put('/tiposdefilme/:id', TipoDeFilmeController.update);
routes.delete('/tiposdefilme/:id', TipoDeFilmeController.delete);

routes.get('/diretores', DiretorController.findAll);
routes.get('/diretores/:id', DiretorController.findByPk);
routes.post('/diretores', DiretorController.create);
routes.put('/diretores/:id', DiretorController.update);
routes.delete('/diretores/:id', DiretorController.delete);

routes.get('/artistas', ArtistaController.findAll);
routes.get('/artistas/:id', ArtistaController.findByPk);
routes.post('/artistas', ArtistaController.create);
routes.put('/artistas/:id', ArtistaController.update);
routes.delete('/artistas/:id', ArtistaController.delete);

routes.get('/filmes', FilmeController.findAll);
routes.get('/filmes/:id', FilmeController.findByPk);
routes.post('/filmes', FilmeController.create);
routes.put('/filmes/:id', FilmeController.update);
routes.delete('/filmes/:id', FilmeController.delete);
routes.get('/filmes/findByTipoDeFilme/:id', FilmeController.findByTipoDeFilme);

routes.get('/fitas', FitaController.findAll);
routes.get('/fitas/:id', FitaController.findByPk);
routes.post('/fitas', FitaController.create);
routes.put('/fitas/:id', FitaController.update);
routes.delete('/fitas/:id', FitaController.delete);
routes.get('/fitas/findByFilme/:id', FitaController.findByFilme);

export default routes;