const express = require('express');

const UfController = require('./controllers/UfController');
const CidadeController = require('./controllers/CidadeController');
const BairroController = require('./controllers/BairroController');
const ClienteController = require('./controllers/ClienteController');
const FuncionarioController = require('./controllers/FuncionarioController');
const GerenteController = require('./controllers/GerenteController');
const TipoDeFilmeController = require('./controllers/TipoDeFilmeController');
const DiretorController = require('./controllers/DiretorController');
const ArtistaController = require('./controllers/ArtistaController');
const FilmeController = require('./controllers/FilmeController');
const FitaController = require('./controllers/FitaController');
const EmprestimoController = require('./controllers/EmprestimoController');
const ReservaController = require('./controllers/ReservaController');
const MultaController = require('./controllers/MultaController');
const DevolucaoController = require('./controllers/DevolucaoController');

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
routes.get('/fitas/findByDanificadaAndDisponivel/:danificada/:disponivel', FitaController.findByDanificadaAndDisponivel);

routes.get('/emprestimos', EmprestimoController.findAll);
routes.get('/emprestimos/:id', EmprestimoController.findByPk);
routes.post('/emprestimos', EmprestimoController.create);
routes.put('/emprestimos/:id', EmprestimoController.update);
routes.delete('/emprestimos/:id', EmprestimoController.delete);
routes.get('/emprestimos/findTotaisAndQuantidadesEmprestimosOfClientesByPeriodo/:inicio/:termino', EmprestimoController.findTotaisAndQuantidadesEmprestimosOfClientesByPeriodo);
routes.get('/emprestimos/findByCliente/:clienteId', EmprestimoController.findByCliente);
routes.get('/emprestimos/findByClienteAndPeriodo/:clienteId/:inicio/:termino', EmprestimoController.findByClienteAndPeriodo);
routes.get('/emprestimos/findQuantidadesEmprestimosOfBairrosByPeriodo/:inicio/:termino', EmprestimoController.findQuantidadesEmprestimosOfBairrosByPeriodo);

routes.get('/reservas', ReservaController.findAll);
routes.get('/reservas/:id', ReservaController.findByPk);
routes.post('/reservas', ReservaController.create);
routes.put('/reservas/:id', ReservaController.update);
routes.delete('/reservas/:id', ReservaController.delete);

routes.get('/multas', MultaController.findAll);
routes.get('/multas/:emprestimoId/:fitaId', MultaController.findByPk);
routes.post('/multas', MultaController.create);
routes.put('/multas/:emprestimoId/:fitaId', MultaController.update);
routes.delete('/multas/:emprestimoId/:fitaId', MultaController.delete);

routes.get('/devolucoes', DevolucaoController.findAll);
routes.get('/devolucoes/:emprestimoId/:fitaId', DevolucaoController.findByPk);
routes.post('/devolucoes', DevolucaoController.create);
routes.put('/devolucoes/:emprestimoId/:fitaId', DevolucaoController.update);
routes.delete('/devolucoes/:emprestimoId/:fitaId', DevolucaoController.delete);

module.exports = routes;