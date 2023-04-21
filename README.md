<h1 align="center">
    <img alt="RVM" src="https://github.com/ravarmes/scv-backend-node-sequelize/blob/main/assets/logo.jpg" />
</h1>

<h3 align="center">
  Backend Completo :: Node :: Sequelize
</h3>

<p align="center">Sistema de Controle de Videolocadora com Node.js e ORM Sequelize</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ravarmes/scv-backend-node-sequelize?color=%2304D361">

  <a href="http://www.linkedin.com/in/rafael-vargas-mesquita">
    <img alt="Made by Rafael Vargas Mesquita" src="https://img.shields.io/badge/made%20by-Rafael%20Vargas%20Mesquita-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/ravarmes/scv-backend-node-sequelize/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ravarmes/scv-backend-node-sequelize?style=social">
  </a>
</p>

<p align="center">
  <a href="#-documentacao">Documentação do sistema</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-branches">Sobre as branches</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalacao">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-telas">Telas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-links">Links</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licenca">Licença</a>
</p>

## :book: Documentação do sistema <a name="-documentacao"/></a>
### Sistema de Controle da Videolocadora (Backend Node) <a name="-documentacao"/></a>
> Esta é uma API para informatizar os processos de empréstimo, devolução e reserva de fitas.

### Manutenção de Cadastros

```
* Gerente
* Funcionário
* Cliente
* UF
* Cidade
* Bairro
* Tipo de Filme
* Filme
* Fita
* Artista
* Diretor
```

### Processos de Negócio

```
* Empréstimo de Fita
* Devolução de Fita
* Reserva de Fita
* Pagamento de Multa
```

### Relatórios

```
* Listar Empréstimos (Por Cliente, Data Início e Data Término)
* Listar Reservas (Por Cliente, Status, Data Início e Data Término)
* Listar Devoluções (Por Cliente, Filme, Data Início e Data Término)
* Listar Totais e Quantidades de Empréstimos de Clientes (Por Início e Término)
* Listar Quantidades de Empréstimos nos Bairros (Por Início e Término)
* Listar Quantidades de Reservas de Clientes (Por Status, Início e Término)
* Listar Quantidades de Devoluções de Clientes (Por Filme, Data Início e Data Término)	
```

### Documento de requisitos do SCV
[Documento] https://drive.google.com/file/d/1yDxAPrj1cGqsuaCyetJDXJNmtMOxXHd5

### Documentação das requisições do SCV Backend no Postman
[Postman] (https://documenter.getpostman.com/view/4048967/Szf9XTg4)

### Implantação do SCV Frontend React Redux
[GitHub Pages] (https://ravarmes.github.io/scv-frontend-react-redux/)

## :seedling: Sobre as branches <a name="-branches"/></a>
```
* Aula 01 - Criação do Projeto e Classes de Modelo
* Aula 02 - Classes de Controle e Serviço para Cadastros
* Aula 03 - Classes de Controle e Serviço para Processos de Negócio
* Aula 04 - Relatórios
* Aula 05 - Configuração de CORS (Cross-origin Resource Sharing)
* Aula 06 - Imagens com BLOB (Binary Large Object)
```

## :computer: Instalação e execução <a name="-instalacao"/></a>

0. Instale a biblioteca [Node](https://nodejs.org/en/download/);
1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd scv-backend-node-sequelize`;
3. Rode `npm install` para instalar as dependências;
4. Rode `npm run dev` para iniciar o servidor de desenvolvimento;
5. Abra `http://localhost:3333` para ver o projeto no navegador.

## :clapper: Tela(s) <a name="-telas"/></a>

<img src="https://github.com/ravarmes/scv-backend-node-sequelize/blob/main/assets/scv-backend-node-sequelize-1.png" width="700">
<img src="https://github.com/ravarmes/scv-backend-node-sequelize/blob/main/assets/scv-backend-node-sequelize-2.gif" width="700">
<img src="https://github.com/ravarmes/scv-backend-node-sequelize/blob/main/assets/uml.png" width="700">


## :link: Links <a name="-links"/></a>

- [YouTube](https://www.youtube.com/playlist?list=PL-mvLy2ws8IICXCodoKVwHZq9E987CUrz) - Playlist com vídeos de explicação sobre o código;

## :memo: Licença <a name="-licenca"/></a>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

## :email: Contato

Rafael Vargas Mesquita - [GitHub](https://github.com/ravarmes) - [LinkedIn](https://www.linkedin.com/in/rafael-vargas-mesquita) - [Lattes](http://lattes.cnpq.br/6616283627544820) - **ravarmes@hotmail.com**

---

Feito com ♥ by Rafael Vargas Mesquita :wink: