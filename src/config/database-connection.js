import Sequelize from 'sequelize';
import { databaseConfig } from "./database-config.js";

import { Uf } from '../models/Uf.js';
import { Cidade } from '../models/Cidade.js';
import { Bairro } from '../models/Bairro.js';
import { Cliente } from '../models/Cliente.js';
import { Funcionario } from '../models/Funcionario.js';
import { Gerente } from '../models/Gerente.js';
import { Telefone } from '../models/Telefone.js';
import { TipoDeFilme } from '../models/TipoDeFilme.js';
import { Diretor } from '../models/Diretor.js';
import { Artista } from '../models/Artista.js';
import { Filme } from '../models/Filme.js';
import { Participacao } from '../models/Participacao.js';
import { Fita } from '../models/Fita.js';
import { Emprestimo } from '../models/Emprestimo.js';
import { ItemDeEmprestimo } from '../models/ItemDeEmprestimo.js';
import { Multa } from '../models/Multa.js';
import { Devolucao } from '../models/Devolucao.js';
import { Reserva } from '../models/Reserva.js';
import * as fs from 'fs';

const sequelize = new Sequelize(databaseConfig);

Uf.init(sequelize);
Cidade.init(sequelize);
Bairro.init(sequelize);
Cliente.init(sequelize);
Funcionario.init(sequelize);
Gerente.init(sequelize);
Telefone.init(sequelize);
TipoDeFilme.init(sequelize);
Diretor.init(sequelize);
Artista.init(sequelize);
Filme.init(sequelize);
Participacao.init(sequelize);
Fita.init(sequelize);
Emprestimo.init(sequelize);
ItemDeEmprestimo.init(sequelize);
Multa.init(sequelize);
Devolucao.init(sequelize);
Reserva.init(sequelize);

Uf.associate(sequelize.models);
Cidade.associate(sequelize.models);
Bairro.associate(sequelize.models);
Cliente.associate(sequelize.models);
Funcionario.associate(sequelize.models);
Gerente.associate(sequelize.models);
Telefone.associate(sequelize.models);
TipoDeFilme.associate(sequelize.models);
Diretor.associate(sequelize.models);
Filme.associate(sequelize.models);
Artista.associate(sequelize.models);
Participacao.associate(sequelize.models);
Fita.associate(sequelize.models);
Emprestimo.associate(sequelize.models);
ItemDeEmprestimo.associate(sequelize.models);
Multa.associate(sequelize.models);
Devolucao.associate(sequelize.models);
Reserva.associate(sequelize.models);

databaseInserts(); // comentar quando estiver em ambiente de produção (não criar tabelas e não inserir registros de teste)

function databaseInserts() {
    (async () => {

        await sequelize.sync();

/*        
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
        const cliente1telefone2 = await Telefone.create({ numero: "(22) 22222-2222", clienteId: 1 });
        const cliente2telefone1 = await Telefone.create({ numero: "(33) 33333-3333", clienteId: 2 });
        const cliente2telefone2 = await Telefone.create({ numero: "(44) 44444-4444", clienteId: 2 });

        const funcionario1 = await Funcionario.create({ nome: "Funcionário João", cpf: "333.333.333-33", rua: "Rua Dr. Brício Mesquita", numero: 1, login: "func1", senha: "123456", bairroId: 3 });
        const funcionario2 = await Funcionario.create({ nome: "Funcionário José", cpf: "444.444.444-44", rua: "Rua José Figueiredo", numero: 2, login: "func2", senha: "123456", bairroId: 1 });

        const gerente1 = await Gerente.create({ nome: "Gerente João", cpf: "555.555.555-55", rua: "Rua Dr. Brício Mesquita", numero: 1, login: "ger1", senha: "123456", bairroId: 3 });
        const gerente2 = await Gerente.create({ nome: "Gerente José", cpf: "666.666.666-66", rua: "Rua José Figueiredo", numero: 2, login: "ger2", senha: "123456", bairroId: 1 });

        const tipoDeFilme1 = await TipoDeFilme.create({ nome: "Promoção A", prazo: 1, preco: 5.00 });
        const tipoDeFilme2 = await TipoDeFilme.create({ nome: "Promoção B", prazo: 2, preco: 10.00 });
        const tipoDeFilme3 = await TipoDeFilme.create({ nome: "Promoção C", prazo: 3, preco: 15.00 });

        const diretor1 = await Diretor.create({ nome: "Sheldon Lettich" });
        const diretor2 = await Diretor.create({ nome: "James Cameron" });
        const diretor3 = await Diretor.create({ nome: "Jon Landau" });
        const diretor4 = await Diretor.create({ nome: "Quentin Tarantino" });

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

        await filme1.addDiretores(diretor1, { through: 'filmes_diretores', });
        await filme2.addDiretores(diretor2, { through: 'filmes_diretores' });
        await filme3.addDiretores(diretor2, { through: 'filmes_diretores' });
        await filme4.addDiretores(diretor3, { through: 'filmes_diretores' });
        await filme4.addDiretores(diretor4, { through: 'filmes_diretores' });

        const participacao1 = await Participacao.create({ personagem: "Alex", artistaId: artista1.id, filmeId: filme1.id });
        const participacao2 = await Participacao.create({ personagem: "Chad", artistaId: artista1.id, filmeId: filme1.id });
        const participacao3 = await Participacao.create({ personagem: "Frank", artistaId: artista2.id, filmeId: filme1.id });
        const participacao4 = await Participacao.create({ personagem: "Moon", artistaId: artista3.id, filmeId: filme1.id });
        const participacao5 = await Participacao.create({ personagem: "Jack", artistaId: artista4.id, filmeId: filme2.id });
        const participacao6 = await Participacao.create({ personagem: "Rose", artistaId: artista5.id, filmeId: filme2.id });
        const participacao7 = await Participacao.create({ personagem: "Jake Sully", artistaId: artista6.id, filmeId: filme3.id });
        const participacao8 = await Participacao.create({ personagem: "Neytiri", artistaId: artista7.id, filmeId: filme3.id });

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

        const reserva1 = await Reserva.create({ clienteId: cliente1.id, fitaId: fita1.id, data: '2023-04-13', status: 1 });
*/    
    })();
}

export default sequelize;