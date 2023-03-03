const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Uf = require('../models/Uf');
const Cidade = require('../models/Cidade');
const Bairro = require('../models/Bairro');
const Cliente = require('../models/Cliente');
const Funcionario = require('../models/Funcionario');
const Gerente = require('../models/Gerente');
const Telefone = require('../models/Telefone');
const TipoDeFilme = require('../models/TipoDeFilme');
const Diretor = require('../models/Diretor');
const Artista = require('../models/Artista');
const Filme = require('../models/Filme');
const FilmeDiretor = require('../models/FilmeDiretor');
const Participacao = require('../models/Participacao');
const Fita = require('../models/Fita');
const Emprestimo = require('../models/Emprestimo');
const ItemDeEmprestimo = require('../models/ItemDeEmprestimo');
const Multa = require('../models/Multa');
const Devolucao = require('../models/Devolucao');
const Reserva = require('../models/Reserva');

const connection = new Sequelize(dbConfig);

Uf.init(connection);
Cidade.init(connection);
Bairro.init(connection);
Cliente.init(connection);
Funcionario.init(connection);
Gerente.init(connection);
Telefone.init(connection);
TipoDeFilme.init(connection);
Diretor.init(connection);
Artista.init(connection);
Filme.init(connection);
FilmeDiretor.init(connection);
Participacao.init(connection);
Fita.init(connection);
Emprestimo.init(connection);
ItemDeEmprestimo.init(connection);
Multa.init(connection);
Devolucao.init(connection);
Reserva.init(connection);

// A ordem das efetivações das associações importa: neste exemplo, Uf.associate antes de Cidade.associate deixa foreignKey: { allowNull: true } poder ser null
Uf.associate(connection.models);
Cidade.associate(connection.models);
Bairro.associate(connection.models);
Cliente.associate(connection.models);
Funcionario.associate(connection.models);
Gerente.associate(connection.models);
Telefone.associate(connection.models);
TipoDeFilme.associate(connection.models);
Diretor.associate(connection.models);
Filme.associate(connection.models);
Artista.associate(connection.models);
Participacao.associate(connection.models);
Fita.associate(connection.models);
Emprestimo.associate(connection.models);
ItemDeEmprestimo.associate(connection.models);
Multa.associate(connection.models);
Devolucao.associate(connection.models);
Reserva.associate(connection.models);

(async () => {
    await connection.sync({ force: true });

    const uf1 = await Uf.create({ sigla: "ES", nome: "Espírito Santo" });
    const uf2 = await Uf.create({ sigla: "MG", nome: "Minas Gerais" });

    const cidade1 = await Cidade.create({ nome: "Cachoeiro", ufId: 1 });
    const cidade2 = await Cidade.create({ nome: "Alegre", ufId: 1 });
    const cidade3 = await Cidade.create({ nome: "Belo Horizonte", ufId: 2 });
    const cidade4 = await Cidade.create({ nome: "Lavras", ufId: 2 });

    const bairro1 = await Bairro.create({ nome: "Vila do Sul", cidadeId: 1 });
    const bairro2 = await Bairro.create({ nome: "Guararema", cidadeId: 1 });
    const bairro3 = await Bairro.create({ nome: "Maria Ortiz", cidadeId: 2 });
    const bairro4 = await Bairro.create({ nome: "Centro", cidadeId: 2 });
    const bairro5 = await Bairro.create({ nome: "Barro Preto", cidadeId: 3 });
    const bairro6 = await Bairro.create({ nome: "Cidade Jardim", cidadeId: 3 });
    const bairro7 = await Bairro.create({ nome: "Vale do Sol", cidadeId: 4 });
    const bairro8 = await Bairro.create({ nome: "Nova Lavras", cidadeId: 4 });

    const cliente1 = await Cliente.create({ nome: "Cliente João", cpf: "111.111.111-11", rua: "Rua Dr. Brício Mesquita", numero: 1, debito: 0.0, nascimento: "1981-01-01", bairroId: 3 });
    const cliente2 = await Cliente.create({ nome: "Cliente José", cpf: "222.222.222-22", rua: "Rua José Figueiredo", numero: 2, debito: 0.0, nascimento: "1982-02-02", bairroId: 1 });

    const cliente1telefone1 = await Telefone.create({ numero: "(11) 1111-1111", clienteId: 1 });
    const cliente1telefone2 = await Telefone.create({ numero: "(22) 2222-2222", clienteId: 1 });
    const cliente2telefone1 = await Telefone.create({ numero: "(33) 3333-3333", clienteId: 2 });
    const cliente2telefone2 = await Telefone.create({ numero: "(44) 4444-4444", clienteId: 2 });

    const funcionario1 = await Funcionario.create({ nome: "Funcionário João", cpf: "333.333.333-33", rua: "Rua Dr. Brício Mesquita", numero: 1, login: "func1", senha: "123", bairroId: 3 });
    const funcionario2 = await Funcionario.create({ nome: "Funcionário José", cpf: "444.444.444-44", rua: "Rua José Figueiredo", numero: 2, login: "func2", senha: "123", bairroId: 1 });

    const funcionario1telefone1 = await Telefone.create({ numero: "(55) 5555-5555", funcionarioId: 1 });
    const funcionario2telefone2 = await Telefone.create({ numero: "(66) 6666-6666", funcionarioId: 2 });

    const gerente1 = await Gerente.create({ nome: "Gerente João", cpf: "555.555.555-55", rua: "Rua Dr. Brício Mesquita", numero: 1, login: "ger1", senha: "123", bairroId: 3 });
    const gerente2 = await Gerente.create({ nome: "Gerente José", cpf: "666.666.666-66", rua: "Rua José Figueiredo", numero: 2, login: "ger2", senha: "123", bairroId: 1 });

    const gerente1telefone1 = await Telefone.create({ numero: "(77) 7777-7777", gerenteId: 1 });
    const gerente2telefone2 = await Telefone.create({ numero: "(88) 8888-8888", gerenteId: 2 });

    const tipoDeFilme1 = await TipoDeFilme.create({ nome: "Promoção A", prazo: 1, preco: 5.00 });
    const tipoDeFilme2 = await TipoDeFilme.create({ nome: "Promoção B", prazo: 2, preco: 10.00 });
    const tipoDeFilme3 = await TipoDeFilme.create({ nome: "Promoção C", prazo: 3, preco: 15.00 });

    const diretor1 = await Diretor.create({ nome: "Sheldon Lettich" });
    const diretor2 = await Diretor.create({ nome: "James Cameron" });
    const diretor3 = await Diretor.create({ nome: "Jon Landau" });
    const diretor4 = await Diretor.create({ nome: "Quentin Tarantino" });

    const fs = require('fs');

    const artista1ImagemBase64 = Buffer.from(fs.readFileSync('./assets/images/artista1.png')).toString('base64');
    const artista2ImagemBase64 = Buffer.from(fs.readFileSync('./assets/images/artista2.png')).toString('base64');
    const artista3ImagemBase64 = Buffer.from(fs.readFileSync('./assets/images/artista3.png')).toString('base64');
    const artista4ImagemBase64 = Buffer.from(fs.readFileSync('./assets/images/artista4.png')).toString('base64');
    const artista5ImagemBase64 = Buffer.from(fs.readFileSync('./assets/images/artista5.png')).toString('base64');
    const artista6ImagemBase64 = Buffer.from(fs.readFileSync('./assets/images/artista6.png')).toString('base64');
    const artista7ImagemBase64 = Buffer.from(fs.readFileSync('./assets/images/artista7.png')).toString('base64');

    const artista1 = await Artista.create({ nome: "Jean Claude Van Damme", imagem: artista1ImagemBase64 });
    const artista2 = await Artista.create({ nome: "Geoffrey Lewis", imagem: artista2ImagemBase64 });
    const artista3 = await Artista.create({ nome: "Bolo Yeung", imagem: artista3ImagemBase64 });
    const artista4 = await Artista.create({ nome: "Leonardo DiCaprio", imagem: artista4ImagemBase64 });
    const artista5 = await Artista.create({ nome: "Kate Winslet", imagem: artista5ImagemBase64 });
    const artista6 = await Artista.create({ nome: "Sam Worthington", imagem: artista6ImagemBase64 });
    const artista7 = await Artista.create({ nome: "Zoë Saldaña", imagem: artista7ImagemBase64 });

    const filme1ImagemBase64 = Buffer.from(fs.readFileSync('./assets/images/filme1.png')).toString('base64');
    const filme2ImagemBase64 = Buffer.from(fs.readFileSync('./assets/images/filme2.png')).toString('base64');
    const filme3ImagemBase64 = Buffer.from(fs.readFileSync('./assets/images/filme3.png')).toString('base64');
    const filme4ImagemBase64 = Buffer.from(fs.readFileSync('./assets/images/filme4.png')).toString('base64');

    const filme1 = await Filme.create({ titulo: "Duplo Impacto", genero: "Ação", duracao: "02:00", imagem: filme1ImagemBase64, tipoDeFilmeId: 1 });
    const filme2 = await Filme.create({ titulo: "Titanic", genero: "Romance", duracao: "02:30", imagem: filme2ImagemBase64, tipoDeFilmeId: 2 });
    const filme3 = await Filme.create({ titulo: "Avatar", genero: "Ficção Científica", duracao: "03:00", imagem: filme3ImagemBase64, tipoDeFilmeId: 3 });
    const filme4 = await Filme.create({ titulo: "Dor e Glória", genero: "Drama", duracao: "03:00", imagem: filme4ImagemBase64, tipoDeFilmeId: 3 });

    await filme1.addDiretores(diretor1, { through: 'FilmeDiretor' });
    await filme2.addDiretores(diretor2, { through: 'FilmeDiretor' });
    await filme3.addDiretores(diretor2, { through: 'FilmeDiretor' });
    await filme4.addDiretores(diretor3, { through: 'FilmeDiretor' });
    await filme4.addDiretores(diretor4, { through: 'FilmeDiretor' });

    const participacao1 = await Participacao.create({ personagem: "Alex", artistaId: artista1.id, filmeId: filme1.id });
    const participacao2 = await Participacao.create({ personagem: "Chad", artistaId: artista1.id, filmeId: filme1.id });
    const participacao3 = await Participacao.create({ personagem: "Frank", artistaId: artista2.id, filmeId: filme1.id });
    const participacao4 = await Participacao.create({ personagem: "Moon", artistaId: artista3.id, filmeId: filme1.id });
    const participacao5 = await Participacao.create({ personagem: "Jack", artistaId: artista4.id, filmeId: filme2.id });
    const participacao6 = await Participacao.create({ personagem: "Rose", artistaId: artista5.id, filmeId: filme2.id });
    const participacao7 = await Participacao.create({ personagem: "Jake Sully", artistaId: artista6.id, filmeId: filme3.id });
    const participacao8 = await Participacao.create({ personagem: "Neytiri", artistaId: artista7.id, filmeId: filme3.id });

    await cliente1.createTelefone({ numero: "(99) 9999-9999", clienteId: 1 });
    await filme1.createParticipacao({ personagem: "Rafael", artistaId: artista1.id, filmeId: filme1.id });

    const fita1 = await Fita.create({ danificada: false, disponivel: false, filmeId: 1 });
    const fita2 = await Fita.create({ danificada: false, disponivel: true, filmeId: 2 });
    const fita3 = await Fita.create({ danificada: false, disponivel: false, filmeId: 3 });
    const fita4 = await Fita.create({ danificada: false, disponivel: true, filmeId: 3 });
    const fita5 = await Fita.create({ danificada: false, disponivel: true, filmeId: 4 });

    const emprestimo1 = await Emprestimo.create({ data: "2023-04-10", valor: 15.0, clienteId: cliente1.id });
    const emprestimo2 = await Emprestimo.create({ data: "2023-04-13", valor: 10.0, clienteId: cliente2.id });

    const itemDeEmprestimo1 = await ItemDeEmprestimo.create({ emprestimoId: emprestimo1.id, fitaId: fita1.id, valor: 5.00, entrega: '2023-04-11' });
    const itemDeEmprestimo2 = await ItemDeEmprestimo.create({ emprestimoId: emprestimo1.id, fitaId: fita2.id, valor: 10.00, entrega: '2023-04-12' });
    const itemDeEmprestimo3 = await ItemDeEmprestimo.create({ emprestimoId: emprestimo2.id, fitaId: fita3.id, valor: 10.00, entrega: '2023-04-16' });

    const devolucao1 = await Devolucao.create({ emprestimoId: emprestimo1.id, fitaId: fita1.id, data: '2023-04-12' });
    const devolucao2 = await Devolucao.create({ emprestimoId: emprestimo1.id, fitaId: fita2.id, data: '2023-04-12' });
    
    const multa1 = await Multa.create({ emprestimoId: emprestimo1.id, fitaId: fita1.id, valor: 5.00, pago: false });

    const reserva1 = await Reserva.create({clienteId: cliente1.id, fitaId: fita1.id, data: '2023-04-13', status: 0});

})();


module.exports = connection;